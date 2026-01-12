<script setup>
import { ref, computed, watch } from 'vue';
import { bags } from '@/data/bags'; 
import idFlag from '@/assets/id.png';
import enFlag from '@/assets/en.png';

const props = defineProps(['isDark']);

// --- LOGIKA ICON DINAMIS (FOKUS JENIS BAHAN) ---
const getMaterialIcon = (bahan) => {
    // Sesuaikan mapping ini dengan nama file asli di folder assets kamu
    const map = {
        'Wood': 'kayu.png',
        'Cloth': 'kain.png',
        'Metal': 'logam.png',
        'Mana': 'mana.png',
        'Beast': 'fauna.png',
        'Medic': 'obat.png',
        'Stone': 'logam.png', // Fallback jika tidak ada icon batu khusus
        'Spina': 'spina.png',
        'S': 'spina.png'
    };

    const fileName = map[bahan] || 'fauna.png'; // Default ke fauna jika tidak cocok
    // Menggunakan path relatif sesuai struktur folder asset kamu
    return new URL(`/src/assets/jenis-bahan-toram/${fileName}`, import.meta.url).href;
};

// --- LANGUAGE LOGIC ---
const lang = ref('en'); 

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
        exploreBtn: "Lihat Semua",
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
        exploreBtn: "Explore All",
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
    { label: t.value.stats.all, val: bags.length, grad: 'from-blue-700 to-blue-500', icon: '📦' },
    { label: t.value.stats.res, val: filteredItems.value.length, grad: 'from-fuchsia-600 to-purple-600', icon: '🔍' },
    { label: t.value.stats.boss, val: bags.filter(i => i.kelas_mob === 'Boss').length, grad: 'from-orange-600 to-red-600', icon: '💀' },
    { label: t.value.stats.slot, val: uniqueSlots.value.length, grad: 'from-lime-500 to-emerald-600', icon: '🎒' }
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
  <div :class="['bg-transparent py-0 px-2 md:px-4 font-sans relative z-10 transition-all duration-500', isDark ? 'text-white' : 'text-slate-900']">
    
    <div class="max-w-9xl mx-auto flex justify-center md:justify-end mb-2 sticky top-0 z-50">
      <div class="flex flex-col items-center gap-1 pt-2">
        <span class="text-[10px] font-[1000] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 uppercase text-center w-full opacity-90">
          SELECT LANGUAGE
        </span>
        <div class="inline-flex p-1 rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl">
          <button v-for="l in ['id', 'en']" :key="l" @click="lang = l"
            :class="['px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all duration-300 flex items-center gap-2 group/btn',
            lang === l ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'text-slate-400 hover:text-blue-500 hover:bg-white/5']">
            <img :src="l === 'id' ? idFlag : enFlag" class="w-4 h-3 object-cover rounded-sm shadow-sm" alt="flag" />
            <span>{{ l === 'id' ? 'INDO' : 'ENG' }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto space-y-3 md:space-y-6">
      <div :class="['relative p-5 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border-[3px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-xl',
          isDark ? 'border-blue-500 bg-black/40' : 'border-blue-600 bg-white/60 shadow-blue-200']">
        <div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none">
          <img src="https://toram-online.com/information/images/item/bag_expansion_en.png" class="w-full h-full object-contain object-right scale-125 translate-x-10" />
        </div>
        <div class="relative z-10 text-center md:text-left">
          <h2 :class="['text-2xl md:text-6xl font-black italic uppercase leading-none tracking-tighter', isDark ? 'text-white' : 'text-slate-900']">
            {{ t.title }}<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">{{ t.subtitle }}</span>
          </h2>
          <div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none">
                    <img src="/images/Bag-Toram.png" class="w-full h-full object-contain object-right opacity-30 scale-110" />
                </div>
          <div class="flex items-center justify-center md:justify-start gap-2 mt-2">
              <div class="h-1 w-10 bg-blue-600 rounded-full"></div>
              <img src="/images/logo.png" class="h-5 md:h-10 w-auto object-contain" />
              <span class="font-[1000] italic uppercase text-lg md:text-3xl">TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span></span>
          </div> 
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          <div v-for="(s, i) in stats" :key="i" 
              :class="['relative p-3 md:p-5 rounded-[1.2rem] border-[2px] shadow-lg transition-all bg-gradient-to-br text-white overflow-hidden', s.grad]">
              <div class="absolute -right-2 -bottom-2 text-4xl opacity-20 transform -rotate-12">{{ s.icon }}</div>
              <div class="text-[7px] md:text-[9px] font-black opacity-80 uppercase tracking-tighter">{{ s.label }}</div>
              <div class="text-lg md:text-4xl font-black italic">{{ s.val }}</div>
          </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div v-for="(f, idx) in [ {l: t.searchLabel, v: 'search'}, {l: t.catLabel, v: 'kelas'}, {l: t.slotLabel, v: 'slot'} ]" :key="idx" class="relative">
    <label class="text-[8px] font-black uppercase ml-3 mb-0.5 block text-indigo-500 tracking-widest">{{ f.l }}</label>
    <div class="relative group">
      <template v-if="f.v === 'search'">
        <input v-model="search" type="text" :placeholder="t.searchPlaceholder" 
          :class="['w-full h-10 pl-10 pr-4 rounded-xl border-[2px] font-bold text-xs outline-none transition-all',
          isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600']" />
      </template>
      <template v-else-if="f.v === 'kelas'">
        <select v-model="selectedKelas" :class="['w-full h-10 pl-10 pr-10 rounded-xl border-[2px] font-bold text-xs outline-none appearance-none cursor-pointer transition-all', isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-600']">
          <option value="All Class">{{ t.allClass }}</option>
          <option v-for="opt in ['Mob', 'Miniboss', 'Boss', 'Spina']" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </template>
      <template v-else>
        <select v-model="selectedSlot" :class="['w-full h-10 pl-10 pr-10 rounded-xl border-[2px] font-bold text-xs outline-none appearance-none cursor-pointer transition-all', isDark ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-600']">
          <option value="All Slot">{{ t.allSlot }}</option>
          <option v-for="s in uniqueSlots" :key="s" :value="s">Slot {{ s }}</option>
        </select>
      </template>

      <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none scale-75">
        <svg v-if="f.v === 'search'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <svg v-if="f.v === 'kelas'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
        <svg v-if="f.v === 'slot'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>

      <div v-if="f.v !== 'search'" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </div>
  </div>
</div>

      <div :class="['border-[2px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl transition-all', isDark ? 'border-lime-400 bg-black/60' : 'border-lime-500 bg-white/80']">
          
          <div class="hidden lg:block overflow-x-auto no-scrollbar">
              <table class="w-full border-collapse">
                  <thead>
  <tr :class="['uppercase text-[9px] font-[1000] tracking-wider border-b-[2px]', isDark ? 'bg-white/5 text-lime-400 border-lime-500/30' : 'bg-slate-50 text-lime-700 border-lime-200']">
    <th :class="['p-4 w-[5%] text-center border-r', isDark ? 'border-white/10' : 'border-slate-200']">
      {{ t.table.slot }}
    </th>
    <th :class="['p-4 w-[20%] text-left border-r', isDark ? 'border-white/10' : 'border-slate-200']">
      {{ t.table.name }}
    </th>
    <th :class="['p-4 w-[10%] text-center border-r', isDark ? 'border-white/10' : 'border-slate-200']">
      {{ t.table.need }}
    </th>
    <th :class="['p-4 w-[15%] text-center border-r', isDark ? 'border-white/10' : 'border-slate-200']">
      {{ t.table.cost }}
    </th>
    <th :class="['p-4 w-[15%] text-left border-r', isDark ? 'border-white/10' : 'border-slate-200']">
      {{ t.table.src }}
    </th>
    <th :class="['p-4 w-[10%] text-center border-r', isDark ? 'border-white/10' : 'border-slate-200']">
      {{ t.table.type }}
    </th>
    <th class="p-4 w-[25%] text-left">
      {{ t.table.loc }}
    </th>
  </tr>
</thead>
          
                  <tbody :class="['divide-y-[1px]', isDark ? 'divide-white/10' : 'divide-slate-200']">
                      <tr v-for="item in paginatedItems" :key="item.id" class="hover:bg-indigo-500/5 transition-all group">
                          <td :class="['p-4 text-center font-black text-blue-500 italic text-2xl border-r', isDark ? 'border-white/10' : 'border-slate-200']">{{ item.slot }}</td>
                          <td :class="['p-4 border-r', isDark ? 'border-white/10' : 'border-slate-200']">
                            <div class="flex items-center gap-3">
                              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                                <img :src="getMaterialIcon(item.kelas_bahan)" 
                                     class="w-7 h-7 object-contain transform group-hover:scale-110 transition-transform" 
                                     :alt="item.kelas_bahan" />
                              </div>
                              <span class="font-black uppercase text-sm">{{ lang === 'id' ? (item.nama_item_id || item.nama_item_en) : (item.nama_item_en || item.nama_item_id) }}</span>
                            </div>
                          </td>
                          <td :class="['p-4 text-center bg-black/5 border-r font-black italic text-lime-600 text-3xl', isDark ? 'border-white/10' : 'border-slate-200']">{{ formatQty(item.jumlah) }}</td>
                          <td :class="['p-4 text-center font-black text-lg text-amber-600 border-r', isDark ? 'border-white/10' : 'border-slate-200']">
                            {{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}
                          </td>
                          <td :class="['p-4 border-r', isDark ? 'border-white/10' : 'border-slate-200']">
                            <div class="flex items-center gap-2">
                              <span class="text-[10px] font-bold uppercase opacity-80">{{ lang === 'id' ? (item.monster_id || item.monster_en || '-') : (item.monster_en || item.monster_id || '-') }}</span>
                            </div>
                          </td>
                          <td :class="['p-4 text-center border-r', isDark ? 'border-white/10' : 'border-slate-200']"><span :class="getBadgeClass(item.kelas_mob)">{{ item.kelas_mob }}</span></td>
                          <td class="p-4">
                            <div class="flex flex-col">
                              <span class="font-black text-xs italic text-blue-600 uppercase tracking-tight">{{ lang === 'id' ? (item.lokasi_id || item.lokasi_en) : (item.lokasi_en || item.lokasi_id) }}</span>
                            </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div class="lg:hidden divide-y-[2px] divide-slate-200/10">
    <div v-for="item in paginatedItems" :key="item.id" class="p-4 space-y-3">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <span class="text-[10px] font-black px-2 py-0.5 bg-blue-500 text-white rounded-md">
                    {{ t.table.slot.toUpperCase() }} {{ item.slot }}
                </span>
                <span :class="getBadgeClass(item.kelas_mob)" class="!min-w-fit !px-2 !py-0.5 !text-[8px]">
                    {{ item.kelas_mob }}
                </span>
            </div>
            <div class="text-amber-600 font-black text-[10px] uppercase">
                {{ t.mobile.cost }}: {{ item.spina > 0 ? Number(item.spina).toLocaleString() : '-' }}
            </div>
        </div>

        <div class="flex items-start gap-3">
            <div class="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <img :src="getMaterialIcon(item.kelas_bahan)" class="w-8 h-8 object-contain" :alt="item.kelas_bahan" />
            </div>
            <div>
                <h3 class="font-black uppercase text-base leading-tight tracking-tight">
                    {{ lang === 'id' ? (item.nama_item_id || item.nama_item_en) : (item.nama_item_en || item.nama_item_id) }}
                </h3>
                <p class="text-[10px] font-bold text-blue-500 mt-1 uppercase">
                    {{ lang === 'id' ? (item.lokasi_id || item.lokasi_en) : (item.lokasi_en || item.lokasi_id) }}
                </p>
            </div>
        </div>

        <div :class="['grid grid-cols-2 gap-2 border-[2px] p-3 rounded-2xl', isDark ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-slate-50']">
            <div class="flex flex-col justify-center border-r border-dashed border-slate-400/20 pr-2">
                <span class="text-[9px] font-black text-lime-600 uppercase">{{ t.mobile.need }}</span>
                <span class="text-3xl font-black italic text-lime-600">{{ formatQty(item.jumlah) }}</span>
            </div>
            <div class="pl-2 flex flex-col justify-center">
                <span class="text-[8px] font-black opacity-50 uppercase block mb-0.5">{{ t.mobile.drop }}</span>
                <span class="text-[10px] font-bold uppercase leading-tight line-clamp-2">
                    {{ lang === 'id' ? (item.monster_id || item.monster_en || '-') : (item.monster_en || item.monster_id || '-') }}
                </span>
            </div>
        </div>
    </div>
</div>
</div>
    

      <div class="flex flex-col gap-4 justify-center items-center pb-10">
          <div v-if="totalPages > 1" class="flex flex-wrap justify-center items-center gap-1">
              <button @click="currentPage--" :disabled="currentPage === 1" class="h-9 w-9 rounded-lg border-2 font-black border-blue-600 text-xs disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all">«</button>
              <button v-for="p in displayedPages" :key="p" @click="typeof p === 'number' ? currentPage = p : null" 
                :class="['h-9 w-9 rounded-lg border-2 font-black transition-all text-xs', p === currentPage ? 'bg-blue-600 text-white shadow-md' : 'text-blue-600 border-blue-100 hover:border-blue-600']">
                  {{ p }}
              </button>
              <button @click="currentPage++" :disabled="currentPage === totalPages" class="h-9 w-9 rounded-lg border-2 font-black border-blue-600 text-xs disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all">»</button>
          </div>
          <button @click="toggleShowAll" class="group relative h-12 px-12 rounded-2xl border-b-4 border-indigo-800 bg-indigo-600 text-white font-black uppercase italic text-[11px] tracking-widest hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all shadow-xl">
              <span class="relative z-10">{{ itemsPerPage === 10 ? t.exploreBtn : t.collapseBtn }}</span>
              <div class="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl"></div>
          </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
select option { background-color: #1a1a1a; color: white; }

/* Custom Glow Effect for Cards */
.group:hover .w-10 {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}
</style>