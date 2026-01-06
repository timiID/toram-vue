<template>
  <div :class="['min-h-screen relative overflow-hidden font-sans transition-all duration-700', isDark ? 'bg-[#020617] text-slate-200' : 'bg-slate-50 text-slate-900']">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div :class="['absolute inset-0 bg-[url(\'/images/logo.png\')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]', isDark ? 'brightness-200' : 'invert opacity-[0.02]']"></div>
      <div v-if="isDark" class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div v-if="isDark" class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
    </div>

    <div v-if="xtall" class="relative z-10 max-w-5xl mx-auto p-6 md:p-20">
      <button @click="$router.push('/xtall')" class="group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2">
        <div class="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
          <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="3"/></svg>
        </div>
        <span class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500">Back to Database</span>
      </button>

      <div class="grid lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-5 space-y-6">
          <div :class="['relative aspect-square rounded-[3.5rem] border-2 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-700 group',
            isDark ? 'bg-slate-950/80 border-white/10' : 'bg-white border-slate-200']">
            
            <div :class="['absolute inset-0 opacity-20 blur-3xl animate-pulse', getGlowColor(xtall.type)]"></div>
            
            <img :src="getIconPath(xtall.type)" class="relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110" />
            
            <div :class="['absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-xl', getBadgeColor(xtall.type)]">
              {{ xtall.type }}
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-8">
          <div>
            <h1 class="text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">{{ xtall.name }}</span>
            </h1>
            <div class="flex items-center gap-4">
              <div class="h-[2px] w-12 bg-cyan-500"></div>
              <p class="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Identity Code: #{{ xtall.code }}</p>
            </div>
          </div>

          <div :class="['p-8 md:p-12 rounded-[3rem] border-2 backdrop-blur-3xl shadow-2xl relative overflow-hidden',
            isDark ? 'bg-slate-950/50 border-white/5 shadow-black/50' : 'bg-white/80 border-slate-200 shadow-slate-200/50']">
            
            <div class="absolute top-0 right-0 p-8 text-8xl opacity-[0.03] grayscale pointer-events-none">🧬</div>
            
            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
              Attribute Details
            </h3>

            <div class="space-y-6">
              <div v-for="(stat, idx) in parseStats(xtall.view)" :key="idx" 
                class="flex items-start gap-4 group/stat">
                <div class="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 group-hover/stat:scale-150 transition-transform"></div>
                <p :class="['text-lg md:text-xl font-bold tracking-tight transition-colors', 
                  stat.includes('-') ? 'text-red-500' : (isDark ? 'text-slate-200 group-hover/stat:text-cyan-400' : 'text-slate-700')]">
                  {{ stat }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-if="previousEvo" @click="goToXtall(previousEvo.code)"
              :class="['group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden', 
              isDark ? 'bg-white/5 border-white/5 hover:border-cyan-500/50' : 'bg-slate-100 border-slate-200 hover:border-cyan-500 shadow-lg']">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Previous Evolution</p>
              <p class="text-sm font-bold flex items-center gap-2">
                <span class="text-cyan-500 group-hover:-translate-x-1 transition-transform">←</span>
                {{ previousEvo.name }}
              </p>
            </div>
            <div v-else :class="['p-6 rounded-[2.5rem] border-2 border-dashed opacity-40', isDark ? 'border-white/10' : 'border-slate-300']">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Previous Evolution</p>
              <p class="text-xs font-bold opacity-50 italic">None (Base Form)</p>
            </div>

            <div v-if="nextEvo" @click="goToXtall(nextEvo.code)"
              :class="['group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden', 
              isDark ? 'bg-white/5 border-white/5 hover:border-purple-500/50' : 'bg-slate-100 border-slate-200 hover:border-purple-500 shadow-lg']">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Next Upgrade</p>
              <p class="text-sm font-bold flex items-center gap-2 justify-between">
                {{ nextEvo.name }}
                <span class="text-purple-500 group-hover:translate-x-1 transition-transform">→</span>
              </p>
            </div>
            <div v-else :class="['p-6 rounded-[2.5rem] border-2 border-dashed opacity-40', isDark ? 'border-white/10' : 'border-slate-300']">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Next Upgrade</p>
              <p class="text-xs font-bold opacity-50 italic">Max Upgrade</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div v-else class="h-screen flex items-center justify-center">
       <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { crystalData } from '../data/store.js';

const props = defineProps(['id', 'isDark']);
const router = useRouter();

const xtall = computed(() => {
  return crystalData.find(c => String(c.code) === String(props.id));
});

// Logika Evolusi
const previousEvo = computed(() => {
  if (!xtall.value || !xtall.value.link) return null;
  return crystalData.find(c => String(c.code) === String(xtall.value.link));
});

const nextEvo = computed(() => {
  if (!xtall.value) return null;
  // Mencari kristal yang memiliki 'link' mengarah ke kristal saat ini
  return crystalData.find(c => String(c.link) === String(xtall.value.code));
});

const goToXtall = (code) => {
  router.push(`/xtall/${code}`);
};

// Reset scroll saat ganti ID kristal
watch(() => props.id, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const parseStats = (view) => {
  if (!view) return [];
  return Array.isArray(view) ? view : view.split(/,|\n/).map(s => s.trim()).filter(s => s);
};

const getIconPath = (type) => {
  const map = { 'NORMAL': 'crysta_normal.jpg', 'WEAPON': 'crysta_senjata.jpg', 'ARMOR': 'crysta_zirah.jpg', 'ADDITIONAL': 'crysta_pelengkap.jpg', 'SPECIAL': 'crysta_tambahan.jpg', 'UPGRADE': 'crysta_up.jpg' };
  const file = map[type?.toUpperCase()] || 'crysta_normal.jpg';
  return new URL(`../assets/icons/${file}`, import.meta.url).href;
};

const getBadgeColor = (type) => {
  const map = { 
    'NORMAL': 'bg-blue-500 text-white border-blue-400', 
    'UPGRADE': 'bg-purple-500 text-white border-purple-400',
    'WEAPON': 'bg-red-500 text-white border-red-400',
    'ARMOR': 'bg-green-500 text-white border-green-400'
  };
  return map[type?.toUpperCase()] || 'bg-slate-700 text-white border-slate-600';
};

const getGlowColor = (type) => {
  const map = { 'NORMAL': 'bg-blue-600', 'UPGRADE': 'bg-purple-600', 'WEAPON': 'bg-red-600', 'ARMOR': 'bg-green-600' };
  return map[type?.toUpperCase()] || 'bg-cyan-600';
};
</script>

<style scoped>
.font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
</style>