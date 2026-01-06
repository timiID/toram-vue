<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps(['isDark']);
defineEmits(['toggleDark']);

const route = useRoute();
const router = useRouter();
const navContainer = ref(null);
const itemRefs = ref({});

const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0,
});

const goHome = () => router.push('/');

// DATA BACKGROUND (Tetap)
const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i, size: Math.random() * 5 + 2 + 'px', top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%', duration: Math.random() * 3 + 2 + 's', delay: Math.random() * 5 + 's'
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
      boxShadow: route.path === '/bs-calc' 
        ? '0 6px 20px -3px rgba(245, 158, 11, 0.7)' 
        : '0 10px 25px -5px rgba(139, 92, 246, 0.7)',
      background: route.path === '/bs-calc' 
        ? 'linear-gradient(to right, #f59e0b, #ef4444)' 
        : 'linear-gradient(to right, #ef4444, #a855f7)',
    };
    // Scroll dinonaktifkan jika muat semua, tapi tetap dijaga untuk antisipasi layar sangat kecil
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
      <div v-for="dust in dusts" :key="'dust-'+dust.id" class="absolute rounded-full blur-[1px] animate-float opacity-20" :class="isDark ? 'bg-indigo-400' : 'bg-blue-300'" :style="{ width: dust.size, height: dust.size, top: dust.top, left: dust.left, animationDuration: dust.duration, animationDelay: dust.delay }"></div>
      <div v-for="star in stars" :key="'star-'+star.id" class="absolute animate-twinkle star-flare shadow-glow" :class="isDark ? 'bg-white' : 'bg-indigo-600'" :style="{ width: star.size, height: star.size, top: star.top, left: star.left, animationDelay: star.delay }"></div>
    </div>

    <nav class="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-5xl">
      <div :class="['backdrop-blur-3xl border flex items-center justify-between rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3',
           isDark ? 'bg-black/50 border-white/10 shadow-indigo-500/10' : 'bg-white/80 border-white/50 shadow-blue-500/5']">
        
        <div @click="goHome" class="flex items-center cursor-pointer group select-none z-10 pl-2 pr-1 active:scale-95 transition-transform flex-shrink-0">
          <div :class="['w-8 h-8 md:w-11 md:h-11 overflow-hidden rounded-full border-2 transition-all duration-300 shadow-lg shrink-0', isDark ? 'border-white/20' : 'border-slate-300']">
            <img src="/images/logo.png" alt="Logo" class="w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]" />
          </div>
          <div class="hidden sm:flex flex-col ml-2 leading-tight overflow-hidden">
            <span class="font-black italic text-xs md:text-base uppercase tracking-widest truncate">
              <span :class="isDark ? 'text-white' : 'text-black'">TIMI</span> 
              <span class="ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">DB</span>
            </span>
            <span class="text-[6px] md:text-[7px] font-bold uppercase opacity-50 tracking-widest truncate">Toram Online Tools</span>
          </div>
        </div>

        <div class="flex-1 flex justify-center px-1 overflow-hidden">
          <div class="relative flex bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner overflow-hidden w-fit">
            <div ref="navContainer" class="flex items-center relative gap-0">
              <div class="absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0" :style="indicatorStyle"></div>
              
              <router-link :ref="el => setItemRef(el, '/')" to="/" class="nav-link" active-class="active-link">LIST BAG</router-link>
              <router-link :ref="el => setItemRef(el, '/mq')" to="/mq" class="nav-link" active-class="active-link">LIST MQ</router-link>
              <router-link :ref="el => setItemRef(el, '/mq-calc')" to="/mq-calc" class="nav-link" active-class="active-link">MQ-CALC</router-link>
              <router-link :ref="el => setItemRef(el, '/bs-calc')" to="/bs-calc" class="nav-link" active-class="active-link">BS-CALC</router-link>
              <router-link :ref="el => setItemRef(el, '/xtall')" to="/xtall" class="nav-link" active-class="active-link">XTALL</router-link>
            </div>
          </div>
        </div>

        <div class="flex justify-end z-10 pr-2 flex-shrink-0">
          <button @click="$emit('toggleDark')" 
                  class="w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0"
                  :class="isDark ? 'bg-slate-900 border-white/10 text-orange-400' : 'bg-white border-slate-200 text-indigo-600'">
            <span class="text-xs md:text-lg">{{ isDark ? '🌙' : '☀️' }}</span>
          </button>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in">
      <slot />
    </main>
  </div>
</template>

<style scoped>
@reference "../assets/main.css";

.nav-link { 
  /* py tetap tebal (3/4), px diperkecil (1.5/4) agar muat satu baris */
  @apply px-1.5 md:px-4 py-3 md:py-4 rounded-full text-[7.5px] md:text-[11px] font-black uppercase tracking-tighter md:tracking-widest transition-all duration-300
         text-slate-500 dark:text-slate-400 relative z-10 whitespace-nowrap flex-shrink-0; 
}

/* Khusus layar sangat kecil (iPhone 5/SE), font dikecilkan lagi sedikit */
@media (max-width: 380px) {
  .nav-link {
    @apply px-1 text-[7px];
  }
}

.active-link { @apply !text-white; }

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.shadow-glow { filter: drop-shadow(0 0 8px currentColor); }
.star-flare { clip-path: polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%); }

@keyframes float { 0%, 100% { transform: translate(0, 0); opacity: 0.1; } 50% { transform: translate(20px, -20px); opacity: 0.3; } }
.animate-float { animation: float linear infinite; }
@keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
.animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
@keyframes page-in { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
.animate-page-in { animation: page-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

.bg-mesh-dark {
  background-color: #020617;
  background-image: radial-gradient(at 0% 0%, #1e1b4b 0, transparent 50%), radial-gradient(at 100% 0%, #450a0a 0, transparent 50%), radial-gradient(at 100% 100%, #3b0764 0, transparent 50%);
}
.bg-mesh-light {
  background-color: #ffffff;
  background-image: radial-gradient(at 0% 0%, #e0f2fe 0, transparent 50%), radial-gradient(at 100% 0%, #fee2e2 0, transparent 50%), radial-gradient(at 100% 100%, #f3e8ff 0, transparent 50%);
}
</style>