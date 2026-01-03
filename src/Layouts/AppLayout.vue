<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps(['isDark'])
defineEmits(['toggleDark'])

const route = useRoute();
const router = useRouter();
const navContainer = ref(null);
const itemRefs = ref({});

// Indikator Geser (Sliding Pill)
const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0,
});

// Fungsi Navigasi ke Home
const goHome = () => router.push('/');

// DATA BINTANG & DEBU
const stars = Array.from({ length: 30 }, (_, i) => ({
  id: i, size: Math.random() * 8 + 6 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', duration: Math.random() * 3 + 2 + 's', delay: Math.random() * 5 + 's'
}))

const dusts = Array.from({ length: 20 }, (_, i) => ({
  id: i, size: Math.random() * 3 + 1 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', duration: Math.random() * 15 + 10 + 's', delay: Math.random() * 5 + 's'
}))

// Fungsi untuk menangkap elemen link secara dinamis
const setItemRef = (el, path) => {
  if (el) itemRefs.value[path] = el.$el || el;
};

// Logika Sliding & Shadow dinamis
const updateIndicator = async () => {
  await nextTick();
  const activeLink = itemRefs.value[route.path];
  
  if (activeLink) {
    indicatorStyle.value = {
      left: `${activeLink.offsetLeft}px`,
      width: `${activeLink.offsetWidth}px`,
      opacity: 1,
      boxShadow: route.path === '/bs-calc' 
        ? '0 8px 20px -5px rgba(245, 158, 11, 0.6)' 
        : '0 8px 20px -5px rgba(139, 92, 246, 0.6)',
      background: route.path === '/bs-calc' 
        ? 'linear-gradient(to right, #f59e0b, #ef4444)' 
        : 'linear-gradient(to right, #ef4444, #a855f7)',
    };

    // Auto-scroll menu ke tengah pada layar HP
    activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
};

onMounted(() => {
  setTimeout(updateIndicator, 400);
  window.addEventListener('resize', updateIndicator);
});

watch(() => route.path, updateIndicator);
</script>

<template>
  <div :class="['min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed', isDark ? 'bg-mesh-dark text-white' : 'bg-mesh-light text-slate-900']">
    
    <div class="absolute inset-0 pointer-events-none z-0">
      <div v-for="star in stars" :key="star.id" class="absolute animate-twinkle star-flare shadow-glow" :class="isDark ? 'bg-white' : 'bg-indigo-600'" :style="{ width: star.size, height: star.size, top: star.top, left: star.left, animationDelay: star.delay }"></div>
    </div>

    <nav class="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl">
      <div class="backdrop-blur-3xl border px-3 md:px-4 py-2 flex justify-between items-center rounded-full transition-all duration-700 shadow-2xl"
           :class="isDark ? 'bg-black/40 border-white/10 shadow-indigo-500/10' : 'bg-white/70 border-white/50 shadow-blue-500/5'">
        
        <div @click="goHome" class="flex items-center shrink-0 cursor-pointer group select-none z-10 w-fit md:w-[180px]">
          <div :class="['w-9 h-9 md:w-10 md:h-10 overflow-hidden rounded-full border-2 transition-all duration-500 shadow-lg', 
                        isDark ? 'border-red-500' : 'border-indigo-500']">
            <img src="/images/logo.png" alt="Logo" class="w-full h-full object-cover scale-110" />
          </div>
          <div class="hidden sm:flex flex-col ml-3">
            <span class="font-black italic text-sm md:text-base uppercase tracking-widest leading-none">
              TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">DB</span>
            </span>
            <span class="text-[7px] font-bold uppercase opacity-50 tracking-widest">Toram Online Tools</span>
          </div>
        </div>

        <div class="flex-1 flex justify-center overflow-hidden mx-2">
          <div class="relative flex bg-slate-900/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 overflow-hidden w-full max-w-fit">
            <div ref="navContainer" class="flex items-center overflow-x-auto no-scrollbar scroll-smooth relative">
              
              <div 
                class="absolute h-[calc(100%-4px)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0"
                :style="indicatorStyle"
              ></div>

              <router-link :ref="el => setItemRef(el, '/')" to="/" class="nav-link" active-class="active-link">LIST BAG</router-link>
              <router-link :ref="el => setItemRef(el, '/mq')" to="/mq" class="nav-link" active-class="active-link">LIST MQ</router-link>
              <router-link :ref="el => setItemRef(el, '/mq-calc')" to="/mq-calc" class="nav-link" active-class="active-link">MQ-CALC</router-link>
              <router-link :ref="el => setItemRef(el, '/bs-calc')" to="/bs-calc" class="nav-link" active-class="active-link">BS-CALC</router-link>
              <router-link :ref="el => setItemRef(el, '/xtall')" to="/xtall" class="nav-link" active-class="active-link">XTALL</router-link>
            </div>
          </div>
        </div>

        <div class="flex justify-end shrink-0 z-10 w-fit md:w-[180px]">
          <button @click="$emit('toggleDark')" 
                  class="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0 overflow-hidden"
                  :class="isDark ? 'bg-slate-900 border-white/10 text-orange-400' : 'bg-white border-indigo-100 text-indigo-600'">
            <span class="text-lg md:text-xl z-10">{{ isDark ? '🌙' : '☀️' }}</span>
          </button>
        </div>

      </div>
    </nav>

    <main class="max-w-7xl mx-auto pt-32 md:pt-44 px-4 md:px-8 pb-20 relative z-10 animate-page-in">
      <slot />
    </main>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.nav-link { 
  @apply px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300
         text-slate-500 dark:text-slate-400 relative z-10 whitespace-nowrap flex-shrink-0; 
}

.active-link { 
  @apply !text-white; 
}

/* Sembunyikan Scrollbar */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.shadow-glow { filter: drop-shadow(0 0 8px currentColor); }

.star-flare {
  clip-path: polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%);
}

.bg-mesh-dark {
  background-color: #020617;
  background-image: radial-gradient(at 0% 0%, #3b0764 0, transparent 40%), radial-gradient(at 100% 0%, #450a0a 0, transparent 40%), radial-gradient(at 100% 100%, #1e1b4b 0, transparent 40%), radial-gradient(at 50% 50%, #020617 0, transparent 100%);
}

.bg-mesh-light {
  background-color: #ffffff;
  background-image: radial-gradient(at 0% 0%, #f5f3ff 0, transparent 40%), radial-gradient(at 100% 0%, #fee2e2 0, transparent 40%), radial-gradient(at 100% 100%, #e0f2fe 0, transparent 40%);
}

@keyframes page-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-page-in { animation: page-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
.animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
</style>