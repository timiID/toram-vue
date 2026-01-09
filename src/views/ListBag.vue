<script setup>
import { ref, computed, watch } from 'vue';
import { bags } from '@/data/bags'; 
import idFlag from '@/assets/id.png';
import enFlag from '@/assets/en.png';

const props = defineProps(['isDark']);

// --- LANGUAGE LOGIC ---
const lang = ref('id'); 

const translations = {
    id: {
        title: "DAFTAR TAS",
        subtitle: "EKSPANSI",
        searchLabel: "Cari Item",
        searchPlaceholder: "Cari nama, monster, atau lokasi...",
        catLabel: "Kategori",
        slotLabel: "Lompat ke Slot",
        allClass: "Semua Kelas",
        allSlot: "Semua Slot",
        exploreBtn: "Lihat Semua Database",
        collapseBtn: "Sembunyikan Data",
        stats: { all: 'SEMUA ITEM', res: 'HASIL', boss: 'BOSS', slot: 'SLOTS' },
        table: { slot: 'Slot', name: 'Nama Item', need: 'Total Butuh', cost: 'Biaya Spina', src: 'Sumber', type: 'Tipe', loc: 'Lokasi' },
        mobile: { need: 'Butuh', cost: 'Biaya', drop: 'Drop Dari:', map: 'Peta:' }
    },
    en: {
        title: "BAG LIST",
        subtitle: "EXPANSION",
        searchLabel: "Search Item",
        searchPlaceholder: "Find items, monsters, or maps...",
        catLabel: "Category",
        slotLabel: "Jump to Slot",
        allClass: "All Class",
        allSlot: "All Slot",
        exploreBtn: "Explore All Database",
        collapseBtn: "Collapse to 10 Rows",
        stats: { all: 'ALL ITEM', res: 'RESULTS', boss: 'BOSS', slot: 'SLOTS' },
        table: { slot: 'Slot', name: 'Item Name', need: 'Total Need', cost: 'Spina Cost', src: 'Source', type: 'Type', loc: 'Location' },
        mobile: { need: 'Need', cost: 'Cost', drop: 'Drop From:', map: 'Map:' }
    }
};

const t = computed(() => translations[lang.value]);

// --- SEARCH & FILTER LOGIC ---
const search = ref('');
const selectedKelas = ref('All Class');
const selectedSlot = ref('All Slot');
const currentPage = ref(1);
const itemsPerPage = ref(10); 

const toggleShowAll = () => {
    if (itemsPerPage.value === 10) {
        itemsPerPage.value = filteredItems.value.length || 10;
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
        
        // Map data berdasarkan bahasa aktif
        const nameInLang = lang.value === 'id' ? (item.nama_item_id || item.nama_item_en) : (item.nama_item_en || item.nama_item_id);
        const locInLang = lang.value === 'id' ? (item.lokasi_id || item.lokasi_en) : (item.lokasi_en || item.lokasi_id);
        const monsterInLang = lang.value === 'id' ? (item.monster_id || item.monster_en) : (item.monster_en || item.monster_id);

        const matchesSearch = !search.value || (
            nameInLang?.toLowerCase().includes(s) ||
            monsterInLang?.toLowerCase().includes(s) ||
            locInLang?.toLowerCase().includes(s)
        );

        let matchesKelas = true;
        if (selectedKelas.value !== 'All Class') {
            if (selectedKelas.value === 'Mob') matchesKelas = (itemKelas === 'Mob' || itemKelas === 'Miniboss/Mob');
            else if (selectedKelas.value === 'Miniboss') matchesKelas = (itemKelas === 'Miniboss' || itemKelas === 'Miniboss/Mob');
            else matchesKelas = itemKelas === selectedKelas.value;
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

watch([search, selectedKelas, selectedSlot, lang], () => { currentPage.value = 1; });

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value) || 1);
const displayedPages = computed(() => {
    const total = totalPages.value; const current = currentPage.value;
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, '...', total];
    if (current >= total - 2) return [1, '...', total - 2, total - 1, total];
    return [1, '...', current, '...', total];
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
    { label: t.value.stats.all, val: bags.length, grad: 'from-blue-700 to-blue-500' },
    { label: t.value.stats.res, val: filteredItems.value.length, grad: 'from-fuchsia-600 to-purple-600' },
    { label: t.value.stats.boss, val: bags.filter(i => i.kelas_mob === 'Boss').length, grad: 'from-orange-600 to-red-600' },
    { label: t.value.stats.slot, val: uniqueSlots.value.length, grad: 'from-lime-500 to-emerald-600' }
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

  <div :class="['bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10 transition-all duration-500', isDark ? 'text-white' : 'text-slate-900']">
    
   <div class="max-w-7xl mx-auto flex justify-center md:justify-end mb-8 sticky top-4 z-50">
  <div class="flex flex-col items-center gap-2">
    
    <span class="text-[14px] font-[1000] tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 uppercase text-center w-full opacity-90">
      LANGUAGE THIS PAGE
    </span>

    <div class="inline-flex p-1.5 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl">
      <button v-for="l in ['id', 'en']" :key="l" @click="lang = l"
        :class="['px-5 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all duration-300 flex items-center gap-3 group/btn',
        lang === l 
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' 
        : 'text-slate-400 hover:text-blue-500 hover:bg-white/5']">
        
        <img 
          :src="l === 'id' ? idFlag : enFlag" 
          class="w-6 h-4 object-cover rounded-sm shadow-sm group-hover/btn:scale-110 transition-transform"
          alt="flag"
        />
        
        <span>{{ l === 'id' ? 'INDO' : 'ENG' }}</span>
      </button>
    </div>

  </div>
</div>
    <div class="max-w-7xl mx-auto space-y-6 md:space-y-10">
      
      <div :class="['relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl',
          isDark ? 'border-blue-500 bg-black/40' : 'border-blue-600 bg-white/60 shadow-blue-200']">
        <div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none opacity-30">
          <img src="/images/Bag-Toram.png" class="w-full h-full object-contain object-right scale-110" />
        </div>
        <div class="relative z-10 text-center md:text-left animate-in slide-in-from-left duration-700">
          <h2 :class="['text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter', isDark ? 'text-white' : 'text-slate-900']">
            {{ t.title }}<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">{{ t.subtitle }}</span>
          </h2>
          <div class="flex items-center gap-3">
              <div class="h-1.5 w-16 bg-blue-600 rounded-full"></div>
              <img src="/images/logo.png" class="h-8 md:h-12 w-auto object-contain" />
              <span class="font-[1000] italic uppercase text-4xl">TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span></span>
          </div> 
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div v-for="(s, i) in stats" :key="i" 
              :class="['p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white animate-in zoom-in', s.grad]"
              :style="{ transitionDelay: i * 100 + 'ms' }">
              <div class="text-[10px] font-black opacity-80 uppercase">{{ s.label }}</div>
              <div class="text-3xl md:text-5xl font-black italic mt-1">{{ s.val }}</div>
          </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="relative">
        <label class="text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest">{{ t.searchLabel }}</label>
        <div class="relative group">
            <input v-model="search" type="text" :placeholder="t.searchPlaceholder" 
                :class="['w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all',
                isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white']" />
            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
        </div>
    </div>

    <div class="relative">
        <label class="text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest">{{ t.catLabel }}</label>
        <div class="relative group">
            <select v-model="selectedKelas"
                :class="['w-full h-14 pl-14 pr-12 rounded-2xl border-[3px] font-bold outline-none appearance-none cursor-pointer transition-all',
                isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white']">
                <option value="All Class">{{ t.allClass }}</option>
                <option v-for="opt in ['Mob', 'Miniboss', 'Boss', 'Spina']" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            </div>
            <div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-hover:translate-y-[-40%] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
        </div>
    </div>

    <div class="relative">
        <label class="text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest">{{ t.slotLabel }}</label>
        <div class="relative group">
            <select v-model="selectedSlot"
                :class="['w-full h-14 pl-14 pr-12 rounded-2xl border-[3px] font-bold outline-none appearance-none cursor-pointer transition-all',
                isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white']">
                <option value="All Slot">{{ t.allSlot }}</option>
                <option v-for="s in uniqueSlots" :key="s" :value="s">Slot {{ s }}</option>
            </select>
            <div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
            <div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-hover:translate-y-[-40%] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
        </div>
    </div>

      </div>

      <div :class="['border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all', isDark ? 'border-lime-400 bg-black/60' : 'border-lime-500 bg-white/80 shadow-lime-100']">
          <div class="hidden lg:block overflow-x-auto no-scrollbar">
              <table class="w-full min-w-[1100px] border-collapse">
                  <thead>
                      <tr :class="['uppercase text-[10px] font-black tracking-widest border-b-[3px]', isDark ? 'bg-white/5 text-lime-400 border-lime-500/30' : 'bg-slate-50 text-lime-700 border-lime-200']">
                          <th class="p-8 w-[10%] text-center">{{ t.table.slot }}</th>
                          <th class="p-8 w-[20%] text-left">{{ t.table.name }}</th>
                          <th class="p-8 w-[10%] text-center">{{ t.table.need }}</th>
                          <th class="p-8 w-[15%] text-center">{{ t.table.cost }}</th>
                          <th class="p-8 w-[15%] text-left">{{ t.table.src }}</th>
                          <th class="p-8 w-[10%] text-center">{{ t.table.type }}</th>
                          <th class="p-8 w-[20%] text-left">{{ t.table.loc }}</th>
                      </tr>
                  </thead>
                  <tbody :class="['divide-y-[2px]', isDark ? 'divide-white/10' : 'divide-slate-200']">
                      <tr v-for="item in paginatedItems" :key="item.id" class="hover:bg-indigo-500/5 transition-all group">
                          <td class="p-8 text-center font-black text-blue-500 italic text-3xl">{{ item.slot }}</td>
                          <td class="p-8 font-black uppercase text-base">{{ lang === 'id' ? (item.nama_item_id || item.nama_item_en) : (item.nama_item_en || item.nama_item_id) }}</td>
                          <td class="p-8 text-center bg-black/5"><span class="font-black italic text-lime-600 text-5xl">{{ formatQty(item.jumlah) }}</span></td>
                          <td class="p-8 text-center font-black text-xl text-amber-600">{{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}</td>
                          <td class="p-8 text-[11px] font-bold uppercase opacity-60">
                              {{ lang === 'id' ? (item.monster_id || item.monster_en || '-') : (item.monster_en || item.monster_id || '-') }}
                          </td>
                          <td class="p-8 text-center"><span :class="getBadgeClass(item.kelas_mob)">{{ item.kelas_mob }}</span></td>
                          <td class="p-8 font-black text-xl italic text-blue-600 uppercase">{{ lang === 'id' ? (item.lokasi_id || item.lokasi_en) : (item.lokasi_en || item.lokasi_id) }}</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div class="lg:hidden divide-y-[3px] divide-slate-200/20">
              <div v-for="item in paginatedItems" :key="item.id" class="p-6 space-y-4 animate-in slide-in-from-bottom-4">
                  <div class="flex justify-between items-start">
                      <div>
                          <div class="text-[10px] font-black text-blue-500 mb-1 uppercase">SLOT {{ item.slot }}</div>
                          <h3 class="font-black uppercase text-xl leading-tight">{{ lang === 'id' ? (item.nama_item_id || item.nama_item_en) : (item.nama_item_en || item.nama_item_id) }}</h3>
                      </div>
                      <div :class="getBadgeClass(item.kelas_mob)" class="!min-w-fit px-3">{{ item.kelas_mob }}</div>
                  </div>
                  <div :class="['grid grid-cols-2 gap-3 border-[3px] p-4 rounded-2xl', isDark ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-slate-50']">
                      <div><span class="text-[9px] font-black text-lime-600 block">NEED</span><span class="text-4xl font-black italic text-lime-600">{{ formatQty(item.jumlah) }}</span></div>
                      <div class="border-l-[2px] pl-3 border-slate-300/30"><span class="text-[9px] font-black text-amber-600 block">COST</span><span class="text-xl font-black block mt-1">{{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}</span></div>
                  </div>
                  <div class="space-y-2 text-xs font-bold uppercase opacity-70">
                      <div><span class="text-indigo-500 mr-2">●</span> {{ t.mobile.drop }} {{ lang === 'id' ? (item.monster_id || item.monster_en || '-') : (item.monster_en || item.monster_id || '-') }}</div>
                      <div><span class="text-blue-500 mr-2">●</span> {{ t.mobile.map }} {{ lang === 'id' ? (item.lokasi_id || item.lokasi_en) : (item.lokasi_en || item.lokasi_id) }}</div>
                  </div>
              </div>
          </div>
      </div>

      <div class="flex flex-col gap-8 justify-center items-center pb-20">
          <div v-if="totalPages > 1" class="flex flex-wrap justify-center items-center gap-2">
              <button @click="currentPage--" :disabled="currentPage === 1" class="h-12 w-12 rounded-xl border-[3px] font-black border-blue-600 disabled:opacity-20">«</button>
              <button v-for="p in displayedPages" :key="p" @click="typeof p === 'number' ? currentPage = p : null" 
                :class="['h-12 w-12 rounded-xl border-[3px] font-black transition-all', p === currentPage ? 'bg-blue-600 text-white shadow-lg scale-110' : 'text-blue-600 border-blue-200 hover:border-blue-500']">
                  {{ p }}
              </button>
              <button @click="currentPage++" :disabled="currentPage === totalPages" class="h-12 w-12 rounded-xl border-[3px] font-black border-blue-600 disabled:opacity-20">»</button>
          </div>
          <button @click="toggleShowAll" class="w-full md:w-auto h-16 px-12 rounded-2xl border-[4px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl">
              {{ itemsPerPage === 10 ? t.exploreBtn : t.collapseBtn }}
          </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
select option { background-color: #1a1a1a; color: white; }
</style>