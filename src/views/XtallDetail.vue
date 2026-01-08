<template>
  <div :class="['min-h-screen relative overflow-hidden font-sans transition-all duration-700', isDark ? 'bg-[#020617] text-slate-200' : 'bg-slate-50 text-slate-900']">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div :class="['absolute inset-0 bg-[url(\'/images/logo.png\')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]', isDark ? 'brightness-200' : 'invert opacity-[0.02]']"></div>
      <div v-if="isDark" class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div v-if="isDark" class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"></div>
    </div>

    <div v-if="xtall" class="relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in">
      
      <button @click="$router.push('/xtall')" class="group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2">
        <div class="w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <svg class="w-5 h-5 text-cyan-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="3"/></svg>
        </div>
        <span class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500">Back to Database</span>
      </button>

      <div class="grid lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-5 space-y-6 animate-slide-right">
          <div :class="['relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group',
            isDark ? 'bg-slate-900 border-white/20' : 'bg-white border-slate-300']">
            
            <div :class="['absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700', getGlowColor(xtall.type)]"></div>
            
            <img :src="getIconPath(xtall.type)" class="relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float" />
            
            <div :class="['absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110', getBadgeColor(xtall.type)]">
              {{ formatBadgeText(xtall.type) }}
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-8 animate-slide-left">
          <div>
            <p :class="['text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm', getLabelColor(xtall.name)]">
              {{ formatBadgeText(xtall.type) }}
            </p>            
                <h1 :class="[
  'text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70',
  getLabelColor(xtall.type),
  isDark ? '[-webkit-text-stroke:1px_white]' : '[-webkit-text-stroke:1px_black]'
]"
:style="{
  /* Membuat efek gradient menggelap ke bawah tanpa merusak stroke */
  maskImage: 'linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)',
  webkitMaskImage: 'linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)'
}">
  {{ xtall.name }}
</h1>
            <div class="flex items-center gap-4">
              <div class="h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              <p class="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">System ID: #{{ xtall.code }}</p>
            </div>
          </div>

          <div :class="['p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50',
            isDark ? 'bg-slate-900/80 border-white/10 shadow-black' : 'bg-white border-slate-200 shadow-slate-300']">
            
            <div class="absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow">✨</div>
            <h3 class="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3">
              <span class="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span> Status/ Effect
            </h3>

            <div class="space-y-5">
              <div v-for="(stat, idx) in parseStats(xtall.view)" :key="idx" 
                class="flex items-start gap-4 group/stat animate-fade-in" 
                :style="{ animationDelay: (idx * 100) + 'ms' }">
                <div v-if="!stat.includes('Dengan')" class="mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"></div>
                <p :class="['text-base md:text-lg font-bold tracking-tight transition-colors', 
                  stat.includes('Dengan') ? 'text-green-500 italic' : (stat.includes('-') ? 'text-red-500' : (isDark ? 'text-slate-200 group-hover/stat:text-cyan-400' : 'text-slate-700'))]">
                  {{ stat }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-if="previousEvo" @click="goToXtall(previousEvo.code)"
              :class="['group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl', 
              isDark ? 'bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20' : 'bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200']">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Previous Model</p>
              <p class="text-sm font-bold flex items-center gap-2">
                <span class="text-cyan-500 group-hover:-translate-x-2 transition-transform">←</span> {{ previousEvo.name }}
              </p>
            </div>

            <div v-if="nextEvo" @click="goToXtall(nextEvo.code)"
              :class="['group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl', 
              isDark ? 'bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20' : 'bg-white border-slate-200 hover:border-purple-500 shadow-slate-200']">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Advanced Upgrade</p>
              <p class="text-sm font-bold flex items-center gap-2 justify-between">
                {{ nextEvo.name }} <span class="text-purple-500 group-hover:translate-x-2 transition-transform">→</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div v-else class="h-screen flex items-center justify-center">
       <div class="relative w-24 h-24">
         <div class="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
         <div class="absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"></div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { crystalData } from '../data/store.js';
// Crysta Biasa
import normalCrystas from "@/assets/icons/crysta_normal.jpg";
import weaponCrystas from "@/assets/icons/crysta_senjata.jpg";
import armorCrystas from "@/assets/icons/crysta_zirah.jpg";
import additionalCrystas from "@/assets/icons/crysta_tambahan.jpg";
import specialCrystas from "@/assets/icons/crysta_pelengkap.jpg";

// Enhancer
import normalEnhancerCrystas from "@/assets/icons/crysta_up.jpg";
import weaponEnhancerCrystas from "@/assets/icons/enhance_weapon_crysta.png";
import armorEnhancerCrystas from "@/assets/icons/enhance_armor_crysta.png";
import additionalEnhancerCrystas from "@/assets/icons/enhance_additional_crysta.png";
import specialEnhancerCrystas from "@/assets/icons/enhace_special_crysta.png";


const props = defineProps(['id', 'isDark']);
const router = useRouter();

const xtall = computed(() => crystalData.find(c => String(c.code) === String(props.id)));

const findRootType = (item) => {
  if (!item) return 'NORMAL';
  let current = item;
  let safety = 0;
  while (current.link && safety < 10) {
    const parent = crystalData.find(c => String(c.code) === String(current.link));
    if (parent) { current = parent; safety++; } 
    else break;
  }
  return current.type?.toUpperCase();
};

// Menentukan warna label di atas nama (Solid Color)
const getLabelColor = (type) => {
  const rootType = findRootType(xtall.value);
  const isUp = (type?.toUpperCase() === 'UPGRADE' || type?.toUpperCase() === 'ENHANCER');
  if (isUp) return 'text-gray-400';
  const map = { 
    'WEAPON': 'text-red-500', 
    'ARMOR': 'text-green-500', 
    'NORMAL': 'text-sky-500', 
    'ADDITIONAL': 'text-yellow-500', 
    'SPECIAL': 'text-purple-500' 
  };
  return map[rootType] || 'text-cyan-500';
};

const getGlowColor = (type) => {
  const rootType = findRootType(xtall.value);
  const map = { 'NORMAL': 'bg-blue-600', 'WEAPON': 'bg-red-600', 'ARMOR': 'bg-green-600', 'ADDITIONAL': 'bg-yellow-600', 'SPECIAL': 'bg-cyan-600' };
  return map[rootType] || 'bg-cyan-600';
};

const getBadgeColor = (type) => {
  const t = type?.toUpperCase();
  if (t === 'UPGRADE' || t === 'ENHANCER') return 'bg-purple-600 text-white border-purple-400';
  const map = { 'NORMAL': 'bg-blue-600', 'ADDITIONAL': 'bg-yellow-600', 'WEAPON': 'bg-red-600', 'ARMOR': 'bg-green-600', 'SPECIAL': 'bg-cyan-600' };
  return (map[t] || 'bg-slate-700') + ' text-white border-white/20';
};

const formatBadgeText = (type) => {
  const t = type?.toUpperCase();
  if (t === 'UPGRADE' || t === 'ENHANCER') return `${findRootType(xtall.value)} ENHANCER`;
  return t;
};

const previousEvo = computed(() => xtall.value?.link ? crystalData.find(c => String(c.code) === String(xtall.value.link)) : null);
const nextEvo = computed(() => xtall.value ? crystalData.find(c => String(c.link) === String(xtall.value.code)) : null);
const goToXtall = (code) => { router.push(`/xtall/${code}`); };
watch(() => props.id, () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
const parseStats = (view) => view ? (Array.isArray(view) ? view : view.split(/,|\n/).map(s => s.trim()).filter(s => s)) : [];

const getIconPath = (type) => {
  const t = type?.toUpperCase()
  const root = findRootType(xtall.value)

  // ===== ENHANCER / UPGRADE =====
  if (t === 'UPGRADE' || t === 'ENHANCER') {
    const enhancerMap = {
      'NORMAL': normalEnhancerCrystas,
      'WEAPON': weaponEnhancerCrystas,
      'ARMOR': armorEnhancerCrystas,
      'ADDITIONAL': additionalEnhancerCrystas,
      'SPECIAL': specialEnhancerCrystas
    }
    return enhancerMap[root] || normalEnhancerCrystas
  }

  // ===== CRYSTA BIASA =====
  const normalMap = {
    'NORMAL': normalCrystas,
    'WEAPON': weaponCrystas,
    'ARMOR': armorCrystas,
    'ADDITIONAL': additionalCrystas,
    'SPECIAL': specialCrystas
  }

  return normalMap[root] || normalCrystas
}

</script>

<style scoped>
.font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

/* Animasi Baru */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideLeft {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-float { animation: float 5s ease-in-out infinite; }
.animate-fade-in { animation: fadeIn 1s ease-out forwards; }
.animate-slide-right { animation: slideRight 0.8s ease-out forwards; }
.animate-slide-left { animation: slideLeft 0.8s ease-out forwards; }
.animate-spin-slow { animation: spin 12s linear infinite; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>