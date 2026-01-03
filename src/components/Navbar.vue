<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-3xl">
    <div :class="[
      'backdrop-blur-2xl border rounded-full px-4 md:px-6 py-2.5 flex justify-between items-center shadow-2xl transition-all duration-500', 
      isDark ? 'bg-slate-900/70 border-white/10 shadow-indigo-500/10' : 'bg-white/80 border-slate-200 shadow-blue-500/5'
    ]">
      
      <router-link to="/" class="flex items-center gap-3 shrink-0 group">
        <div class="w-9 h-9 overflow-hidden rounded-full border-2 border-indigo-500 group-hover:rotate-12 transition-transform duration-500">
          <img src="/images/logo.png" alt="Logo" class="w-full h-full object-cover" />
        </div>
        <span :class="['hidden sm:block font-black italic text-lg tracking-tighter uppercase', isDark ? 'text-white' : 'text-slate-900']">
          TIMI DB
        </span>
      </router-link>

      <div class="flex bg-slate-800/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/10 gap-1 items-center overflow-x-auto no-scrollbar">
        <router-link to="/" class="nav-btn" active-class="nav-active">HOME</router-link>
        <router-link to="/mq" class="nav-btn" active-class="nav-active">LIST MQ</router-link>
        <router-link to="/mq-calc" class="nav-btn" active-class="nav-active">CALC</router-link>
        <router-link to="/bs-calc" class="nav-btn" active-class="nav-active-bs">BS CALC</router-link>
      </div>

      <button 
        @click="$emit('toggleDark')" 
        class="w-10 h-10 rounded-full flex items-center justify-center border shadow-lg active:scale-90 transition-all duration-300 shrink-0"
        :class="isDark ? 'bg-slate-800 border-white/10 text-yellow-400' : 'bg-white border-slate-200 text-indigo-600'"
      >
        <span class="text-xl leading-none">{{ isDark ? '☀️' : '🌙' }}</span>
      </button>

    </div>
  </nav>
</template>

<script setup>
defineProps({ isDark: Boolean });
defineEmits(['toggleDark']);
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.nav-btn {
  @apply px-4 md:px-5 py-2 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap;
  @apply text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white;
}

.nav-active {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  @apply !text-white shadow-[0_4px_15px_rgba(79,70,229,0.4)] border border-white/20;
}

/* Warna khusus untuk BS Calc (Oranye/Rose) agar beda dari MQ Calc */
.nav-active-bs {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  @apply !text-white shadow-[0_4px_15px_rgba(245,158,11,0.4)] border border-white/20;
}
</style>