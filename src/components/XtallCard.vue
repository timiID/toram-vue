<template>
  <div 
    :class="[
      'group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl',
      isMain ? 'p-8' : 'p-6',
      isDark ? 'bg-slate-900/60 border-white/5 hover:border-cyan-500/30' : 'bg-white border-slate-100 hover:border-cyan-200'
    ]"
  >
    <div class="flex justify-between items-start mb-6">
      <span 
        :class="[
          'px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest',
          typeClass
        ]"
      >
        {{ data.type }}
      </span>
      <span class="text-[9px] font-mono text-slate-500 opacity-50">#{{ data.code }}</span>
    </div>

    <div class="flex items-center gap-5 mb-6">
      <div class="relative shrink-0">
        <div class="absolute inset-0 bg-cyan-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <img 
          :src="icons[data.type] || icons['NORMAL']" 
          class="relative w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 :class="['text-xl font-black leading-tight', isDark ? 'text-white' : 'text-slate-800']">
        {{ data.name }} </h3>
    </div>

    <div :class="['rounded-3xl p-5', isDark ? 'bg-black/20' : 'bg-slate-50']">
      <div class="space-y-2">
        <div 
          v-for="(line, idx) in splitStats" 
          :key="idx"
          class="flex items-start gap-3 group/stat cursor-pointer"
          @click="$emit('search', cleanText(line))"
        >
          <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          <p :class="['text-sm font-bold', isDark ? 'text-slate-300 group-hover/stat:text-cyan-400' : 'text-slate-600 group-hover/stat:text-cyan-600']">
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: Object,
  icons: Object,
  isDark: Boolean,
  isMain: Boolean
});

defineEmits(['search']);

// Menangani teks status yang pakai \n di store.js agar jadi list rapi
const splitStats = computed(() => {
  if (!props.data.view) return [];
  return props.data.view.split('\n').filter(item => item.trim() !== '');
});

// Bersihkan angka/simbol saat klik status untuk pencarian
const cleanText = (text) => {
  return text.replace(/[+-\d%]/g, '').trim();
};

const typeClass = computed(() => {
  const map = {
    'UPGRADE': 'bg-pink-500/10 text-pink-500 border border-pink-500/20',
    'NORMAL': 'bg-blue-500/10 text-blue-500 border border-blue-500/20',
    'WEAPON': 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
    'ARMOR': 'bg-purple-500/10 text-purple-500 border border-purple-500/20',
    'ADDITIONAL': 'bg-orange-500/10 text-orange-500 border border-orange-500/20',
    'SPECIAL': 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
  };
  return map[props.data.type] || 'bg-slate-500/10 text-slate-400';
});
</script>