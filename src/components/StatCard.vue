<script setup>
defineProps({
  title: String,
  value: [Number, String],
  // color format: 'blue', 'indigo', 'red', 'orange'
  type: String 
})

const colorMap = {
  blue: 'bg-blue-500 shadow-blue-500/30',
  indigo: 'bg-indigo-500 shadow-indigo-500/30',
  red: 'bg-rose-500 shadow-rose-500/30',
  orange: 'bg-amber-500 shadow-amber-500/30'
}
</script>

<template>
  <div 
    :class="[colorMap[type] || 'bg-slate-500']" 
    class="relative overflow-hidden p-6 rounded-[2.5rem] text-white shadow-xl transition-transform hover:-translate-y-1 duration-300"
  >
    <div class="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
    
    <p class="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">
      {{ title }}
    </p>
    <h3 class="text-4xl font-black italic tracking-tighter">
      {{ value }}
    </h3>
  </div>
</template>