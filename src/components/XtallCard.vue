<template>
  <div 
    v-if="data.name && data.name.trim() !== ''"
    :class="[
      'group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1',
      isMain ? 'p-8' : 'p-6',
      isDark ? 'bg-slate-900/60 border-white/5 hover:border-cyan-500/30' : 'bg-white border-slate-100 hover:border-cyan-200 shadow-sm'
    ]"
  >
    <div class="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 rounded-full pointer-events-none"></div>

    <div class="flex justify-between items-start mb-6 relative z-10">
      <span 
        :class="[
          'px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest',
          typeClass
        ]"
      >
        {{ data.type || 'NORMAL' }}
      </span>
      <span class="text-[9px] font-bold text-slate-500 opacity-40 font-mono tracking-tighter">
        #ID_{{ data.code }}
      </span>
    </div>

    <div class="flex items-center gap-6 mb-8 relative z-10">
      <div class="relative shrink-0">
        <div :class="['absolute inset-0 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity rounded-full', glowColor]"></div>
        <img 
          :src="icons[data.type] || icons['NORMAL']" 
          class="relative w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
          :alt="data.name"
        />
      </div>
      <div class="min-w-0">
        <h3 
          :class="[
            'text-xl md:text-2xl font-black leading-tight tracking-tight break-words',
            isDark ? 'text-white' : 'text-slate-800'
          ]"
        >
          {{ data.name }}
        </h3>
        <div class="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
      </div>
    </div>

    <div 
      :class="[
        'rounded-[2rem] p-6 transition-all border',
        isDark ? 'bg-slate-950/50 border-white/5' : 'bg-slate-50/50 border-slate-100'
      ]"
    >
      <div class="space-y-3.5">
        <div 
          v-for="(stat, index) in formattedStats" 
          :key="index"
          class="flex items-start gap-3 group/item cursor-pointer"
          @click="$emit('search', extractStatName(stat))"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform"></div>
          
          <p 
            v-html="stat"
            :class="[
              'text-[13px] md:text-sm font-bold leading-relaxed transition-colors',
              isDark ? 'text-slate-300 group-hover/item:text-cyan-400' : 'text-slate-600 group-hover/item:text-cyan-600'
            ]"
          ></p>
        </div>
        
        <div v-if="formattedStats.length === 0" class="py-2 flex items-center gap-2 text-slate-500 italic text-xs">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0114 0z" stroke-width="2" /></svg>
          No stats info available
        </div>
      </div>
    </div>

    <div class="mt-6 flex justify-end relative z-10">
      <button 
        class="group/btn text-[10px] font-black uppercase tracking-widest text-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2 py-2"
      >
        <span class="group-hover/btn:mr-1 transition-all">Lihat Detail</span> 
        <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: { type: Object, required: true },
  icons: { type: Object, required: true },
  isDark: { type: Boolean, default: true },
  isMain: { type: Boolean, default: true }
});

defineEmits(['search']);

// Logic: Memisahkan string "view" (mendukung formattedView dari parent) menjadi array baris demi baris
const formattedStats = computed(() => {
  // Gunakan formattedView dari parent jika ada (untuk warna merah), jika tidak gunakan view biasa
  const source = props.data.formattedView || props.data.view;
  if (!source) return [];
  return source
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0);
});

// Logic: Mengambil nama stat untuk fitur klik-untuk-cari
const extractStatName = (statLine) => {
  // Membersihkan tag HTML (seperti <span>) sebelum mengekstrak nama stat
  const cleanLine = statLine.replace(/<[^>]*>/g, "");
  const match = cleanLine.match(/[a-zA-Z\s]+/);
  return match ? match[0].trim() : cleanLine;
};

// Dynamic Glow berdasarkan tipe crysta
const glowColor = computed(() => {
  const colors = {
    'WEAPON': 'bg-emerald-500',
    'ARMOR': 'bg-purple-500',
    'ADDITIONAL': 'bg-orange-500',
    'SPECIAL': 'bg-yellow-500',
    'UPGRADE': 'bg-pink-500',
    'NORMAL': 'bg-blue-500'
  };
  return colors[props.data.type?.toUpperCase()] || 'bg-cyan-500';
});

// Styling Label berdasarkan tipe
const typeClass = computed(() => {
  const types = {
    'NORMAL': 'bg-blue-500/10 text-blue-500 border border-blue-500/20',
    'UPGRADE': 'bg-pink-500/10 text-pink-500 border border-pink-500/20',
    'ADDITIONAL': 'bg-orange-500/10 text-orange-500 border border-orange-500/20',
    'WEAPON': 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
    'ARMOR': 'bg-purple-500/10 text-purple-500 border border-purple-500/20',
    'SPECIAL': 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
  };
  return types[props.data.type?.toUpperCase()] || 'bg-slate-500/10 text-slate-500 border border-slate-500/20';
});
</script>

<style scoped>
/* Smooth transition untuk semua elemen */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Animasi sederhana untuk icon agar terlihat "hidup" */
@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}

.group:hover img {
  animation: pulse-subtle 3s ease-in-out infinite;
}

/* Memastikan class warna merah dari v-html tetap terbaca walaupun scoped */
:deep(.text-red-500) {
  color: #ef4444 !important;
}
</style>