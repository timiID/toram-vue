<script setup>
defineProps(['isDark'])
defineEmits(['toggleDark'])

// DATA BINTANG: Diamond Flare Tajam & Besar
const stars = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 9 + 'px', 
  top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%',
  duration: Math.random() * 3 + 2 + 's',
  delay: Math.random() * 5 + 's'
}))
</script>

<template>
  <div :class="[
    'min-h-screen transition-all duration-1000 relative overflow-hidden bg-fixed',
    isDark 
      ? 'bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#312e81] text-white' 
      : 'bg-gradient-to-br from-[#e0f2fe] via-[#eef2ff] to-[#fae8ff] text-slate-900'
  ]">
    
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div v-for="star in stars" :key="star.id" 
           class="absolute animate-twinkle star-flare"
           :class="isDark ? 'bg-white' : 'bg-indigo-500'"
           :style="{
             width: star.size,
             height: star.size,
             top: star.top,
             left: star.left,
             animationDelay: star.delay,
             animationDuration: star.duration
           }">
      </div>
    </div>

    <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl">
      <div class="backdrop-blur-2xl border px-8 py-4 flex justify-between items-center shadow-2xl rounded-full transition-all duration-500"
           :class="isDark 
              ? 'bg-slate-900/60 border-white/10 shadow-indigo-500/10' 
              : 'bg-white/80 border-white/40 shadow-blue-500/10'">
        
        <div class="flex items-center gap-3">
          <div :class="[
            'w-10 h-10 overflow-hidden rounded-full border-2 transition-all duration-500 shadow-lg',
            isDark ? 'border-indigo-500 shadow-indigo-500/20' : 'border-blue-400 shadow-blue-400/20'
          ]">
            <img src="/images/logo.png" alt="Logo" class="w-full h-full object-cover" />
          </div>
          <span class="font-black italic text-xl uppercase tracking-widest" :class="isDark ? 'text-white' : 'text-slate-800'">
            TIMI DB
          </span>
        </div>

        <div class="hidden md:flex p-1.5 rounded-full border gap-1 items-center" 
             :class="isDark ? 'bg-slate-800/40 border-white/5' : 'bg-slate-200/50 border-slate-300/30'">
          <router-link to="/" class="nav-link" active-class="active-link">LIST BAG</router-link>
          <router-link to="/mq" class="nav-link" active-class="active-link">MAIN QUEST</router-link>
          <router-link to="/mq-calc" class="nav-link" active-class="active-link">MQ CALC</router-link>
          <router-link to="/bs-calc" class="nav-link" active-class="active-link">BS CALC</router-link>
          <router-link to="/xtall" class="nav-link" active-class="active-link">LIST XTALL</router-link>
        </div>

        <button @click="$emit('toggleDark')" 
                class="group flex items-center gap-2 p-1.5 rounded-xl transition-all duration-300 active:scale-95 border"
                :class="isDark ? 'bg-slate-800/60 border-white/10' : 'bg-white border-blue-100 shadow-md'">
          
          <div class="px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-colors"
               :class="isDark ? 'bg-white-600 text-white' : 'bg-slate-100 text-slate-800'">
            {{ isDark ? 'Dark' : 'Light' }}
          </div>

          <div class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner"
               :class="isDark ? 'bg-slate-900 text-yellow-400 rotate-[360deg]' : 'bg-indigo-500 text-white rotate-0'">
            <span class="text-lg">{{ isDark ? '🌙' : '☀️' }}</span>
          </div>
        </button>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto pt-40 px-6 pb-20 relative z-10">
      <slot />
    </main>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

/* Nav Link Style */
.nav-link { 
  @apply px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all text-slate-500 dark:text-slate-400 hover:text-indigo-500; 
}
.active-link { 
  @apply !bg-indigo-600 !text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]; 
}

/* BENTUK BINTANG EMPAT SUDUT (Diamond Flare) */
.star-flare {
  clip-path: polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
}

/* ANIMASI TWINKLE & ROTASI */
@keyframes twinkle {
  0%, 100% { 
    transform: scale(0.6) rotate(0deg); 
    opacity: 0.2; 
    filter: brightness(0.8) blur(0.5px);
  }
  50% { 
    transform: scale(1.2) rotate(90deg); 
    opacity: 1; 
    filter: brightness(1.5) blur(0px);
  }
}
.animate-twinkle { 
  animation: twinkle ease-in-out infinite; 
}
</style>