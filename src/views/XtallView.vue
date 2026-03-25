<template>
  <div :class="['relative font-sans transition-all duration-700 bg-transparent', isDark ? 'text-slate-200' : 'text-slate-900']">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div :class="['absolute inset-0 bg-[url(\'/images/logo.png\')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000', isDark ? 'brightness-200' : 'invert opacity-[0.02]']"></div>
      <div v-if="isDark" class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div v-if="isDark" class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <div class="relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-0 overflow-visible">
      
      <header :class="['relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500', isDark ? 'border-white/5' : 'border-black/5']">
        <div class="flex items-center gap-1">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img src="/images/logo.png" class="relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" alt="Logo" />
          </div>
          <div class="text-center md:text-left space-y-1">
            <div class="flex items-center gap-3">
              <h1 class="text-4xl md:text-6xl font-[800] italic uppercase tracking-tighter leading-none transition-all">
                <span :class="text-white">TIMI </span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span>
              </h1>
              <div class="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase">Bahasa Indonesia</div>
            </div>
            <p :class="['text-xs font-black uppercase tracking-[0.5em] opacity-60', isDark ? 'text-slate-400' : 'text-slate-500']">Toram Online Database</p>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-end gap-3">
          <div :class="['group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500', isDark ? 'bg-slate-900/40 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50']">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span :class="['relative text-xs font-black uppercase tracking-[0.2em]', isDark ? 'text-cyan-400' : 'text-blue-600']">Hasil : {{ filteredResults.length }} Xtall</span>
          </div>
        </div>
      </header>

      <section class="py-8">
        <div :class="['p-6 md:p-8 rounded-[2rem] border-2 backdrop-blur-xl transition-all duration-500', isDark ? 'bg-slate-900/40 border-white/5 shadow-2xl' : 'bg-white/60 border-slate-200 shadow-lg']">
          <h2 class="text-xl md:text-2xl font-black uppercase tracking-tight italic">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Crysta (Xtall) Bahasa Indonesia</span>
          </h2>
          <p :class="['mt-2 text-sm md:text-base leading-relaxed font-medium', isDark ? 'text-slate-400' : 'text-slate-600']">
            Selamat datang di database Xtall Timi DB. Gunakan fitur pencarian di bawah untuk menemukan xtall yang cocok.
          </p>
        </div>
      </section>

      <RouterLink to="/xtall/advanced" class="my-6 block w-full rounded-2xl border-2 border-indigo-500 bg-gradient-to-t from-indigo-400 to-purple-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition">
        🔎 Pencarian Xtall dengan Status
      </RouterLink>

      <section :class="['grid grid-cols-1 md:grid-cols-6 gap-6 p-6 md:p-10 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl mb-12', 
  isDark ? 'bg-slate-950/60 border-white/10 shadow-black/40' : 'bg-white/80 border-slate-200 shadow-slate-300/50']">
  
  <div class="space-y-3 col-span-1 md:col-span-2">
    <label class="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-cyan-500/40"></span> CARI NAMA
    </label>
    <div class="relative group">
      <span class="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500/50 group-focus-within:text-cyan-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input v-model="searchQuery" type="text" placeholder="Ketik nama xtall..." 
        :class="['w-full pl-14 pr-6 py-4 rounded-2xl border-2 outline-none font-bold text-sm transition-all', 
        isDark ? 'bg-[#0f172a] border-white/5 focus:border-cyan-500 text-white placeholder-slate-600' : 'bg-white border-slate-200 focus:border-cyan-500']">
    </div>
  </div>

  <div class="space-y-3 col-span-1">
    <label class="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4">SKALA</label>
    <div class="relative">
      <select v-model="itemsPerPage" :class="['w-full px-5 py-4 rounded-2xl border-2 outline-none font-bold text-sm cursor-pointer appearance-none transition-all',
        isDark ? 'bg-[#0f172a] border-white/5 focus:border-purple-500 text-slate-200' : 'bg-white border-slate-200 focus:border-purple-500']">
        <option :value="10">10 Unit</option>
        <option :value="25">25 Unit</option>
        <option :value="50">50 Unit</option>
      </select>
      <span class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" /></svg>
      </span>
    </div>
  </div>

  <div class="space-y-3 col-span-1 md:col-span-3">
    <label class="text-[10px] font-[1000] uppercase tracking-[0.2em] text-red-600 ml-4 flex items-center gap-2">
      <span class="w-1 h-3 bg-red-600 rounded-full"></span> URUTAN & RESET DATA
    </label>
    <div class="flex gap-4">
      <div class="relative flex-1">
        <select v-model="sortOrder" :class="['w-full h-[60px] px-6 rounded-2xl border-2 font-bold text-sm cursor-pointer appearance-none transition-all',
          isDark ? 'bg-[#0f172a] border-white/5 focus:border-red-500 text-slate-200' : 'bg-white border-slate-200 focus:border-red-500']">
          <option value="asc">Urut: A ke Z</option>
          <option value="desc">Urut: Z ke A</option>
        </select>
        <span class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </span>
      </div>
      
      <button @click="handleResetAll" 
        class="h-[60px] flex-1 px-8 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] active:scale-95 transition-all flex items-center justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        ATUR ULANG
      </button>
    </div>
  </div>
</section>

      <main class="space-y-6 relative z-10 pb-20 overflow-visible">
        <div v-for="(xtall, idx) in paginatedResults" :key="xtall.code" 
          class="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry"
          :style="{ animationDelay: (idx * 70) + 'ms' }">
          
          <div class="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"> 
            <div v-if="getBaseFor(xtall)" @click="setSearch(getBaseFor(xtall).name)"
              :class="['flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all shadow-xl relative overflow-hidden group',
              isDark ? 'bg-slate-900/30 border-white/10 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-400']">
              <div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to-blue-600 opacity-40"></div>
              <span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest">Previous</span>
              <p :class="['text-xs font-bold truncate', isDark ? 'text-slate-300' : 'text-slate-700']">{{ getBaseFor(xtall).name }}</p>
            </div>
            <div v-else class="hidden lg:block flex-1 opacity-5 border-l-2 border-slate-500 ml-4"></div>
          </div>

          <div class="lg:col-span-6 relative">
            <div :class="['h-full rounded-[2.5rem] border-2 transition-all shadow-2xl overflow-hidden',
              isDark ? 'bg-[#0b1226]/90 border-white/10' : 'bg-white border-slate-200']">
              <div class="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div :class="['w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shrink-0 mx-auto md:mx-0',
                  isDark ? 'bg-slate-950 border-white/10' : 'bg-slate-50 border-slate-200']">
                  <img :src="getIconPath(xtall)" class="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div class="flex-1 w-full space-y-4">
                  <h3 :class="['text-2xl md:text-3xl font-[1000] tracking-tighter uppercase italic', getLabelColor(xtall)]">{{ xtall.name }}</h3>
                  <div :class="['p-5 rounded-3xl border-2', isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-100']">
                    <div v-for="(stat, sIdx) in parseStats(xtall.view)" :key="sIdx" class="text-xs md:text-sm font-bold mb-1">
                      <p :class="[stat.includes('Dengan') ? 'text-green-500 italic' : (stat.includes('-') ? 'text-red-500' : (isDark ? 'text-slate-300' : 'text-slate-600'))]">
                        {{ stat }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide">
            <template v-if="getEvoFor(xtall).length">
              <div v-for="evo in getEvoFor(xtall)" :key="evo.code" @click="setSearch(evo.name)"
                :class="['flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all shadow-xl relative overflow-hidden group',
                isDark ? 'bg-slate-900/30 border-white/10 hover:border-purple-500/50' : 'bg-white border-slate-200 hover:border-purple-400']">
                <div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-yellow-700 opacity-40"></div>
                <span class="text-[9px] font-black uppercase text-purple-500 tracking-widest block text-right">Next Upgrade</span>
                <p :class="['text-xs font-bold truncate text-right', isDark ? 'text-slate-300' : 'text-slate-700']">{{ evo.name }}</p>
              </div>
            </template>
            <div v-else class="hidden lg:block flex-1 opacity-5 border-r-2 border-slate-500 mr-4"></div>
          </div>
        </div>
      </main>

      <div v-if="totalPages > 1" class="flex justify-center gap-2 py-10">
        <button @click="currentPage--" :disabled="currentPage === 1" class="w-12 h-12 rounded-xl border-2 disabled:opacity-20">«</button>
        <button v-for="page in visiblePages" :key="page" @click="currentPage = page"
          :class="['w-12 h-12 rounded-xl border-2 font-black transition-all', 
          currentPage === page ? 'bg-blue-600 border-blue-600 text-white' : (isDark ? 'bg-slate-900 border-white/5 text-blue-400' : 'bg-white border-slate-200')]">
          {{ page }}
        </button>
        <button @click="currentPage++" :disabled="currentPage === totalPages" class="w-12 h-12 rounded-xl border-2 disabled:opacity-20">»</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router' // TAMBAHKAN INI
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { crystalData, CrystalType } from '../data/store.js';
// Crysta Biasa
import normalCrystas from "@/assets/icons/crysta_normal.jpg";
import weaponCrystas from "@/assets/icons/crysta_senjata.jpg";
import armorCrystas from "@/assets/icons/crysta_zirah.jpg";
import additionalCrystas from "@/assets/icons/crysta_pelengkap.jpg";
import specialCrystas from "@/assets/icons/crysta_tambahan.jpg";

// Enhancer (Crysta Upgrade/Up)
// Sesuai permintaanmu: crysta_up.jpg digunakan untuk normalEnhancerCrystas
import normalEnhancerCrystas from "@/assets/icons/crysta_up.jpg"; 
import weaponEnhancerCrystas from "@/assets/icons/enhance_weapon_crysta.png";
import armorEnhancerCrystas from "@/assets/icons/enhance_armor_crysta.png";
import additionalEnhancerCrystas from "@/assets/icons/enhance_additional_crysta.png";
import specialEnhancerCrystas from "@/assets/icons/enhace_special_crysta.png";
 import { parseXtallStats } from '@/utils/parseXtallStats'

const parsedCache = new Map()

function getParsedStats(xtall) {
  if (!parsedCache.has(xtall.code)) {
    parsedCache.set(xtall.code, parseXtallStats(xtall.view))
  }
  return parsedCache.get(xtall.code)
}

const router = useRouter()

function handleResetAll() {
  // 1. Reset State Lokal (seperti yang Anda miliki)
  searchQuery.value = ''
  selectedTypes.value = []
  selectedStats.value = []
  sortOrder.value = 'asc'
  itemsPerPage.value = 10

  // 2. Reset Parameter URL (Advanced Search)
  // Ini akan menghapus ?filter=... sehingga Advanced Search kembali kosong
  router.push({ query: {} })
}
/**
 * COMPONENT PROPS
 */
const props = defineProps({
  isDark: { type: Boolean, default: true }
});

/**
 * VISUAL COLOR ENGINE
 */
const groupColors = {
  "Base Stats": { text: "text-orange-400", border: "border-orange-500/30", accent: "text-orange-500 focus:ring-orange-500" },
  "ATK & DEF": { text: "text-cyan-400", border: "border-cyan-500/30", accent: "text-cyan-500 focus:ring-cyan-500" },
  "Stability, Accuracy, Dodge": { text: "text-blue-400", border: "border-blue-500/30", accent: "text-blue-500 focus:ring-blue-500" },
  "Critical": { text: "text-red-400", border: "border-red-500/30", accent: "text-red-500 focus:ring-red-500" },
  "Speed": { text: "text-pink-400", border: "border-pink-500/30", accent: "text-pink-500 focus:ring-pink-500" },
  "HP & MP": { text: "text-emerald-400", border: "border-emerald-500/30", accent: "text-emerald-500 focus:ring-emerald-500" },
  "Weapon ATK & Element": { text: "text-yellow-400", border: "border-yellow-500/30", accent: "text-yellow-500 focus:ring-yellow-500" },
  "Element Resistance": { text: "text-amber-500", border: "border-amber-500/30", accent: "text-amber-500 focus:ring-amber-500" },
  "Barrier & Defense Effect": { text: "text-green-500", border: "border-green-500/30", accent: "text-green-500 focus:ring-green-500" },
  "Offensive Effect": { text: "text-indigo-400", border: "border-indigo-500/30", accent: "text-indigo-500 focus:ring-indigo-500" },
  "Reduce DMG": { text: "text-teal-400", border: "border-teal-500/30", accent: "text-teal-500 focus:ring-teal-500" },
  "Other Stat": { text: "text-purple-400", border: "border-purple-500/30", accent: "text-purple-500 focus:ring-purple-500" }
};

const statusGroups = { "Base Stats": [ { label: "STR / STR%", value: "STR" }, { label: "INT / INT%", value: "INT" }, { label: "DEX / DEX%", value: "DEX" }, { label: "AGI / AGI%", value: "AGI" }, { label: "VIT / VIT%", value: "VIT" } ], 
"ATK & DEF": [ { label: "ATK / ATK%", value: ".ATK" }, { label: "MATK / MATK%", value: "MATK" }, { label: "DEF", value: ".DEF" }, { label: "MDEF", value: "MDEF" } ], 
"Stability, Accuracy, Dodge": [ { label: "Stability", value: "Stability" }, { label: "Akurasi", value: "Akurasi" }, { label: "Dodge", value: "Dodge" } ], 
"Critical": [ { label: "Critical Rate / CR%", value: "Critical Rate" }, { label: "Critical Damage / CD%", value: "Critical Damage" } ], 
"Speed": [ { label: "ASPD", value: "ASPD" }, { label: "CSPD", value: "CSPD" }, { label: "Motion Speed%", value: "Motion Speed" } ], 
"HP & MP": [ { label: "MaxHP / MaxHP%", value: "MaxHP" }, { label: "MaxMP / MaxMP%", value: "MaxMP" }, { label: "Natural MP Regen", value: "Natural MP Regen" }, { label: "Natural HP Regen", value: "Natural HP Regen" }, { label: "Attack MP Recovery", value: "Attack MP Recovery" } ],
 "Weapon ATK & Element": [ { label: "Weapon ATK", value: "Weapon ATK" }, { label: "DTE (Elements)", value: "stronger against" } ], 
 "Element Resistance": [ { label: "Phys Resistance%", value: "Kekebalan Fisik" }, { label: "Magic Resistance%", value: "Kekebalan Sihir" }, { label: "Light Resistance%", value: "kebal Cahaya" }, { label: "Dark Resistance%", value: "kebal Gelap" }, { label: "Earth Resistance%", value: "kebal Bumi" }, { label: "Fire Resistance%", value: "kebal Api" }, { label: "Water Resistance%", value: "kebal Air" }, { label: "Wind Resistance%", value: "kebal Angin" } ],
  "Barrier & Defense Effect": [ { label: "Fractional Barrier%", value: "Pelindung Fraksional" }, { label: "Ailment Resistance%", value: "Resistansi Status Buruk" }, { label: "Aggro%", value: "Aggro" } ], 
  "Offensive Effect": [ { label: "Physical Pierce%", value: "Physical Pierce" }, { label: "Magic Pierce%", value: "Peneterasi Sihir" }, { label: "Short Range Dmg%", value: "Daya Jarak Dekat" }, { label: "Long Range Dmg%", value: "Daya Jarak Jauh" }, { label: "Unsheathe Attack%", value: "Serangan Menghunus" }, { label: "Additional Melee", value: "Tambahan Fisik" }, { label: "Additional Magic", value: "Tambahan Sihir" }, { label: "Antisipasi", value: "Antisipasi" }, { label: "Guard Break", value: "Guard Break" } ], 
  "Reduce DMG": [ { label: "Reduksi DMG (Sekitar Pemain)", value: "Reduksi DMG (Sekitar Pemain)" }, { label: "Reduksi DMG (Sekitar Musuh)", value: "Reduksi DMG (Sekitar Musuh)" }, { label: "Reduksi DMG (Lantai)", value: "Reduksi DMG (Lantai)" }, { label: "Reduksi DMG (Linear)", value: "Reduksi DMG (Linear)" }, { label: "Reduksi DMG (Bowling)", value: "Reduksi DMG (Bowling)" }, { label: "Reduksi DMG (Terjang)", value: "Reduksi DMG (Terjang)" }, { label: "Reduksi DMG (Peluru)", value: "Reduksi DMG (Peluru)" } ], 
  "Other Stat": [ { label: "Drop Rate%", value: "Drop Rate" }, { label: "EXP%", value: "EXP" }, { label: "Revive Time%", value: "Revive Time" }, { label: "Tumble Unavailable", value: "Tumble Unavailable" }, { label: "Evasion Recharge", value: "Evasion Recharge" }, { label: "Refleks", value: "Refleks" }, { label: "Recoil", value: "Recoil" } ] };


/**
 * RECTIVE STATE
 */
const searchQuery = ref('');
const selectedTypes = ref([]);
const selectedStats = ref([]);
const isStatusOpen = ref(false);
const isTypeOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortOrder = ref('asc');
const statusRef = ref(null);
const typeRef = ref(null);

const route = useRoute()

const advancedFilter = computed(() => {
  try {
    return route.query.filter
      ? JSON.parse(route.query.filter)
      : null
  } catch {
    return null
  }
})

function parseStatsFromView(viewText) {
  const result = {}
  if (!viewText) return result

  viewText.split('\n').forEach(line => {
    const match = line.match(/(.+?)\s([+-])\s?(\d+)/)
    if (match) {
      const [, name, sign, value] = match
      result[name.trim().toUpperCase()] = {
        sign,
        value: Number(value)
      }
    }
  })

  return result
}


 /** LOGIC METHODS
 */
 const toggleTypeDropdown = () => {
  isTypeOpen.value = !isTypeOpen.value;
  if (isTypeOpen.value) isStatusOpen.value = false; // Tutup Status jika Type dibuka
};

const toggleStatusDropdown = () => {
  isStatusOpen.value = !isStatusOpen.value;
  if (isStatusOpen.value) isTypeOpen.value = false; // Tutup Type jika Status dibuka
};

const toggleType = (type) => {
  const index = selectedTypes.value.indexOf(type);
  if (index === -1) {
    selectedTypes.value.push(type); // Masukkan jika belum ada
  } else {
    selectedTypes.value.splice(index, 1); // Hapus jika sudah ada
  }
};

// Fungsi Toggle Stat
const toggleStat = (stat) => {
  const index = selectedStats.value.indexOf(stat);
  if (index === -1) {
    selectedStats.value.push(stat);
  } else {
    selectedStats.value.splice(index, 1);
  }
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedTypes.value = [];
  selectedStats.value = [];
  currentPage.value = 1;
};

const getIconPath = (xtall) => {
  const type = xtall.type?.toUpperCase();

  // Kalau bukan upgrade
  if (type !== 'UPGRADE') {
    return iconMap[type] || normalCrystas;
  }

  // Kalau upgrade → cari root type
  const rootType = findRootType(xtall);
  return iconMap[`${rootType}_UPGRADE`] || normalEnhancerCrystas;
};


const getBadgeColor = (type) => {
  const map = { 
    'NORMAL': 'bg-blue-500/10 text-blue-500 border-blue-500/40', 
    'UPGRADE': 'bg-purple-500/10 text-purple-500 border-purple-500/40', 
    'ADDITIONAL': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/40', 
    'WEAPON': 'bg-red-500/10 text-red-500 border-red-500/40', 
    'ARMOR': 'bg-green-500/10 text-green-500 border-green-500/40', 
    'SPECIAL': 'bg-pink-500/10 text-pink-500 border-pink-500/40' 
  };
  return map[type?.toUpperCase()] || 'bg-slate-500/10 text-slate-500 border-slate-500/40';
};

const getBaseFor = (xtall) => {
  if (!xtall.link) return null;
  return crystalData.find(c => String(c.code) === String(xtall.link));
};

const getEvoFor = (xtall) => {
  return crystalData.filter(c => String(c.link) === String(xtall.code));
};
const displayTypes = [
  { label: 'Weapon Crystas', value: 'WEAPON' },
  { label: 'Weapon Enhancer Crystas', value: 'WEAPON_UPGRADE' },

  { label: 'Armor Crystas', value: 'ARMOR' },
  { label: 'Armor Enhancer Crystas', value: 'ARMOR_UPGRADE' },

  { label: 'Additional Crystas', value: 'ADDITIONAL' },
  { label: 'Additional Enhancer Crystas', value: 'ADDITIONAL_UPGRADE' },

  { label: 'Normal Crystas', value: 'NORMAL' },
  { label: 'Normal Enhancer Crystas', value: 'NORMAL_UPGRADE' },

  { label: 'Special Crystas', value: 'SPECIAL' },
  { label: 'Special Enhancer Crystas', value: 'SPECIAL_UPGRADE' }
];
const iconMap = {
  NORMAL: normalCrystas,
  UPGRADE: normalEnhancerCrystas,

  ADDITIONAL: additionalCrystas,
  ADDITIONAL_UPGRADE: additionalEnhancerCrystas,

  ARMOR: armorCrystas,
  ARMOR_UPGRADE: armorEnhancerCrystas,

  WEAPON: weaponCrystas,
  WEAPON_UPGRADE: weaponEnhancerCrystas,

  SPECIAL: specialCrystas,
  SPECIAL_UPGRADE: specialEnhancerCrystas,
};


const getTypeLabel = (type) => {
  const t = type.toUpperCase();

  const isEnhancer = t === 'UPGRADE' || t === 'ENHANCER';

  const rootMap = {
    WEAPON: 'Weapon',
    ARMOR: 'Armor',
    ADDITIONAL: 'Additional',
    NORMAL: 'Normal',
    SPECIAL: 'Special'
  };

  // Kalau DB sudah kasih full info
  if (rootMap[t]) {
    return `${rootMap[t]} Crystas`;
  }

  // Untuk UPGRADE / ENHANCER
  if (isEnhancer) {
    return 'Enhancer Crystas';
  }

  return `${type} Crystas`;
};

/**
 * ROOT XTALL RESOLVER (BASE XTALL)
 */
const findRootItem = (item) => {
  if (!item) return null;

  let current = item;
  let safety = 0;

  while (current.link && safety < 10) {
    const parent = crystalData.find(
      c => String(c.code) === String(current.link)
    );
    if (!parent) break;
    current = parent;
    safety++;
  }

  return current;
};

const findRootType = (item) => {
  const root = findRootItem(item);
  return root?.type?.toUpperCase() || 'NORMAL';
};

/**
 * LABEL COLOR ENGINE (FOLLOW BASE XTALL)
 */
const getLabelColor = (xtall) => {
  if (!xtall) return 'text-cyan-500';

  const type = xtall.type?.toUpperCase();

  // Upgrade / Enhancer selalu abu
  if (type === 'UPGRADE' || type === 'ENHANCER') {
    return 'text-gray-400';
  }

  const rootType = findRootType(xtall);

  const map = { 
    WEAPON: 'text-red-500',
    ARMOR: 'text-green-500',
    NORMAL: 'text-sky-500',
    ADDITIONAL: 'text-yellow-500',
    SPECIAL: 'text-purple-500'
  };

  return map[rootType] || 'text-cyan-500';
};


const parseStats = (view) => {
  if (!view) return [];
  return Array.isArray(view) ? view : view.split(/,|\n/).map(s => s.trim()).filter(s => s);
};

const setSearch = (name) => { 
  searchQuery.value = name; 
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
};

/**
 * COMPUTED ENGINE
 */
const filteredResults = computed(() => {
  let res = crystalData.filter(c => c.name?.trim());
  
  // 1. FILTER DARI URL (HASIL ADVANCED SEARCH)
  if (advancedFilter.value) {
    const { stats, types } = advancedFilter.value;

    // Filter Stats dari URL
    if (stats && Object.keys(stats).length > 0) {
      res = res.filter(c => {
        const parsed = getParsedStats(c);
        return Object.entries(stats).every(([statName, rule]) => {
          const stat = parsed[statName.toUpperCase()];
          if (!stat) return false;
          if (stat.sign !== rule.sign) return false;
          if (rule.value !== null) {
            if (rule.op === '>=' && stat.value < rule.value) return false;
            if (rule.op === '<=' && stat.value > rule.value) return false;
          }
          return true;
        });
      });
    }

    // Filter Types dari URL
    if (types && types.length > 0) {
      res = res.filter(c => {
        const rootType = findRootType(c);
        const isUpgrade = c.type === 'UPGRADE';
        return types.some(sel => {
          if (!sel.includes('_')) return !isUpgrade && rootType === sel;
          const [base, kind] = sel.split('_');
          return kind === 'UPGRADE' && isUpgrade && rootType === base;
        });
      });
    }
  }
  
  // 2. SEARCH BAR LOKAL
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    res = res.filter(c => c.name.toLowerCase().includes(q));
  }
  
  // 3. DROPDOWN TYPE LOKAL
  if (selectedTypes.value.length > 0) {
    res = res.filter(c => {
      const rootType = findRootType(c);
      const isUpgrade = c.type === 'UPGRADE';
      return selectedTypes.value.some(sel => {
        if (!sel.includes('_')) return !isUpgrade && rootType === sel;
        const [base, kind] = sel.split('_');
        return kind === 'UPGRADE' && isUpgrade && rootType === base;
      });
    });
  }

  // 4. DROPDOWN STATS LOKAL
  if (selectedStats.value.length > 0) {
    res = res.filter(c => {
      const vText = (c.view || "").toUpperCase();
      return selectedStats.value.every(s => vText.includes(s.toUpperCase()));
    });
  }
  
  return res.sort((a, b) => {
    return sortOrder.value === 'asc' 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name);
  });
});

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredResults.value.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() => Math.ceil(filteredResults.value.length / itemsPerPage.value) || 1);

const visiblePages = computed(() => {
  let start = Math.max(1, currentPage.value - 2);
  let end = Math.min(totalPages.value, start + 4);
  if (end - start < 4) start = Math.max(1, end - 4);
  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);
  return pages;
});

/**
 * LIFECYCLE & UTILITIES
 */
const closeOnOutside = (e) => {
  if (statusRef.value && !statusRef.value.contains(e.target)) isStatusOpen.value = false;
  if (typeRef.value && !typeRef.value.contains(e.target)) isTypeOpen.value = false;
};

onMounted(() => {
  window.addEventListener('click', closeOnOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', closeOnOutside);
});

watch([searchQuery, selectedTypes, selectedStats, itemsPerPage, sortOrder], () => {
  currentPage.value = 1;
});
</script>

<style scoped>
/* PERBAIKAN TOTAL DOUBLE SCROLLBAR */

/* 1. Matikan semua scrollbar internal di dalam view ini */
:deep(*) {
  scrollbar-width: none !important; /* Firefox */
  -ms-overflow-style: none !important; /* IE/Edge */
}

:deep(*::-webkit-scrollbar) {
  display: none !important; /* Chrome/Safari */
  width: 0 !important;
  height: 0 !important;
}

/* 2. Pastikan elemen pembungkus TIDAK MEMILIKI overflow yang memicu scrollbar */
div, section, main {
  overflow: visible !important;
  height: auto !important;
}

/* 3. Pengecualian: Biarkan area 'Next/Previous Upgrade' tetap bisa di-swipe horizontal di Mobile */
/* Tapi kita tetap sembunyikan batang scrollbar-nya agar bersih */
.scroll-hide {
  overflow-x: auto !important;
  display: flex !important;
  -webkit-overflow-scrolling: touch;
}

/* Animasi Entry */
.animate-entry { 
  animation: slide-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
  opacity: 0; 
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
</style>