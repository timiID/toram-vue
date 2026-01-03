<script setup>
import { ref, computed, watch } from 'vue';
import { bags } from '@/data/bags'; 

const props = defineProps(['isDark']);

// --- SEARCH & FILTER LOGIC ---
const search = ref('');
const selectedKelas = ref('All Class');
const selectedSlot = ref('All Slot');
const currentPage = ref(1);
const itemsPerPage = ref(10); 

const toggleShowAll = () => {
    if (itemsPerPage.value === 10) {
        itemsPerPage.value = filteredItems.value.length;
    } else {
        itemsPerPage.value = 10;
    }
    currentPage.value = 1;
};

const formatQty = (qty) => {
    if (!qty || qty === '-') return '-';
    let clean = qty.toString().replace(/x/gi, '').trim();
    return (clean === '0' || clean === '') ? '-' : clean;
};

const filteredItems = computed(() => {
    let results = bags.filter(item => {
        const s = search.value.toLowerCase();
        const itemKelas = item.kelas_mob || ''; 
        
        const matchesSearch = !search.value || (
            item.nama_item?.toLowerCase().includes(s) ||
            item.monster?.toLowerCase().includes(s) ||
            item.lokasi?.toLowerCase().includes(s)
        );

        let matchesKelas = true;
        if (selectedKelas.value !== 'All Class') {
            if (selectedKelas.value === 'Mob') {
                matchesKelas = (itemKelas === 'Mob' || itemKelas === 'Miniboss/Mob');
            } 
            else if (selectedKelas.value === 'Miniboss') {
                matchesKelas = (itemKelas === 'Miniboss' || itemKelas === 'Miniboss/Mob');
            } 
            else {
                matchesKelas = itemKelas === selectedKelas.value;
            }
        }

        const matchesSlot = selectedSlot.value === 'All Slot' || String(item.slot).includes(String(selectedSlot.value));
        
        return matchesSearch && matchesKelas && matchesSlot;
    });

    return results.sort((a, b) => {
        const valA = parseInt(String(a.slot).match(/\d+/)) || 0;
        const valB = parseInt(String(b.slot).match(/\d+/)) || 0;
        return valA - valB;
    });
});

watch([search, selectedKelas, selectedSlot], () => {
    currentPage.value = 1;
});

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value) || 1);

const displayedPages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    
    let pages = [];
    if (current <= 3) {
        pages = [1, 2, 3, '...', total];
    } else if (current >= total - 2) {
        pages = [1, '...', total - 2, total - 1, total];
    } else {
        pages = [1, '...', current, '...', total];
    }
    return pages;
});

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredItems.value.slice(start, start + itemsPerPage.value);
});

const uniqueSlots = computed(() => {
    const slots = [...new Set(bags.map(i => i.slot))];
    return slots.sort((a, b) => (parseInt(a) || 0) - (parseInt(b) || 0));
});

const stats = computed(() => [
    { label: 'ALL ITEM', val: bags.length, grad: 'from-blue-700 to-blue-500' },
    { label: 'RESULTS', val: filteredItems.value.length, grad: 'from-fuchsia-600 to-purple-600' },
    { label: 'BOSS', val: bags.filter(i => i.kelas_mob === 'Boss').length, grad: 'from-orange-600 to-red-600' },
    { label: 'SLOTS', val: uniqueSlots.value.length, grad: 'from-lime-500 to-emerald-600' }
]);

const getBadgeClass = (kelas) => {
    const base = "px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";
    if (kelas === 'Mob') return base + "bg-green-500/10 text-green-500 border-green-500/50";
    if (kelas === 'Miniboss/Mob') return base + "bg-indigo-500/10 text-indigo-500 border-indigo-500/50";
    if (kelas === 'Miniboss') return base + "bg-purple-500/10 text-purple-500 border-purple-500/50";
    if (kelas === 'Boss') return base + "bg-red-500/10 text-red-500 border-red-500/50";
    if (kelas === 'Spina') return base + "bg-amber-500/10 text-amber-500 border-amber-500/50";
    return base + "bg-emerald-500/10 text-emerald-500 border-emerald-500/50";
};
</script>

<template>
    <div class="bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10">
        <div class="max-w-7xl mx-auto space-y-6 md:space-y-10">
            
            <div :class="['relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl',
                isDark ? 'border-blue-500 bg-black/40' : 'border-blue-600 bg-white/60 shadow-blue-200']">
                <div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none">
                    <img src="/images/Bag-Toram.png" class="w-full h-full object-contain object-right opacity-30 scale-110" />
                </div>
                <div class="relative z-10 text-center md:text-left">
                    <h2 :class="['text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter', isDark ? 'text-white' : 'text-slate-900']">
                        LIST BAG<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">EXPANSION</span>
                    </h2>
                    <div class="mt-4 flex items-center justify-center md:justify-start gap-3">
                        <div class="h-1.5 w-16 bg-blue-600 rounded-full"></div>
                        <img src="/images/logo.png" class="h-8 md:h-12 w-auto object-contain" />
                        <span class="text-xl md:text-4xl font-black italic text-blue-600 uppercase tracking-tighter">TIMI DB</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div v-for="s in stats" :key="s.label" 
                    :class="['p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white', 
                    s.grad, isDark ? 'border-white/20' : 'border-black/5']">
                    <div class="text-[10px] md:text-xs font-black opacity-80 uppercase tracking-widest">{{ s.label }}</div>
                    <div class="text-3xl md:text-5xl font-black italic mt-1 leading-none">{{ s.val }}</div>
                </div>
            </div>

            <div :class="['p-6 md:p-8 rounded-[2.5rem] border-[4px] backdrop-blur-xl shadow-2xl transition-all',
                isDark ? 'bg-black/40 border-indigo-500/50' : 'bg-white/80 border-indigo-600 shadow-indigo-100']">
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="relative">
                        <label class="text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest">Search Item</label>
                        <div class="relative group">
                            <input v-model="search" type="text" placeholder="Find items..." 
                                :class="['w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all',
                                isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white']" />
                            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <label class="text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest">Category</label>
                        <div class="relative group">
                            <select v-model="selectedKelas"
                                :class="['w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer',
                                isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white']">
                                <option>All Class</option>
                                <option>Mob</option>
                                <option>Miniboss</option>
                                <option>Boss</option>
                                <option>Spina</option>
                            </select>
                            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
                            </div>
                            <div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <label class="text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest">Jump to Slot</label>
                        <div class="relative group">
                            <select v-model="selectedSlot"
                                :class="['w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer',
                                isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white']">
                                <option>All Slot</option>
                                <option v-for="s in uniqueSlots" :key="s" :value="s">Slot {{ s }}</option>
                            </select>
                            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                                <svg xmlns="dist\images\plus.png" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.886L4 9l4.912 1.114L11 16l1.912-5.886L18 9l-4.912-1.114z"/><path d="M5 21l14 0"/></svg>
                            </div>
                            <div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="['border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl',
                isDark ? 'border-lime-400 bg-black/60' : 'border-lime-500 bg-white/80 shadow-lime-100']">
                
                <div class="hidden lg:block overflow-x-auto no-scrollbar">
                    <table class="w-full min-w-[1100px] border-collapse">
                        <thead>
                            <tr :class="['uppercase text-[10px] font-black tracking-widest border-b-[3px]', 
                                isDark ? 'bg-white/5 text-lime-400 border-lime-500/30' : 'bg-slate-50 text-lime-700 border-lime-200']">
                                <th class="p-8 w-[10%] text-center border-r-[2px] border-lime-500/20">Slot</th>
                                <th class="p-8 w-[20%] text-left border-r-[2px] border-lime-500/20">Item Name</th>
                                <th class="p-8 w-[10%] text-center border-r-[2px] border-lime-500/20">Total Need</th>
                                <th class="p-8 w-[15%] text-center border-r-[2px] border-lime-500/20">Spina Cost</th>
                                <th class="p-8 w-[15%] text-left border-r-[2px] border-lime-500/20">Source</th>
                                <th class="p-8 w-[10%] text-center border-r-[2px] border-lime-500/20">Type</th>
                                <th class="p-8 w-[20%] text-left">Location</th>
                            </tr>
                        </thead>
                        <tbody :class="['divide-y-[2px]', isDark ? 'divide-white/10 text-white/80' : 'divide-slate-200 text-slate-700']">
                            <tr v-for="item in paginatedItems" :key="item.id" class="hover:bg-indigo-500/5 transition-all group">
                                <td :class="['p-8 text-center border-r-[2px]', isDark ? 'border-white/10' : 'border-slate-200']">
                                    <span class="font-black text-blue-500 italic text-3xl group-hover:scale-110 block transition-transform">{{ item.slot }}</span>
                                </td>
                                <td :class="['p-8 font-black uppercase text-base border-r-[2px]', 
                                    isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200']">
                                    {{ item.nama_item }}
                                </td>
                                <td :class="['p-8 text-center bg-black/5 border-r-[2px]', isDark ? 'border-white/10' : 'border-slate-200']">
                                    <span class="font-black italic text-lime-600 text-5xl">{{ formatQty(item.jumlah) }}</span>
                                </td>
                                <td :class="['p-8 text-center font-black text-xl text-amber-600 border-r-[2px]', isDark ? 'border-white/10' : 'border-slate-200']">
                                    {{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}
                                </td>
                                <td :class="['p-8 text-[11px] font-bold uppercase opacity-60 border-r-[2px]', isDark ? 'border-white/10' : 'border-slate-200']">
                                    {{ item.monster || '-' }}
                                </td>
                                <td :class="['p-8 text-center border-r-[2px]', isDark ? 'border-white/10' : 'border-slate-200']">
                                    <span :class="getBadgeClass(item.kelas_mob)">{{ item.kelas_mob }}</span>
                                </td>
                                <td class="p-8 font-black text-xl italic text-blue-600 uppercase tracking-tighter">
                                    {{ item.lokasi }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div :class="['lg:hidden divide-y-[3px]', isDark ? 'divide-white/10' : 'divide-slate-200']">
                    <div v-for="item in paginatedItems" :key="item.id" class="p-6 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 :class="['font-black uppercase text-lg leading-tight', isDark ? 'text-white' : 'text-slate-900']">{{ item.nama_item }}</h3>
                                <div :class="getBadgeClass(item.kelas_mob)" class="mt-2 !min-w-fit !px-2">{{ item.kelas_mob }}</div>
                            </div>
                            <div class="text-2xl font-black italic text-blue-600 leading-none">#{{ item.slot }}</div>
                        </div>
                        <div :class="['grid grid-cols-2 gap-4 border-[3px] p-4 rounded-2xl', 
                            isDark ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-slate-50 shadow-inner']">
                            <div>
                                <span class="text-[9px] font-black text-lime-600 uppercase block">Need</span>
                                <span :class="['text-3xl font-black italic', isDark ? 'text-white' : 'text-slate-900']">{{ formatQty(item.jumlah) }}</span>
                            </div>
                            <div>
                                <span class="text-[9px] font-black text-amber-600 uppercase block">Cost</span>
                                <span :class="['text-xl font-black', isDark ? 'text-white' : 'text-slate-900']">{{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-8 justify-center items-center pb-20">
                <div v-if="totalPages > 1" class="flex flex-wrap justify-center items-center gap-2">
                    <button @click="currentPage--" :disabled="currentPage === 1" 
                        class="h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"> « </button>
                    <template v-for="(page, index) in displayedPages" :key="index">
                        <span v-if="page === '...'" class="text-blue-600 font-black px-2">...</span>
                        <button v-else @click="currentPage = page"
                            :class="['h-12 w-12 rounded-xl border-[3px] font-black transition-all active:scale-90',
                                currentPage === page 
                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                                : (isDark ? 'bg-black/40 border-blue-800 text-blue-400' : 'bg-white border-blue-200 text-blue-600')]">
                            {{ page }}
                        </button>
                    </template>
                    <button @click="currentPage++" :disabled="currentPage === totalPages" 
                        class="h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"> » </button>
                </div>

                <button @click="toggleShowAll" 
                    class="w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-xl">
                    {{ itemsPerPage === 10 ? 'Explore All Database' : 'Collapse to 10 Rows' }}
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Custom Styling for Select Option in Dark Mode */
select option {
    background-color: #1a1a1a;
    color: white;
}
</style>