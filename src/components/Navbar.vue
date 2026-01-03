<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-3xl">
    <div :class="[
      'backdrop-blur-2xl border rounded-full px-3 md:px-6 py-2 flex justify-between items-center shadow-2xl transition-all duration-700', 
      isDark ? 'bg-slate-900/70 border-white/10 shadow-indigo-500/20' : 'bg-white/80 border-slate-200 shadow-blue-500/10'
    ]">
      
      <router-link to="/" class="flex items-center shrink-0 group mr-2">
        <div class="w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-full border-2 border-indigo-500 transition-transform duration-500 group-hover:scale-110">
          <img src="/images/logo.png" alt="Logo" class="w-full h-full object-cover" />
        </div>
      </router-link>

      <div class="relative flex-1 flex bg-slate-800/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/10 items-center overflow-hidden">
        
        <div class="flex items-center overflow-x-auto no-scrollbar scroll-smooth w-full relative">
          
          <div 
            class="absolute h-[calc(100%-4px)] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rounded-full z-0"
            :style="indicatorStyle"
          ></div>

          <router-link 
            v-for="menu in menuItems" 
            :key="menu.path"
            :to="menu.path" 
            :ref="el => setItemRef(el, menu.path)"
            class="nav-btn-v2"
            active-class="active-text"
          >
            {{ menu.name }}
          </router-link>
        </div>
      </div>

      <button 
        @click="$emit('toggleDark')" 
        class="w-9 h-9 md:w-10 md:h-10 ml-2 rounded-full flex items-center justify-center border shadow-lg active:scale-75 transition-all duration-500 shrink-0 overflow-hidden"
        :class="isDark ? 'bg-slate-800 border-white/10 text-yellow-400' : 'bg-white border-slate-200 text-indigo-600'"
      >
        <Transition name="sun-moon" mode="out-in">
          <span :key="isDark" class="text-sm md:text-base">{{ isDark ? '☀️' : '🌙' }}</span>
        </Transition>
      </button>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({ isDark: Boolean });
defineEmits(['toggleDark']);

const route = useRoute();
const itemRefs = ref({});
const indicatorStyle = ref({ left: '0px', width: '0px', background: 'transparent' });

const menuItems = [
  { name: 'HOME', path: '/', color: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' },
  { name: 'MQ', path: '/mq', color: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' },
  { name: 'CALC', path: '/mq-calc', color: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' },
  { name: 'BS', path: '/bs-calc', color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' },
];

const setItemRef = (el, path) => {
  if (el) itemRefs.value[path] = el.$el || el;
};

const updateIndicator = async () => {
  await nextTick(); // Tunggu DOM selesai render
  const activeItem = itemRefs.value[route.path];
  if (activeItem) {
    const menuData = menuItems.find(m => m.path === route.path);
    indicatorStyle.value = {
      left: `${activeItem.offsetLeft}px`,
      width: `${activeItem.offsetWidth}px`,
      background: menuData ? menuData.color : 'transparent',
      boxShadow: `0 4px 15px ${route.path === '/bs-calc' ? 'rgba(245,158,11,0.4)' : 'rgba(79,70,229,0.4)'}`
    };
    
    // Auto-scroll ke menu yang aktif di HP
    activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
};

onMounted(() => {
  setTimeout(updateIndicator, 300);
  window.addEventListener('resize', updateIndicator);
});

watch(() => route.path, updateIndicator);
</script>

<style scoped>
/* Tombol Navigasi */
.nav-btn-v2 {
  @apply px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest 
         transition-all duration-300 whitespace-nowrap z-10 relative flex-shrink-0;
  @apply text-slate-500 dark:text-slate-400;
}

/* Warna teks saat aktif */
.active-text {
  @apply text-white !important;
}

/* Sembunyikan Scrollbar tapi tetap bisa di-scroll */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animasi Ikon */
.sun-moon-enter-active, .sun-moon-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.sun-moon-enter-from { transform: translateY(20px) scale(0); opacity: 0; }
.sun-moon-leave-to { transform: translateY(-20px) scale(0); opacity: 0; }
</style>