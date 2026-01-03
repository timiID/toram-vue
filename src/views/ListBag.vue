<script setup>
import { ref, computed, watch } from 'vue';
import { bags } from '@/data/bags'; 

// --- SEARCH & FILTER LOGIC ---
const search = ref('');
const selectedKelas = ref('All Class');
const selectedSlot = ref('All Slot');
const currentPage = ref(1);
const itemsPerPage = ref(10); 

const toggleShowAll = () => {
    if (itemsPerPage.value === 10) {
        itemsPerPage.value = filteredItems.value.length > 0 ? filteredItems.value.length : 10;
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

// --- PAGINATION ---
const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value) || 1);

const displayedPages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    if (total <= 3) return Array.from({ length: total }, (_, i) => i + 1);
    if (current < total - 1) return [current, current + 1, '...', total];
    return [1, '...', total - 1, total];
});

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredItems.value.slice(start, start + itemsPerPage.value);
});

// --- STATS & UTILS ---
const uniqueSlots = computed(() => {
    const slots = [...new Set(bags.map(i => i.slot))];
    return slots.sort((a, b) => (parseInt(a) || 0) - (parseInt(b) || 0));
});

const stats = computed(() => [
    { label: 'DATABASE', val: bags.length, grad: 'from-purple-900 to-blue-800' },
    { label: 'RESULTS', val: filteredItems.value.length, grad: 'from-indigo-600 to-purple-800' },
    { label: 'BOSS', val: bags.filter(i => i.kelas_mob === 'Boss').length, grad: 'from-rose-600 to-orange-600' },
    { label: 'SLOTS', val: uniqueSlots.value.length, grad: 'from-amber-600 to-orange-500' }
]);

const getBadgeClass = (kelas) => {
    const base = "px-3 py-1 rounded-lg text-[10px] font-black uppercase border inline-flex items-center justify-center min-w-[85px] ";
    if (kelas === 'Mob') return base + "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-500/30";
    if (kelas === 'Miniboss/Mob') return base + "bg-indigo-100 text-indigo-600 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-purple-500/30";
    if (kelas === 'Miniboss') return base + "bg-purple-100 text-purple-600 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/30";
    if (kelas === 'Boss') return base + "bg-red-100 text-red-600 border-red-200 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/30";
    if (kelas === 'Spina') return base + "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30";
    return base + "bg-emerald-100 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30";
};
</script>

<template>
    <div class="min-h-screen bg-transparent py-4 md:py-10 px-2 md:px-4">
        
        <div class="max-w-7xl mx-auto space-y-6 md:space-y-10">
            <div class="relative p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-2 border-white bg-white/20 shadow-2xl dark:border-white/5 dark:bg-slate-900/40 transition-all overflow-hidden backdrop-blur-md">
                <div class="absolute top-0 right-0 h-full w-1/2 hidden lg:block">
                    <img src="/images/Bag-Toram.png" class="w-full h-full object-contain object-right opacity-90 drop-shadow-2xl" />
                </div>
                <div class="relative z-10 text-center md:text-left">
                    <h2 class="text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter text-slate-900 dark:text-white ">List Bag<br>Expansion</h2>
                    <div class="mt-4 md:mt-6 flex items-center justify-center md:justify-start gap-4">
                        <img src="/images/logo.png" class="h-8 md:h-12 w-auto object-contain" />
                        <span class="text-xl md:text-4xl font-black italic text-indigo-600 uppercase tracking-tighter">TIMI DB</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <div v-for="stat in stats" :key="stat.label" 
                     class="aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95 cursor-default" 
                     :class="stat.grad">
                    <span class="text-[8px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] opacity-80 mb-1 md:mb-2">{{ stat.label }}</span>
                    <span class="text-3xl md:text-7xl font-black italic tracking-tighter leading-none">{{ stat.val }}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-10 border-2 border-white bg-white/20 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-md">
                <div class="flex flex-col gap-2 md:gap-3">
                    <label class="text-[10px] md:text-[11px] font-black uppercase tracking-widest ml-4 text-slate-500 dark:text-white/30">Search Item</label>
                    <input v-model="search" type="text" placeholder="Find item..." class="w-full border-2 border-slate-100 bg-white/80 rounded-xl md:rounded-2xl p-3 md:p-5 text-sm font-bold outline-none dark:bg-slate-800/50 dark:border-white/10 dark:text-white focus:border-indigo-500 transition-all" />
                </div> 
                <div class="flex flex-col gap-2 md:gap-3">
                    <label class="text-[10px] md:text-[11px] font-black uppercase tracking-widest ml-4 text-slate-500 dark:text-white/30">Category</label>
                    <select v-model="selectedKelas" class="w-full border-2 border-slate-100 bg-white/80 rounded-xl md:rounded-2xl p-3 md:p-5 text-sm font-black outline-none dark:bg-slate-800/50 dark:border-white/10 dark:text-white focus:border-indigo-500 transition-all">
                        <option value="All Class">All Class</option>
                        <option value="Mob">Mob</option>
                        <option value="Miniboss">Miniboss</option>
                        <option value="Boss">Boss</option>
                        <option value="Spina">Spina</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2 md:gap-3">
                    <label class="text-[10px] md:text-[11px] font-black uppercase tracking-widest ml-4 text-slate-500 dark:text-white/30">Slot Expansion</label>
                    <select v-model="selectedSlot" class="w-full border-2 border-slate-100 bg-white/80 rounded-xl md:rounded-2xl p-3 md:p-5 text-sm font-black outline-none dark:bg-slate-800/50 dark:border-white/10 dark:text-white focus:border-indigo-500 transition-all">
                        <option value="All Slot">All Slot</option>
                        <option v-for="slot in uniqueSlots" :key="slot" :value="slot">{{ slot }}</option>
                    </select>
                </div>
            </div>

            <div class="border-2 border-white bg-white/30 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden dark:border-white/5 dark:bg-slate-900/60 backdrop-blur-md">
                
                <div class="hidden lg:block overflow-x-auto">
                    <table class="w-full min-w-[1100px]">
                        <thead>
                            <tr class="uppercase text-[10px] font-black tracking-widest border-b-2 bg-slate-50/50 text-slate-400 border-slate-100 dark:bg-white/5 dark:text-slate-500 dark:border-white/10">
                                <th class="p-8 w-[10%] text-center border-r border-slate-100 dark:border-white/10">Slot</th>
                                <th class="p-8 w-[20%] text-left">Item Name</th>
                                <th class="p-8 w-[10%] text-center">Total Need</th>
                                <th class="p-8 w-[15%] text-center text-amber-500">Spina</th>
                                <th class="p-8 w-[15%] text-left">Source</th>
                                <th class="p-8 w-[10%] text-center">Type</th>
                                <th class="p-8 w-[20%] text-left">Location</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                            <tr v-for="item in paginatedItems" :key="item.id" class="hover:bg-indigo-500/5 transition-all">
                                <td class="p-8 text-center border-r border-slate-100 dark:border-white/10">
                                    <div class="flex flex-col items-center">
                                        <span class="text-[9px] font-black text-slate-400 uppercase mb-1">Slot</span>
                                        <span class="font-black text-indigo-500 italic text-3xl leading-none">{{ item.slot }}</span>
                                    </div>
                                </td>
                                <td class="p-8">
                                    <span class="text-[9px] font-black text-indigo-500 uppercase block mb-1">Item Name</span>
                                    <span class="font-black uppercase text-base tracking-tight text-slate-900 dark:text-white">{{ item.nama_item }}</span>
                                </td>
                                <td class="p-8 text-center bg-slate-50/30 dark:bg-white/5">
                                    <span class="text-[9px] font-black text-slate-400 uppercase block mb-1">Required</span>
                                    <span class="font-black italic text-blue-600 dark:text-blue-400 text-5xl leading-none">{{ formatQty(item.jumlah) }}</span>
                                </td>
                                <td class="p-8 text-center">
                                    <span class="text-[9px] font-black text-amber-500/50 uppercase block mb-1">Cost</span>
                                    <span class="text-amber-500 font-black text-xl">{{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}</span>
                                </td>
                                <td class="p-8 text-[11px] font-bold uppercase">{{ item.monster || '-' }}</td>
                                <td class="p-8 text-center"><span :class="getBadgeClass(item.kelas_mob)">{{ item.kelas_mob }}</span></td>
                                <td class="p-8 font-black text-xl italic text-slate-500 dark:text-white uppercase tracking-tighter">{{ item.lokasi }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="lg:hidden divide-y divide-slate-100 dark:divide-white/10">
                    <div v-for="item in paginatedItems" :key="item.id" class="p-6 space-y-4 bg-white/10">
                        <div class="flex justify-between items-start">
                            <div>
                                <span class="text-[9px] font-black text-indigo-500 uppercase">Item Name</span>
                                <h3 class="font-black uppercase text-lg text-slate-900 dark:text-white leading-none">{{ item.nama_item }}</h3>
                            </div>
                            <div class="text-right">
                                <span class="text-[9px] font-black text-slate-400 uppercase">Slot</span>
                                <div class="text-2xl font-black italic text-indigo-500 leading-none">{{ item.slot }}</div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 bg-slate-50/50 dark:bg-white/5 p-4 rounded-2xl">
                            <div>
                                <span class="text-[9px] font-black text-slate-400 uppercase block">Required</span>
                                <span class="text-3xl font-black italic text-blue-600 dark:text-blue-400">{{ formatQty(item.jumlah) }}</span>
                            </div>
                            <div>
                                <span class="text-[9px] font-black text-amber-500/50 uppercase block">Cost</span>
                                <span class="text-xl font-black text-amber-500">{{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}</span>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <div class="flex justify-between text-[10px]">
                                <span class="font-black text-slate-400 uppercase">Location:</span>
                                <span class="font-bold text-slate-900 dark:text-white uppercase">{{ item.lokasi }}</span>
                            </div>
                            <div class="flex justify-between text-[10px]">
                                <span class="font-black text-slate-400 uppercase">Source:</span>
                                <span class="font-bold text-slate-500 uppercase">{{ item.monster || '-' }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[10px] font-black text-slate-400 uppercase">Type:</span>
                                <span :class="getBadgeClass(item.kelas_mob)">{{ item.kelas_mob }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4 justify-center items-center pb-20">
                <div class="flex items-center gap-2">
                    <button @click="currentPage--" :disabled="currentPage === 1" class="h-12 md:h-14 px-4 md:px-6 rounded-xl md:rounded-2xl border-2 border-white bg-white/20 dark:bg-slate-800/40 dark:border-white/10 dark:text-white font-black text-[10px] uppercase transition-all shadow-xl disabled:opacity-20 hover:border-indigo-500">«</button>
                    
                    <div v-if="itemsPerPage === 10" class="flex items-center gap-1 md:gap-2">
                        <template v-for="(page, index) in displayedPages" :key="index">
                            <button v-if="page !== '...'" @click="currentPage = page" :class="['w-10 md:w-12 h-12 md:h-14 rounded-xl md:rounded-2xl border-2 font-black text-xs transition-all shadow-lg', currentPage === page ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white/20 dark:bg-slate-800/40 dark:border-white/10 dark:text-white border-white']">{{ page }}</button>
                            <span v-else class="px-1 font-black dark:text-white">..</span>
                        </template>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages" class="h-12 md:h-14 px-4 md:px-6 rounded-xl md:rounded-2xl border-2 border-white bg-white/20 dark:bg-slate-800/40 dark:border-white/10 dark:text-white font-black text-[10px] uppercase transition-all shadow-xl disabled:opacity-20 hover:border-indigo-500">»</button>
                </div>
                <button @click="toggleShowAll" class="w-full md:w-auto h-12 md:h-14 px-8 rounded-xl md:rounded-2xl border-2 font-black text-[10px] uppercase transition-all shadow-xl bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700">
                    {{ itemsPerPage === 10 ? 'Show All Results' : 'Show 10 Per Page' }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Transparansi background dan efek blur sudah menggunakan Tailwind class */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>