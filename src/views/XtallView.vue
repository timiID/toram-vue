<template>
  <div :class="['relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8 space-y-8 min-h-screen font-sans transition-all duration-500']">
    
    <div class="fixed inset-0 pointer-events-none z-[-1] opacity-30">
      <svg class="absolute -top-20 -left-20 w-[500px] h-[500px] blur-[100px] animate-slow-float" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="#06b6d4" />
      </svg>
      <svg class="absolute -bottom-20 -right-20 w-[500px] h-[500px] blur-[100px] animate-slow-float-delayed" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="#a855f7" />
      </svg>
    </div>

    <div :class="['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-[3rem] border backdrop-blur-xl shadow-2xl transition-all relative z-[100] overflow-visible', 
      isDark ? 'bg-slate-900/40 border-white/10' : 'bg-white/70 border-white shadow-blue-100/50 text-slate-900']">
      
      <div class="space-y-2 relative">
        <label :class="['block text-[10px] font-black uppercase tracking-widest ml-4', isDark ? 'text-cyan-400' : 'text-cyan-600']">Search Name</label>
        <div class="relative group">
          <input v-model="searchQuery" type="text" placeholder="Search Crysta..." 
            :class="['w-full pl-14 pr-4 py-5 rounded-[2rem] border outline-none transition-all shadow-inner', 
            isDark ? 'bg-slate-800/50 border-white/10 text-white focus:ring-cyan-500/50' : 'bg-white/80 border-slate-100 text-slate-900 shadow-blue-50/50']">
          <div class="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-cyan-500/10">
             <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round"/></svg>
          </div>
        </div>
      </div>

      <div class="space-y-2 relative">
        <label :class="['block text-[10px] font-black uppercase tracking-widest ml-4', isDark ? 'text-orange-400' : 'text-orange-600']">Type Crysta</label>
        <div class="relative">
          <select v-model="selectedType" 
            :class="['w-full pl-14 pr-12 py-5 rounded-[2rem] border outline-none cursor-pointer font-bold appearance-none transition-all shadow-inner', 
            isDark ? 'bg-slate-800/50 border-white/10 text-white' : 'bg-white/80 border-slate-100 text-slate-900 shadow-orange-50/50']">
            <option value="">All Types</option>
            <option v-for="type in CrystalType" :key="type" :value="type">{{ type }}</option>
          </select>
          <div class="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-orange-500/10 pointer-events-none">
            <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke-linecap="round"/></svg>
          </div>
          <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>

      <div class="space-y-2 relative">
        <label :class="['block text-[10px] font-black uppercase tracking-widest ml-4', isDark ? 'text-emerald-400' : 'text-emerald-600']">
          Status ({{ selectedStats.length }})
        </label>
        <div class="relative">
          <button @click.stop="isStatusOpen = !isStatusOpen" 
            :class="['w-full pl-14 pr-12 py-5 rounded-[2rem] border text-left font-bold transition-all shadow-inner truncate relative', 
            isDark ? 'bg-slate-800/50 border-white/10 text-white' : 'bg-white/80 border-slate-100 text-slate-900 shadow-emerald-50/50']">
            {{ selectedStats.length > 0 ? selectedStats.length + ' dipilih' : 'Pilih Status...' }}
            <div :class="['absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 opacity-40', isStatusOpen ? 'rotate-180' : '']">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </button>
          
          <div v-if="isStatusOpen" 
            class="absolute left-0 top-full mt-4 w-[320px] md:w-[500px] z-[9999] p-6 rounded-[2.5rem] border shadow-2xl backdrop-blur-3xl max-h-[500px] overflow-y-auto scale-in-center"
            :class="isDark ? 'bg-slate-900/95 border-white/10 shadow-black' : 'bg-white/95 border-slate-200 shadow-emerald-200/50'">
            
            <div v-for="(options, group) in statusGroups" :key="group" class="mb-8 last:mb-0 relative">
              <h5 :class="['text-[11px] font-black uppercase tracking-[0.2em] mb-4 pl-4', groupColors[group].text]">
                {{ group }}
              </h5>
              
              <div :class="['grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 pl-4 border-l-2 ml-1 transition-colors duration-300', groupColors[group].border]">
                <label v-for="opt in options" :key="opt.value" 
                  class="flex items-center gap-3 px-2 py-1.5 rounded-xl cursor-pointer hover:bg-white/5 transition-all group">
                  <input type="checkbox" v-model="selectedStats" :value="opt.value" 
                    :class="['w-4 h-4 rounded border-slate-500 bg-transparent focus:ring-offset-0', groupColors[group].accent]">
                  <span :class="['text-[11px] font-bold transition-colors duration-200', 
                    selectedStats.includes(opt.value) ? groupColors[group].text : (isDark ? 'text-slate-400' : 'text-slate-700'),
                    'group-hover:' + groupColors[group].text]">
                    {{ opt.label }}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-emerald-500/10 pointer-events-none">
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round"/></svg>
          </div>
        </div>
      </div>

      <div class="space-y-2 relative">
        <label :class="['block text-[10px] font-black uppercase tracking-widest ml-4', isDark ? 'text-purple-400' : 'text-purple-600']">Display</label>
        <div class="relative">
          <select v-model="itemsPerPage" 
            :class="['w-full pl-6 pr-12 py-5 rounded-[2rem] border outline-none cursor-pointer font-bold appearance-none transition-all shadow-inner relative', 
            isDark ? 'bg-slate-800/50 border-white/10 text-white' : 'bg-white/80 border-slate-100 text-slate-900 shadow-purple-50/50']">
            <option :value="10">Show 10</option>
            <option :value="20">Show 20</option>
            <option :value="crystalData.length">Show All</option>
          </select>
          <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-0" @click="isStatusOpen = false">
      
      <div v-if="searchQuery.trim() !== ''" class="lg:col-span-3 space-y-4">
        <h4 v-if="downgradeChain.length" class="text-[10px] font-black uppercase ml-6 mb-4 tracking-[0.2em] text-slate-400">Evolution Chain</h4>
        <XtallCard v-for="xtall in downgradeChain" :key="'down-'+xtall.code" :data="xtall" :icons="crystalIcons" :is-dark="isDark" :is-main="false" @search="setSearch" />
      </div>

      <div :class="[searchQuery.trim() !== '' ? 'lg:col-span-6' : 'lg:col-span-12 max-w-5xl mx-auto w-full', 'space-y-6']">
        
        <template v-if="paginatedResults.length > 0">
          <XtallCard v-for="xtall in paginatedResults" :key="xtall.code" :data="xtall" :is-main="true" :icons="crystalIcons" :is-dark="isDark" @search="setSearch" />
          
          <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 py-10 flex-wrap">
            <button @click="currentPage--" :disabled="currentPage === 1" class="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 disabled:opacity-20 shadow-sm transition-all hover:bg-slate-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="3" stroke-linecap="round"/></svg>
            </button>
            <div class="flex gap-2">
              <button v-for="p in displayedPages" :key="p" @click="p !== '...' && (currentPage = p)"
                :class="['w-12 h-12 rounded-2xl font-black transition-all shadow-sm', currentPage === p ? 'bg-cyan-500 text-white' : 'bg-white text-slate-400 hover:bg-slate-50']">
                {{ p }}
              </button>
            </div>
            <button @click="currentPage++" :disabled="currentPage === totalPages" class="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 disabled:opacity-20 shadow-sm transition-all hover:bg-slate-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="3" stroke-linecap="round"/></svg>
            </button>
          </div>
        </template>

        <div v-else class="text-center py-20 rounded-[3rem] border border-dashed border-slate-200">
           <p class="text-slate-400 font-black uppercase tracking-widest">No Crystals Found</p>
        </div>
      </div>

      <div v-if="searchQuery.trim() !== ''" class="lg:col-span-3 space-y-4">
        <h4 v-if="upgradeChain.length" class="text-[10px] font-black uppercase ml-6 mb-4 tracking-[0.2em] text-slate-400">Next Upgrade</h4>
        <XtallCard v-for="xtall in upgradeChain" :key="'up-'+xtall.code" :data="xtall" :icons="crystalIcons" :is-dark="isDark" :is-main="false" @search="setSearch" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import XtallCard from '../components/XtallCard.vue';
import { crystalData, crystalIcons, CrystalType } from '../data/store.js';

const props = defineProps({ isDark: { type: Boolean, default: true } });

const searchQuery = ref('');
const selectedType = ref('');
const selectedStats = ref([]);
const isStatusOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(10);

const groupColors = {
  "ATTACK": { text: "text-cyan-400", border: "border-cyan-500/30", accent: "text-cyan-500 focus:ring-cyan-500" },
  "DEFENSE": { text: "text-emerald-400", border: "border-emerald-500/30", accent: "text-emerald-500 focus:ring-emerald-500" },
  "BASE STATS": { text: "text-orange-400", border: "border-orange-500/30", accent: "text-orange-500 focus:ring-orange-500" },
  "OTHER": { text: "text-purple-400", border: "border-purple-500/30", accent: "text-purple-500 focus:ring-purple-500" }
};

const statusGroups = {
  "ATTACK": [
    { label: "ATK / ATK%", value: ".ATK" },
    { label: "MATK / MATK%", value: "MATK" },
    { label: "Weapon ATK", value: "Weapon ATK" },
    { label: "DTE (Elements)", value: "stronger against" },
    { label: "Critical Rate / CR%", value: "Critical Rate" },
    { label: "Critical Damage / CD%", value: "Critical Damage" },
    { label: "Short Range Dmg%", value: "Daya Jarak Dekat" },
    { label: "Long Range Dmg%", value: "Daya Jarak Jauh" },
    { label: "Physical Pierce%", value: "Physical Pierce" },
    { label: "Magic Pierce%", value: "Peneterasi Sihir" },
    { label: "Additional Melee", value: "Tambahan Fisik" },
    { label: "Additional Magic", value: "Tambahan Sihir" },
    { label: "Dodge", value: "Dodge" },
    { label: "Evasion Recharge", value: "Evasion Recharge" },
    { label: "Unsheathe Attack%", value: "Serangan Menghunus" },
    { label: "Stability", value: "Stability" },
    { label: "Antisipasi", value: "Antisipasi" },
    { label: "Guard Break", value: "Guard Break" }
  ],
  "DEFENSE": [
    { label: "DEF", value: ".DEF" },
    { label: "MDEF", value: "MDEF" },
    { label: "Aggro%", value: "Aggro" },
    { label: "Phys Resistance%", value: "Kekebalan Fisik" },
    { label: "Magic Resistance%", value: "Kekebalan Sihir" },
    { label: "Light Resistance%", value: "kebal Cahaya" },
    { label: "Dark Resistance%", value: "kebal Gelap" },
    { label: "Earth Resistance%", value: "kebal Bumi" },
    { label: "Fire Resistance%", value: "kebal Api" },
    { label: "Water Resistance%", value: "kebal Air" },
    { label: "Wind Resistance%", value: "kebal Angin" },
    { label: "Ailment Resistance%", value: "Resistansi Status Buruk" },
    { label: "Fractional Barrier%", value: "Pelindung Fraksional" },
    { label: "Reduksi DMG (Sekitar Pemain)", value: "Reduksi DMG (Sekitar Pemain)" },
    { label: "Reduksi DMG (Sekitar Musuh)", value: "Reduksi DMG (Sekitar Musuh)" },
    { label: "Reduksi DMG (Lantai)", value: "Reduksi DMG (Lantai)" },
    { label: "Reduksi DMG (Linear)", value: "Reduksi DMG (Linear)" },
    { label: "Reduksi DMG (Bowling)", value: "Reduksi DMG (Bowling)" },
    { label: "Reduksi DMG (Terjang)", value: "Reduksi DMG (Terjang)" },
    { label: "Reduksi DMG (Peluru)", value: "Reduksi DMG (Peluru)" },
    { label: "Akurasi", value: "Akurasi" },
    { label: "Guard Break", value: "Guard Break" },
    { label: "Guard Break", value: "Guard Break" },
    { label: "MaxHP / MaxHP%", value: "MaxHP" },
    { label: "MaxMP / MaxMP%", value: "MaxMP" }
  ],
  "BASE STATS": [
    { label: "STR / STR%", value: "STR" },
    { label: "INT / INT%", value: "INT" },
    { label: "DEX / DEX%", value: "DEX" },
    { label: "AGI / AGI%", value: "AGI" },
    { label: "VIT / VIT%", value: "VIT" }
  ],
  "OTHER": [
    { label: "ASPD", value: "ASPD" },
    { label: "CSPD", value: "CSPD" },
    { label: "Motion Speed%", value: "Motion Speed" },
    { label: "AMPR", value: "Attack MP Recovery" },
    { label: "Natural MP Regen", value: "Natural MP Regen" },
    { label: "Natural HP Regen", value: "Natural HP Regen" },
    { label: "Drop Rate%", value: "Drop Rate" },
    { label: "EXP%", value: "EXP" },
    { label: "Revive Time%", value: "Revive Time" }
  ]
};

const hasFilter = computed(() => searchQuery.value.trim() !== '' || selectedType.value !== '' || selectedStats.value.length > 0);

watch([searchQuery, selectedType, selectedStats, itemsPerPage], () => { currentPage.value = 1; });

const setSearch = (name) => {
  searchQuery.value = name;
  selectedStats.value = [];
  isStatusOpen.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// BAGIAN UTAMA: Sekarang mengembalikan semua data jika filter kosong
const filteredAndSortedResults = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  const typeF = selectedType.value;
  const statsF = selectedStats.value;

  // Jika tidak ada filter, kembalikan semua data urut abjad
  if (!hasFilter.value) {
    return [...crystalData].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Jika ada filter, lakukan penyaringan
  return crystalData.filter(c => {
    const nameMatch = !query || c.name.toLowerCase().includes(query);
    const typeMatch = !typeF || c.type === typeF;
    let statMatch = true;
    if (statsF.length > 0) {
      if (!c.view) return false;
      const vt = c.view.toUpperCase();
      statMatch = statsF.every(tag => {
        if (tag === 'REG_ATK') return /\bATK\b/.test(vt) && !vt.includes('MATK') && !vt.includes('WEAPON ATK');
        return vt.includes(tag.toUpperCase());
      });
    }
    return nameMatch && typeMatch && statMatch;
  }).sort((a, b) => a.name.localeCompare(b.name));
});

const totalPages = computed(() => Math.ceil(filteredAndSortedResults.value.length / itemsPerPage.value));
const paginatedResults = computed(() => filteredAndSortedResults.value.slice((currentPage.value - 1) * itemsPerPage.value, currentPage.value * itemsPerPage.value));

const displayedPages = computed(() => {
  const t = totalPages.value; const c = currentPage.value;
  if (t <= 7) return Array.from({ length: t }, (_, i) => i + 1);
  if (c <= 4) return [1, 2, 3, 4, 5, '...', t];
  if (c >= t - 3) return [1, '...', t - 4, t - 3, t - 2, t - 1, t];
  return [1, '...', c - 1, c, c + 1, '...', t];
});

const downgradeChain = computed(() => {
  if (searchQuery.value === '' || !filteredAndSortedResults.value.length) return [];
  const chain = []; let current = filteredAndSortedResults.value[0];
  while (current?.link) {
    const parent = crystalData.find(p => p.code === current.link);
    if (parent) { chain.unshift(parent); current = parent; } else break;
  }
  return chain;
});

const upgradeChain = computed(() => (searchQuery.value !== '' && filteredAndSortedResults.value.length) ? crystalData.filter(c => c.link === filteredAndSortedResults.value[0].code) : []);
</script>

<style scoped>
@keyframes slow-float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -20px); } }
.animate-slow-float { animation: slow-float 15s ease-in-out infinite; }
.scale-in-center { animation: scale-in-center 0.2s ease-out both; }
@keyframes scale-in-center { 0% { opacity: 0; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1); } }
select { appearance: none; }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-thumb { background: #475569; border-radius: 10px; }
</style>