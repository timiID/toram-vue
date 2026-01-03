<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// HAPUS IMPORT NAVBAR DI SINI (SUDAH ADA DI APP.VUE)
import { mqData, getAllChapters, paginateMQ } from '@/data/mq.js';

const props = defineProps(['isDark']);
const emit = defineEmits(['toggleDark', 'toggle-dark']); // Tambahkan toggle-dark untuk keamanan

const route = useRoute();
const router = useRouter();

// --- STATE ---
const search = ref(route.query.search || '');
const selectedChapter = ref(route.query.chapter || 'Semua Chapter');
const perPage = ref(route.query.per_page || 10);
const all_chapters = getAllChapters();

// --- CORE LOGIC ---
const items = computed(() => {
    let filtered = mqData.filter(item => {
        const s = search.value.toLowerCase();
        const matchSearch = item.nama_item.toLowerCase().includes(s) || item.chapter.toLowerCase().includes(s);
        const matchChapter = selectedChapter.value === 'Semua Chapter' || item.chapter === selectedChapter.value;
        return matchSearch && matchChapter;
    });

    const page = parseInt(route.query.page) || 1;
    return paginateMQ(filtered, page, perPage.value);
});

const displayedPages = computed(() => {
    const current = items.value.current_page;
    const last = items.value.last_page;
    const delta = 1;
    let pages = [];
    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= current - delta && i <= current + delta)) {
            pages.push(i);
        } else if (pages.length > 0 && pages[pages.length - 1] !== '...') {
            pages.push('...');
        }
    }
    return pages;
});

const stats = computed(() => [
    { label: 'DATABASE', val: mqData.length, grad: 'from-blue-600 to-blue-400' },
    { label: 'CHAPTERS', val: all_chapters.length, grad: 'from-purple-600 to-purple-400' },
    { label: 'RESULTS', val: items.value.total, grad: 'from-emerald-600 to-emerald-400' },
    // Tambahkan pengaman agar tidak blank jika data kosong
    { label: 'LATEST', val: all_chapters.length > 0 ? all_chapters[all_chapters.length - 1] : '-', grad: 'from-amber-600 to-amber-400' }
]);

const updateFilter = (newPerPage = null) => {
    if (newPerPage) perPage.value = newPerPage;
    router.push({
        query: {
            ...route.query,
            search: search.value || undefined,
            chapter: selectedChapter.value !== 'Semua Chapter' ? selectedChapter.value : undefined,
            per_page: perPage.value,
            page: 1
        }
    });
};

watch([search, selectedChapter], () => {
    setTimeout(() => updateFilter(), 400);
});
</script>

<template>
    <div :class="['min-h-screen transition-all duration-1000 font-sans p-6 md:p-12 pt-10 relative overflow-hidden', 
        isDark ? 'bg-[#020617] text-white' : 'bg-[#f8fafc] text-slate-900']">
        
        <div v-if="isDark" class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
            <div class="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"></div>
        </div>

        <div class="max-w-[1400px] mx-auto relative z-10 space-y-10">
            <div :class="['relative p-10 md:p-16 rounded-[3.5rem] border-2 overflow-hidden shadow-2xl transition-all duration-500', 
                isDark ? 'border-white/10 bg-slate-900/40' : 'border-white bg-white/40 shadow-indigo-100']">
                <div class="absolute top-0 right-0 h-full w-1/2 z-0 hidden md:block">
                    <img src="/images/mq.png" class="w-full h-full object-contain object-right opacity-90" />
                </div>
                <div class="relative z-10">
                    <h2 class="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter">
                        Main Quest<br>List
                    </h2>
                    <div class="mt-6 flex items-center gap-4">
                        <img src="/images/logo.png" class="h-12 w-auto object-contain" />
                        <span class="text-2xl md:text-4xl font-black italic text-indigo-600 uppercase tracking-tighter">TIMI DB</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                <div v-for="stat in stats" :key="stat.label" 
                    :class="['flex flex-col items-center justify-center py-10 rounded-[2.5rem] shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105', stat.grad]">
                    <span class="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2">{{ stat.label }}</span>
                    <span class="font-black italic tracking-tighter text-center text-2xl md:text-4xl px-2">{{ stat.val }}</span>
                </div>
            </div>

            <div :class="['grid grid-cols-1 md:grid-cols-2 gap-8 p-10 border-2 rounded-[3.5rem] shadow-2xl transition-all duration-500', 
                isDark ? 'border-white/10 bg-black/30' : 'border-white bg-white/40 shadow-indigo-100']">
                <div class="flex flex-col gap-3">
                    <label class="text-[11px] font-black uppercase tracking-widest ml-4 opacity-50">Search Item</label>
                    <input v-model="search" type="text" placeholder="Search item name MQ..." 
                        :class="['w-full border-2 rounded-2xl p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500', 
                        isDark ? 'bg-slate-900/50 border-white/5 text-white' : 'bg-white border-slate-100']" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-[11px] font-black uppercase tracking-widest ml-4 opacity-50">Filter Chapter</label>
                    <select v-model="selectedChapter" 
                        :class="['w-full border-2 rounded-2xl p-5 text-sm font-black outline-none cursor-pointer focus:border-indigo-500', 
                        isDark ? 'bg-slate-900/50 border-white/5 text-white' : 'bg-white border-slate-100']">
                        <option value="Semua Chapter">All Chapter</option>
                        <option v-for="chap in all_chapters" :key="chap" :value="chap">{{ chap }}</option>
                    </select>
                </div>
            </div>

            <div :class="['border-2 rounded-[3.5rem] shadow-2xl overflow-x-auto mb-12 transition-all', 
                isDark ? 'border-white/5 bg-slate-900/60' : 'border-white bg-white/80']">
                <table class="w-full min-w-[800px]">
                    <thead>
                        <tr :class="['uppercase text-[10px] font-black tracking-widest border-b-2', isDark ? 'bg-white/5 text-slate-500 border-white/5' : 'bg-slate-50 text-slate-400 border-slate-100']">
                            <th class="p-8 w-[10%] text-center border-r border-white/5">No.</th>
                            <th class="p-8 w-[25%] text-left">Chapter</th>
                            <th class="p-8 w-[50%] text-left">Item Name</th>
                            <th class="p-8 w-[15%] text-center">Quantity</th>
                        </tr>
                    </thead>
                    <tbody :class="['divide-y text-xs font-bold', isDark ? 'divide-white/5 text-slate-300' : 'divide-slate-100 text-slate-700']">
                        <tr v-for="(item, index) in items.data" :key="item.id" class="hover:bg-indigo-500/10 transition-all">
                            <td class="p-8 text-center font-black text-slate-400 italic text-sm border-r border-white/5">{{ items.from + index }}</td>
                            <td class="p-8 font-black uppercase text-indigo-500">{{ item.chapter }}</td>
                            <td class="p-8 font-black uppercase tracking-tighter text-sm">{{ item.nama_item }}</td>
                            <td class="p-8 text-center font-black italic text-blue-600 text-3xl">{{ item.jumlah }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="flex flex-col md:flex-row justify-center items-center gap-6 pb-20">
                <div v-if="items.last_page > 1" class="flex items-center gap-4">
                    <router-link v-for="page in displayedPages" :key="page"
                        :to="{ query: { ...route.query, page: page === '...' ? route.query.page : page } }"
                        :class="['w-12 h-14 rounded-2xl border-2 font-black text-xs transition-all shadow-lg flex items-center justify-center',
                        items.current_page == page ? 'bg-indigo-600 border-indigo-600 text-white scale-110' : (isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-white')]">
                        {{ page }}
                    </router-link>
                </div>
                <button @click="updateFilter(items.per_page == items.total ? 10 : 'all')" 
                    :class="['h-14 px-8 rounded-2xl border-2 font-black text-[11px] uppercase transition-all shadow-xl flex gap-3 items-center', 
                    items.per_page == items.total ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-indigo-600 text-white']">
                    {{ items.per_page == items.total ? 'Show 10 Per Page' : 'Show All Results' }}
                </button>
            </div>
        </div>
    </div>
</template>