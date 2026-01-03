<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps(['isDark'])
defineEmits(['toggleDark'])

const route = useRoute();
const router = useRouter();
const navContainer = ref(null);

// Indikator Geser (Sliding Pill)
const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0,
});

// Fungsi Navigasi ke Home
const goHome = () => router.push('/');

// DATA BINTANG & DEBU (Tetap sama seperti milikmu)
const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i, size: Math.random() * 8 + 6 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', duration: Math.random() * 3 + 2 + 's', delay: Math.random() * 5 + 's'
}))

const dusts = Array.from({ length: 25 }, (_, i) => ({
  id: i, size: Math.random() * 3 + 1 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', duration: Math.random() * 15 + 10 + 's', delay: Math.random() * 5 + 's'
}))

// Logika Sliding & Shadow dinamis
const updateIndicator = async () => {
  await nextTick();
  const activeLink = navContainer.value?.querySelector('.active-link');
  if (activeLink) {
    indicatorStyle.value = {
      left: `${activeLink.offsetLeft}px`,
      width: `${activeLink.offsetWidth}px`,
      opacity: 1,
      // Efek Shadow & Glow mengikuti warna gradien
      boxShadow: route.path === '/bs-calc' 
        ? '0 10px 25px -5px rgba(245, 158, 11, 0.5)' 
        : '0 10px 25px -5px rgba(139, 92, 246, 0.5)',
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

watch(() => route.path, updateIndicator);
</script>

<template>
  <div :class="['min-h-screen transition-all duration-[1500ms] relative overflow-hidden bg-fixed', isDark ? 'bg-mesh-dark text-white' : 'bg-mesh-light text-slate-900']">
    
    <div class="absolute inset-0 pointer-events-none z-0">
      <div v-for="star in stars" :key="star.id" class="absolute animate-twinkle star-flare shadow-glow" :class="isDark ? 'bg-white' : 'bg-indigo-600'" :style="{ width: star.size, height: star.size, top: star.top, left: star.left, animationDelay: star.delay }"></div>
    </div>

    <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl px-4">
      <div class="backdrop-blur-3xl border px-6 py-3 flex justify-between items-center rounded-[32px] transition-all duration-700 shadow-2xl"
           :class="isDark ? 'bg-black/40 border-white/10 shadow-indigo-500/10' : 'bg-white/70 border-white/50 shadow-blue-500/5'">
        
        <div @click="goHome" class="flex items-center gap-4 cursor-pointer group select-none">
          <div :class="['w-11 h-11 overflow-hidden rounded-2xl border-2 transition-all duration-500 rotate-3 group-hover:rotate-0 group-hover:scale-110 group-active:scale-95 shadow-xl', 
                        isDark ? 'border-red-500 shadow-red-500/40' : 'border-indigo-500 shadow-indigo-500/20']">
            <img src="/images/logo.png" alt="Logo" class="w-full h-full object-cover scale-110" />
          </div>
          <div class="flex flex-col">
            <span class="font-black italic text-xl uppercase tracking-widest leading-none group-hover:text-indigo-500 transition-colors">
              TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">DB</span>
            </span>
            <span class="text-[8px] font-bold tracking-[0.4em] uppercase opacity-60">Toram Online Tools</span>
          </div>
        </div>

        <div ref="navContainer" class="hidden lg:flex relative p-2.5 rounded-2xl border border-black/5 dark:border-white/5 bg-slate-900/5 dark:bg-white/5">
          <div 
            class="absolute h-[calc(100%-12px)] top-1.5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-xl z-0"
            :style="indicatorStyle"
          ></div>

          <router-link to="/" class="nav-link" active-class="active-link">LIST BAG</router-link>
          <router-link to="/mq" class="nav-link" active-class="active-link">LIST MQ</router-link>
          <router-link to="/mq-calc" class="nav-link" active-class="active-link">MQ CALC</router-link>
          <router-link to="/bs-calc" class="nav-link" active-class="active-link">BS CALC</router-link>
          <router-link to="/xtall" class="nav-link" active-class="active-link">XTALL</router-link>
        </div>

        <button @click="$emit('toggleDark')" 
                class="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 hover:scale-110 active:scale-90 shadow-lg relative overflow-hidden group"
                :class="isDark ? 'bg-slate-900 border-white/10 text-orange-400' : 'bg-white border-indigo-100 text-indigo-600'">
          <span class="text-xl z-10 transition-transform group-hover:rotate-12">{{ isDark ? '🌙' : '☀️' }}</span>
        </button>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto pt-44 px-8 pb-20 relative z-10 animate-page-in">
      <slot />
    </main>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

/* Nav Link Dasar */
.nav-link { 
  @apply px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-tighter transition-all duration-300
         text-slate-500 dark:text-slate-400 relative z-10 whitespace-nowrap; 
}

/* Link Aktif (Teks saja, BG dihandle Slider) */
.active-link { 
  @apply !text-white; 
}

/* Shadow Glow untuk Bintang */
.shadow-glow {
  filter: drop-shadow(0 0 8px currentColor);
}

.star-flare {
  clip-path: polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%);
}

/* Mesh Gradients (Tetap Sesuai Kode Kamu) */
.bg-mesh-dark {
  background-color: #020617;
  background-image: radial-gradient(at 0% 0%, #3b0764 0, transparent 40%), radial-gradient(at 100% 0%, #450a0a 0, transparent 40%), radial-gradient(at 100% 100%, #1e1b4b 0, transparent 40%), radial-gradient(at 50% 50%, #020617 0, transparent 100%);
}

.bg-mesh-light {
  background-color: #ffffff;
  background-image: radial-gradient(at 0% 0%, #f5f3ff 0, transparent 40%), radial-gradient(at 100% 0%, #fee2e2 0, transparent 40%), radial-gradient(at 100% 100%, #e0f2fe 0, transparent 40%);
}

@keyframes page-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-page-in { animation: page-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
</style>