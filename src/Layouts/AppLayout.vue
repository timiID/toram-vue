<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps(['isDark']);
defineEmits(['toggleDark']);

const route = useRoute();
const router = useRouter();
const itemRefs = ref({});
const isSidebarOpen = ref(false);

const indicatorStyle = ref({ left: '0px', width: '0px', opacity: 0 });

const navLinks = {
  '/': 'HOME',
  '/bag-list': 'BAG LIST',
  '/mq-list': 'MQ LIST',
  '/mq-calc': 'MQ-CALC',
  '/bs-calc': 'BS-CALC',
  '/xtall': 'XTALL ID'
};

// DATA BACKGROUND (Efek Bintang & Debu)
const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i, size: Math.random() * 5 + 2 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', delay: Math.random() * 5 + 's'
}))
const dusts = Array.from({ length: 40 }, (_, i) => ({
  id: i, size: Math.random() * 2 + 1 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', duration: Math.random() * 15 + 10 + 's', delay: Math.random() * 10 + 's'
}))

const setItemRef = (el, path) => {
  if (el) itemRefs.value[path] = el.$el || el;
};

const updateIndicator = async () => {
  await nextTick();
  const activeLink = itemRefs.value[route.path];
  if (activeLink) {
    indicatorStyle.value = {
      left: `${activeLink.offsetLeft}px`,
      width: `${activeLink.offsetWidth}px`,
      opacity: 1,
      background: route.path === '/bs-calc' 
        ? 'linear-gradient(to right, #f59e0b, #ef4444)' 
        : 'linear-gradient(to right, #ef4444, #a855f7)',
    };
  }
};

onMounted(() => {
  setTimeout(updateIndicator, 400);
  window.addEventListener('resize', updateIndicator);
});

watch(() => route.path, () => {
  updateIndicator();
  isSidebarOpen.value = false;
});
</script>

<template>
  <div :class="['min-h-screen flex flex-col transition-all duration-[1000ms] relative overflow-x-hidden', isDark ? 'bg-mesh-dark text-white' : 'bg-mesh-light text-slate-900']">
    
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div v-for="dust in dusts" :key="'dust-'+dust.id" 
        class="absolute rounded-full blur-[1px] animate-pulse opacity-20" 
        :class="isDark ? 'bg-indigo-400' : 'bg-blue-300'" 
        :style="{ width: dust.size, height: dust.size, top: dust.top, left: dust.left, animationDuration: dust.duration, animationDelay: dust.delay }">
      </div>
      <div v-for="star in stars" :key="'star-'+star.id" 
        class="absolute star-flare shadow-glow opacity-30 animate-twinkle" 
        :class="isDark ? 'bg-white' : 'bg-indigo-600'" 
        :style="{ width: star.size, height: star.size, top: star.top, left: star.left, animationDelay: star.delay }">
      </div>
    </div>

    <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden"></div>
    
    <aside :class="[
      'fixed top-0 left-0 h-screen z-[200] transition-transform duration-500 transform border-r shadow-2xl flex flex-col',
      'w-[60vw] md:w-[30vw] lg:w-[20vw] max-w-[220px]', 
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      isDark ? 'bg-[#0f172a] border-white/10' : 'bg-white border-slate-200'
    ]">
      
      <div class="flex justify-end p-0">
        <button 
          @click="isSidebarOpen = false" 
          class="p-2 rounded-xl transition-all active:scale-90 hover:bg-black/10 dark:hover:bg-white/10 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-colors" :class="isDark ? 'text-indigo-400 group-hover:text-white' : 'text-slate-600 group-hover:text-black'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="px-[2%] pb-[8%] flex items-center gap-3">
        <img src="/images/logo.png" class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20" alt="Logo" />
        <span class="font-black italic text-[1.1rem] md:text-[1.3rem] leading-none">
          TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span>
        </span>
      </div>

      <div class="flex-1 px-[5%] overflow-y-auto no-scrollbar flex flex-col gap-1 md:gap-2">
        <router-link v-for="(name, path) in navLinks" :key="path" :to="path"
          class="py-[4%] px-[6%] rounded-xl font-bold transition-all flex items-center justify-between group text-[0.85rem] md:text-[0.95rem]"
          :class="route.path === path ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-black/5 dark:hover:bg-white/5'">
          {{ name }}
          <span v-if="route.path === path" class="text-[0.6rem]">●</span>
        </router-link>
      </div>

      <div class="p-[8%] border-t border-black/5 dark:border-white/5 text-center">
        <p class="text-[10px] opacity-30 font-bold tracking-widest uppercase">Powered by Timi © 2026</p>
      </div>
    </aside>

    <nav class="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-[100] w-[96%] max-w-[1400px]">
      <div :class="['backdrop-blur-3xl border flex items-center rounded-full shadow-2xl p-1.5 md:p-2 transition-all duration-700',
        isDark ? 'bg-black/50 border-white/10 shadow-indigo-500/10' : 'bg-white/80 border-white/50 shadow-blue-500/5']">
        
        <div class="flex-1 flex justify-start items-center pl-2">
          <button @click="isSidebarOpen = true" class="lg:hidden p-2 mr-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
            <span class="text-xl">☰</span>
          </button>
          
          <div @click="router.push('/')" class="flex items-center cursor-pointer group gap-2 md:gap-3 active:scale-95 transition-transform">
            <div :class="['w-8 h-8 md:w-12 md:h-12 overflow-hidden rounded-full border border-white/10 shadow-lg', isDark ? 'border-white/20' : 'border-slate-300']">
              <img src="/images/logo.png" class="w-full h-full object-cover group-hover:rotate-[360deg] transition-transform duration-[1.5s]" />
            </div>
            <span class="hidden sm:inline text-md md:text-xl font-black italic tracking-tighter uppercase">
              TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span>
            </span>
          </div>
        </div>

        <div class="hidden lg:flex flex-shrink-0 px-1">
          <div class="relative flex bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner backdrop-blur-md">
            <div class="absolute h-[calc(100%-8px)] top-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0 shadow-lg" :style="indicatorStyle"></div>
            <router-link v-for="(name, path) in navLinks" :key="path" :ref="el => setItemRef(el, path)" :to="path"
              class="relative z-10 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors"
              active-class="!text-white">
              {{ name }}
            </router-link>
          </div>
        </div>

        <div class="flex-1 flex justify-end items-center pr-2 md:pr-6 gap-3 md:gap-5">
          <div class="flex flex-col items-end leading-none select-none transition-all duration-500">
            <span :class="['text-[10px] md:text-[13px] font-black italic tracking-tighter transition-colors duration-500', 
              isDark ? 'text-indigo-400' : 'text-slate-500']">
              {{ isDark ? 'DARK MODE' : 'LIGHT MODE' }}
            </span>
          </div>

          <div @click="$emit('toggleDark')" :class="['relative h-7 w-12 md:h-9 md:w-16 rounded-full cursor-pointer transition-all duration-500 border p-1 shadow-inner',
            isDark ? 'bg-indigo-950 border-white/20' : 'bg-blue-100 border-slate-300']">
            
            <div :class="[
              'absolute top-0.5 md:top-0.5 w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-10 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] transform active:scale-90',
              isDark 
                ? 'translate-x-5 md:translate-x-7 bg-gradient-to-br from-blue-300 to-cyan-800 shadow-[0_0_15px_3px_rgba(139,92,246,0.6)]' 
                : 'translate-x-0 bg-gradient-to-br from-yellow-100 to-orange-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.4)]'
            ]">
              <span class="text-[10px] md:text-sm">{{ isDark ? '🌙' : '☀️' }}</span>
            </div>
          </div>
        </div>

      </div>
    </nav>

    <main class="flex-1 max-w-7xl mx-auto pt-24 md:pt-36 px-4 pb-20 relative z-10 animate-fade-in w-full">
      <slot />
    </main>

  </div>
</template>

<style scoped>
/* background-attachment: fixed menjaga gradient tidak putus saat scroll */
.bg-mesh-dark {
  background-color: #020617;
  background-attachment: fixed;
  background-image: radial-gradient(at 0% 0%, #1e1b4b 0, transparent 50%), radial-gradient(at 100% 0%, #450a0a 0, transparent 50%), radial-gradient(at 100% 100%, #3b0764 0, transparent 50%);
}
.bg-mesh-light {
  background-color: #ffffff;
  background-attachment: fixed;
  background-image: radial-gradient(at 0% 0%, #e0f2fe 0, transparent 50%), radial-gradient(at 100% 0%, #fee2e2 0, transparent 50%), radial-gradient(at 100% 100%, #f3e8ff 0, transparent 50%);
}

.shadow-glow { filter: drop-shadow(0 0 8px currentColor); }
.star-flare { clip-path: polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%); }

@keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
.animate-twinkle { animation: twinkle 4s ease-in-out infinite; }

@keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fade-in 0.6s ease-out forwards; }

/* Custom Scrollbar Modern */
:global(::-webkit-scrollbar) {
  width: 1px;
}
:global(::-webkit-scrollbar-track) {
  background: transparent;
}
:global(::-webkit-scrollbar-thumb) {
  background: rgba(122, 7, 120, 0.9);
  border-radius: 100px;
}
:global(::-webkit-scrollbar-thumb:hover) {
  background: rgb(255, 11, 96);
}
</style>