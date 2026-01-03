<template>
  <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <div class="relative mb-8">
      <div class="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 animate-pulse"></div>
      <div class="relative w-32 h-32 md:w-48 md:h-48 bg-slate-900/40 backdrop-blur-2xl border-2 border-white/10 rounded-[3rem] flex items-center justify-center shadow-2xl">
        <span class="text-6xl md:text-8xl animate-bounce">💎</span>
      </div>
    </div>

    <h1 class="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-indigo mb-4">
      List Xtall
    </h1>
    <div class="flex items-center gap-3 mb-8">
      <div class="h-[2px] w-12 bg-indigo-500"></div>
      <span class="text-indigo-400 font-black uppercase tracking-[0.3em] text-sm">Coming Soon</span>
      <div class="h-[2px] w-12 bg-indigo-500"></div>
    </div>
    
    <p class="text-slate-400 max-w-md font-medium leading-relaxed">
      We are currently collecting the best Crystas (Xtall) data for you. Wait for our next database update!
    </p>

    <router-link 
      to="/" 
      class="mt-12 px-10 py-4 bg-white dark:bg-indigo-600 text-slate-900 dark:text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
    >
      Back to Home
    </router-link>
  </div>
</template>