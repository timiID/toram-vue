<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mqData, getAllChapters } from '@/data/mq.js';

const props = defineProps(['isDark']);
const emit = defineEmits(['toggleDark']);

const route = useRoute();
const router = useRouter();

// --- STATE ---
const search = ref(route.query.search || '');
const selectedChapter = ref(route.query.chapter || 'Semua Chapter');
const currentPage = ref(parseInt(route.query.page) || 1);
const itemsPerPage = ref(parseInt(route.query.per_page) || 10);
const all_chapters = getAllChapters();

// --- CORE LOGIC ---
const filteredItems = computed(() => {
    return mqData.filter(item => {
        const s = search.value.toLowerCase();
        const matchSearch = item.nama_item.toLowerCase().includes(s) || item.chapter.toLowerCase().includes(s);
        const matchChapter = selectedChapter.value === 'Semua Chapter' || item.chapter === selectedChapter.value;
        return matchSearch && matchChapter;
    });
});

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value) || 1);

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredItems.value.slice(start, start + itemsPerPage.value);
});

// --- TOGGLE SHOW ALL ---
const toggleShowAll = () => {
    if (itemsPerPage.value === 10) {
        itemsPerPage.value = filteredItems.value.length;
    } else {
        itemsPerPage.value = 10;
    }
    currentPage.value = 1;
    updateRouter();
};

const updateRouter = () => {
    router.push({
        query: {
            ...route.query,
            search: search.value || undefined,
            chapter: selectedChapter.value !== 'Semua Chapter' ? selectedChapter.value : undefined,
            per_page: itemsPerPage.value,
            page: currentPage.value
        }
    });
};

const changePage = (p) => {
    if (p >= 1 && p <= totalPages.value) {
        currentPage.value = p;
        updateRouter();
    }
};

watch([search, selectedChapter], () => {
    currentPage.value = 1;
    updateRouter();
});

const displayedPages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    let pages = [];
    if (current <= 3) { pages = [1, 2, 3, '...', total]; }
    else if (current >= total - 2) { pages = [1, '...', total - 2, total - 1, total]; }
    else { pages = [1, '...', current, '...', total]; }
    return pages;
});

const stats = computed(() => [
    { label: 'ALL ITEM', val: mqData.length, grad: 'from-blue-700 to-blue-500' },
    { label: 'CHAPTERS', val: all_chapters.length, grad: 'from-purple-600 to-fuchsia-600' },
    { label: 'RESULTS', val: filteredItems.value.length, grad: 'from-emerald-600 to-teal-600' },
    { label: 'LATEST', val: all_chapters.length > 0 ? all_chapters[all_chapters.length - 1].split(' ').pop() : '-', grad: 'from-orange-600 to-amber-500' }
]);
</script>

<template>
    <div class="bg-transparent py-0 px-2 md:px-4 font-sans">
        
        <div class="max-w-9xl mx-auto space-y-6 md:space-y-10">
    <div :class="['relative p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl',
      isDark ? 'border-blue-500 bg-black/40' : 'border-blue-600 bg-white/60 shadow-blue-200']">
        
        <div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none">
            <img src="/images/mq.png" class="w-full h-full object-contain object-right opacity-30 scale-110" />
        </div>

        <div class="relative z-10 text-center md:text-left">
            <h2 :class="['text-3xl md:text-6xl font-black italic uppercase leading-none tracking-tighter', props.isDark ? 'text-white' : 'text-slate-900']">
                MAIN QUEST<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">LIST DB</span>
            </h2>

            <div class="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                <div class="flex items-center gap-3">
                    <div class="h-1.5 w-16 bg-blue-600 rounded-full"></div>
                    <img src="/images/logo.png" class="h-8 md:h-12 w-auto object-contain" />
                </div>

                <div class="flex items-center gap-2 select-none whitespace-nowrap">
                    <span :class="['font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl', isDark ? 'text-white' : 'text-slate-900']">
                        TIMI
                    </span>
                    <span class="text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                        DB
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div :class="['grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md',
        props.isDark ? 'border-fuchsia-500 bg-black/40' : 'border-fuchsia-600 bg-white/80']">
        
        <div class="flex flex-col gap-2">
            <label class="text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500">Search Item</label>
            
            <div class="relative group">
                <input 
                    v-model="search" 
                    type="text" 
                    placeholder="Find MQ item..." 
                    :class="['w-full border-[3px] rounded-xl md:rounded-2xl py-4 md:py-5 pr-4 pl-14 text-sm font-bold outline-none transition-all focus:border-indigo-500', 
props.isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20' : 'bg-slate-50 border-slate-200 text-slate-900']"/>
                
                <div class="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                    </svg>
                </div>
            </div>
        </div>

                
                <div class="flex flex-col gap-1.5 relative">
                    <label class="text-[9px] font-black uppercase tracking-widest ml-4 text-fuchsia-500">Chapter Filter</label>
                    <div class="relative group">
                        <select v-model="selectedChapter" 
                            :class="['w-full h-18 border-[3px] rounded-xl px-4 pr-10 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500 appearance-none', 
                            props.isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900']">
                            <option value="Semua Chapter">All Chapter</option>
                            <option v-for="chap in all_chapters" :key="chap" :value="chap">{{ chap }}</option>
                        </select>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-fuchsia-500 opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="['border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl',
                props.isDark ? 'border-lime-400 bg-black/60' : 'border-indigo-600 bg-white/90']">
                
                <div class="hidden lg:block overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr :class="['uppercase text-[10px] font-black tracking-widest border-b-[4px]', 
                                props.isDark ? 'bg-white/5 text-lime-400 border-lime-500/30' : 'bg-slate-50 text-indigo-700 border-indigo-200']">
                                <th :class="['p-8 w-[10%] text-center border-r-[2px]', props.isDark ? 'border-white/10' : 'border-slate-200']">No.</th>
                                <th :class="['p-8 w-[25%] text-left border-r-[2px]', props.isDark ? 'border-white/10' : 'border-slate-200']">Chapter Info</th>
                                <th :class="['p-8 w-[45%] text-left border-r-[2px]', props.isDark ? 'border-white/10' : 'border-slate-200']">Required Item</th>
                                <th class="p-8 w-[20%] text-center">Need</th>
                            </tr>
                        </thead>
                        <tbody :class="['divide-y-[2px]', props.isDark ? 'divide-white/10 text-white/80' : 'divide-slate-200 text-slate-700']">
                            <tr v-for="(item, index) in paginatedItems" :key="index" class="hover:bg-indigo-500/5 transition-all">
                                <td :class="['p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]', props.isDark ? 'border-white/10' : 'border-slate-200']">
                                    {{ ((currentPage - 1) * itemsPerPage) + index + 1 }}
                                </td>
                                <td :class="['p-8 border-r-[2px]', props.isDark ? 'border-white/10' : 'border-slate-200']">
                                    <span class="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase">
                                        {{ item.chapter }}
                                    </span>
                                </td>
                                <td :class="['p-8 border-r-[2px] font-black uppercase text-lg tracking-tight', 
                                    props.isDark ? 'text-white border-white/10' : 'text-slate-800 border-slate-200']">
                                    {{ item.nama_item }}
                                </td>
                                <td class="p-8 text-center bg-black/5">
                                    <span class="font-black italic text-5xl text-indigo-600">{{ item.jumlah }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div :class="['lg:hidden divide-y-[3px]', props.isDark ? 'divide-white/10' : 'divide-slate-200']">
                    <div v-for="(item, index) in paginatedItems" :key="index" class="p-6 space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-black italic text-indigo-500/30">#{{ ((currentPage - 1) * itemsPerPage) + index + 1 }}</span>
                            <span class="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase">
                                {{ item.chapter }}
                            </span>
                        </div>
                        <div :class="['flex justify-between items-center p-5 rounded-2xl border-[3px]', 
                            props.isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900 shadow-inner']">
                            <div class="font-black uppercase text-sm leading-tight max-w-[60%]">{{ item.nama_item }}</div>
                            <div class="text-right">
                                <span class="block text-[9px] font-black uppercase text-indigo-600 opacity-60">Need</span>
                                <span class="text-4xl font-black italic text-indigo-600">{{ item.jumlah }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-6 justify-center items-center pb-20">
                <div v-if="totalPages > 1" class="flex flex-wrap justify-center items-center gap-2">
                    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" 
                        :class="['h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20',
                        props.isDark ? 'border-indigo-600 bg-black/40 text-indigo-400' : 'border-indigo-600 bg-white text-indigo-600']">
                        «
                    </button>

                    <template v-for="(page, index) in displayedPages" :key="index">
                        <span v-if="page === '...'" class="text-indigo-500 font-black px-2">...</span>
                        <button v-else @click="changePage(page)"
                            :class="['h-12 w-12 rounded-xl border-[3px] font-black transition-all',
                                currentPage === page 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110' 
                                : (props.isDark ? 'bg-black/40 border-indigo-800 text-indigo-400' : 'bg-white border-indigo-200 text-indigo-600')]">
                            {{ page }}
                        </button>
                    </template>

                    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" 
                        :class="['h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20',
                        props.isDark ? 'border-indigo-600 bg-black/40 text-indigo-400' : 'border-indigo-600 bg-white text-indigo-600']">
                        »
                    </button>
                </div>

                <button @click="toggleShowAll" 
                    class="w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl">
                    {{ itemsPerPage === 10 ? 'Show All Database' : 'Show 10 Rows' }}
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Scrollbar Stylings */
::-webkit-scrollbar { height: 6px; width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(79, 70, 229, 0.3); border-radius: 10px; }

.border-inherit { border-color: inherit; }

/* Tambahan untuk background dropdown saat dark mode */
select option {
    background-color: #1a1a1a; /* Warna gelap saat dropdown terbuka */
    color: white;
}

/* Memastikan input/select tidak berubah warna putih saat auto-fill atau fokus */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
    -webkit-text-fill-color: inherit;
    transition: background-color 5000s ease-in-out 0s;
}
</style>