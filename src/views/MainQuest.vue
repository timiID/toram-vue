<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mqData, getAllChapters, paginateMQ } from '@/data/mq.js';

const props = defineProps(['isDark']);
const emit = defineEmits(['toggleDark']);

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
    { label: 'DATABASE', val: mqData.length, grad: 'from-blue-600 to-indigo-500' },
    { label: 'CHAPTERS', val: all_chapters.length, grad: 'from-purple-600 to-pink-500' },
    { label: 'RESULTS', val: items.value.total, grad: 'from-emerald-600 to-teal-500' },
    { label: 'LATEST', val: all_chapters.length > 0 ? all_chapters[all_chapters.length - 1].split(' ').pop() : '-', grad: 'from-orange-600 to-amber-500' }
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

const changePage = (p) => {
    if (p >= 1 && p <= items.value.last_page) {
        router.push({ query: { ...route.query, page: p } });
    }
};

watch([search, selectedChapter], () => {
    setTimeout(() => updateFilter(), 400);
});
</script>

<template>
    <div :class="['min-h-screen transition-all duration-1000 font-sans p-4 md:p-8 pt-6 relative overflow-hidden', 
        isDark ? 'bg-[#020617] text-white' : 'bg-[#f8fafc] text-slate-900']">
        
        <div v-if="isDark" class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div class="max-w-[1400px] mx-auto relative z-10 space-y-8">
            
            <div :class="['relative p-8 md:p-14 rounded-[3rem] border-2 overflow-hidden shadow-2xl transition-all duration-500', 
                isDark ? 'border-white/10 bg-slate-900/40' : 'border-white bg-white shadow-indigo-100']">
                <div class="absolute top-0 right-0 h-full w-1/3 z-0 hidden lg:block pointer-events-none">
                    <img src="/images/mq.png" class="w-full h-full object-contain object-right opacity-20 dark:opacity-40 translate-x-10 scale-110" />
                </div>
                <div class="relative z-10">
                    <h2 class="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter">
                        MAIN QUEST <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">LIST</span>
                    </h2>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-1 w-12 bg-indigo-600 rounded-full"></div>
                        <span class="text-[10px] font-black tracking-[0.4em] uppercase opacity-60">Timi DB</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div v-for="stat in stats" :key="stat.label" 
                    :class="['flex flex-col items-center justify-center py-8 rounded-[2rem] shadow-xl text-white bg-gradient-to-br transition-all hover:-translate-y-1', stat.grad]">
                    <span class="text-[9px] font-black uppercase tracking-widest opacity-70 mb-1">{{ stat.label }}</span>
                    <span class="font-black italic tracking-tighter text-2xl md:text-3xl uppercase">{{ stat.val }}</span>
                </div>
            </div>

            <div :class="['grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border-2 rounded-[2.5rem] shadow-2xl transition-all duration-500', 
                isDark ? 'border-white/10 bg-black/30' : 'border-white bg-white shadow-indigo-100/50']">
                <div class="space-y-2">
                    <label class="text-[10px] font-black uppercase tracking-widest ml-2 opacity-50">Search Item</label>
                    <div class="relative">
                        <input v-model="search" type="text" placeholder="Search item name..." 
                            :class="['w-full border-2 rounded-2xl py-4 px-6 text-sm font-bold outline-none transition-all focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500', 
                            isDark ? 'bg-slate-900/50 border-white/5 text-white' : 'bg-slate-50 border-slate-100']" />
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="text-[10px] font-black uppercase tracking-widest ml-2 opacity-50">Filter Chapter</label>
                    <select v-model="selectedChapter" 
                        :class="['w-full border-2 rounded-2xl py-4 px-6 text-sm font-black outline-none cursor-pointer focus:border-indigo-500 transition-all', 
                        isDark ? 'bg-slate-900/50 border-white/5 text-white' : 'bg-slate-50 border-slate-100']">
                        <option value="Semua Chapter">All Chapter</option>
                        <option v-for="chap in all_chapters" :key="chap" :value="chap">{{ chap }}</option>
                    </select>
                </div>
            </div>

            <div :class="['border-2 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all', 
                isDark ? 'border-white/5 bg-slate-900/40' : 'border-white bg-white']">
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[700px]">
                        <thead>
                            <tr :class="['uppercase text-[9px] font-black tracking-widest border-b-2', isDark ? 'bg-white/5 text-slate-500 border-white/5' : 'bg-slate-50 text-slate-400 border-slate-100']">
                                <th class="p-6 w-[80px] text-center">No.</th>
                                <th class="p-6 text-left">Chapter Info</th>
                                <th class="p-6 text-left">Required Item</th>
                                <th class="p-6 w-[120px] text-center">Qty</th>
                            </tr>
                        </thead>
                        <tbody :class="['divide-y font-bold', isDark ? 'divide-white/5 text-slate-300' : 'divide-slate-100 text-slate-700']">
                            <tr v-for="(item, index) in items.data" :key="item.id" class="group hover:bg-indigo-600/[0.03] transition-colors">
                                <td class="p-6 text-center font-black text-slate-400 italic">{{ items.from + index }}</td>
                                <td class="p-6">
                                    <span class="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-tighter">
                                        {{ item.chapter }}
                                    </span>
                                </td>
                                <td class="p-6">
                                    <div class="font-black uppercase tracking-tight text-sm group-hover:text-indigo-500 transition-colors">{{ item.nama_item }}</div>
                                </td>
                                <td class="p-6 text-center">
                                    <span class="font-black italic text-2xl text-indigo-600 drop-shadow-sm">{{ item.jumlah }}</span>
                                </td>
                            </tr>
                            <tr v-if="items.total === 0">
                                <td colspan="4" class="p-20 text-center opacity-40 font-black uppercase tracking-widest text-xs">No Data Found</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row justify-between items-center gap-6 pb-20 px-4">
                <button @click="updateFilter(items.per_page == items.total ? 10 : 'all')" 
                    :class="['h-12 px-8 rounded-xl border-2 font-black text-[10px] uppercase transition-all shadow-lg flex items-center gap-2 active:scale-95', 
                    items.per_page == items.total ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white dark:bg-slate-900 border-indigo-600 text-indigo-600 dark:text-indigo-400']">
                    {{ items.per_page == items.total ? 'Limit to 10' : 'Show All' }}
                </button>

                <div v-if="items.last_page > 1" class="flex items-center gap-2">
                    <button @click="changePage(items.current_page - 1)" 
                        :disabled="items.current_page === 1"
                        :class="['w-10 h-12 rounded-xl border-2 flex items-center justify-center transition-all active:scale-90 disabled:opacity-20 disabled:pointer-events-none',
                        isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200']">
                        <span class="font-black">«</span>
                    </button>

                    <div class="flex items-center gap-2">
                        <template v-for="page in displayedPages" :key="page">
                            <span v-if="page === '...'" class="px-2 opacity-50 font-black">...</span>
                            <router-link v-else
                                :to="{ query: { ...route.query, page: page } }"
                                :class="['w-10 h-12 rounded-xl border-2 font-black text-[10px] transition-all flex items-center justify-center shadow-md hover:scale-105 active:scale-95',
                                items.current_page == page ? 'bg-indigo-600 border-indigo-600 text-white' : (isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-100')]">
                                {{ page }}
                            </router-link>
                        </template>
                    </div>

                    <button @click="changePage(items.current_page + 1)" 
                        :disabled="items.current_page === items.last_page"
                        :class="['w-10 h-12 rounded-xl border-2 flex items-center justify-center transition-all active:scale-90 disabled:opacity-20 disabled:pointer-events-none',
                        isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200']">
                        <span class="font-black">»</span>
                    </button>
                </div>

                <div class="text-[10px] font-black uppercase tracking-widest opacity-40">
                    Total: {{ items.total }} Items
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.animate-page-in {
    animation: page-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes page-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Custom Scrollbar for Table */
::-webkit-scrollbar {
    height: 8px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    @apply bg-indigo-600/20 rounded-full;
}
</style>