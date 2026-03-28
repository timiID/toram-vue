<script setup>
import { useRouter } from 'vue-router';

import normalCrystas from "@/assets/icons/crysta_normal.jpg";
import weaponCrystas from "@/assets/icons/crysta_senjata.jpg";
import armorCrystas from "@/assets/icons/crysta_zirah.jpg";
import additionalCrystas from "@/assets/icons/crysta_pelengkap.jpg";
import specialCrystas from "@/assets/icons/crysta_tambahan.jpg";
import favoriteCrystaIcon from "@/assets/icons/crysta_favorite.png";

import iconBag from '@/assets/iconfromhome/bag.png'
import iconMq from '@/assets/iconfromhome/mq.png'
import iconMqCalc from '@/assets/iconfromhome/mq_calc.png'
import iconBsCalc from '@/assets/iconfromhome/bs_calc.png'
import iconXtall from '@/assets/iconfromhome/xtall.png'
import iconEvent from '@/assets/iconfromhome/event.png'
import iconLeveling from '@/assets/iconfromhome/lvling.png'
import iconFavorite from '@/assets/iconfromhome/favorite.png'

import { ref, onMounted } from 'vue';
import { crystalData } from '../data/store.js'; // Pastikan path store lo bener

const favoriteXtalls = ref([]);

onMounted(() => {
  const favIds = JSON.parse(localStorage.getItem('xtall_favs') || '[]');
  // Ambil data crystal yang ID-nya ada di favorit, limit 5 aja biar gak kepenuhan
  favoriteXtalls.value = crystalData.filter(c => favIds.includes(String(c.code))).slice(0, 5);
});

// --- TAMBAHKAN PROPS ISDARK ---
const props = defineProps({
  isDark: Boolean
});

// --- TAMBAHKAN FUNGSI INI ---
const getIconPath = (type) => {
  if (type && type.includes('Upgrade')) return favoriteCrystaIcon;
  const icons = {
    'Normal': normalCrystas,
    'Senjata': weaponCrystas,
    'Zirah': armorCrystas,
    'Pelengkap': additionalCrystas,
    'Tambahan': specialCrystas
  };
  return icons[type] || favoriteCrystaIcon;
};

const router = useRouter();

 const features = [
  { 
    name: 'BAG LIST', 
    path: '/bag-list', 
    icon: iconBag, // Gunakan variabel import
    desc: 'Manage your item storage efficiently.',
    color: 'from-blue-600 to-cyan-800'
  },
  { 
    name: 'LIST MQ', 
    path: '/mq-list', 
    icon: iconMq, 
    desc: 'Complete list of Toram Online Main Quests.',
    color: 'from-purple-500 to-indigo-500'
  },
  { 
    name: 'MQ CALC', 
    path: '/mq-calc', 
    icon: iconMqCalc, 
    desc: 'Calculate the EXP you need to level up.',
    color: 'from-pink-500 to-rose-500'
  },
  { 
    name: 'BS CALC', 
    path: '/bs-calc', 
    icon: iconBsCalc, 
    desc: 'Blacksmith simulator for perfect crafting.',
    color: 'from-orange-500 to-red-500'
  },
  { 
    name: 'XTALL', 
    path: '/xtall', 
    icon: iconXtall, 
    desc: 'Find the best crystals for your equipment.',
    color: 'from-emerald-500 to-teal-500'
  }
];

const other = [
  { 
    name: 'EVENT GUIDE', 
    path: '/event', 
    icon: iconEvent, 
    desc: 'Annual events & calendar overview.',
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    name: 'LEVELING GUIDE', 
    path: '/lvling', 
    icon: iconLeveling, 
    desc: 'Fast leveling strategies, best EXP spots, and efficient progression tips.',
    color: 'from-purple-500 to-indigo-500'
  },
  { 
    name: 'Favorite Xtall', 
    path: '/favorite', 
    icon: iconFavorite, 
    desc: 'Favorite xtall from xtall page.',
    color: 'from-red-500 to-orange-500'
  }
  ];

onMounted(() => {
  const favIds = JSON.parse(localStorage.getItem('xtall_favs') || '[]');
  // Ambil maksimal 5 saja untuk di Home
  favoriteXtalls.value = crystalData.filter(c => favIds.includes(String(c.code))).slice(0, 5);
});

const navigateTo = (path) => router.push(path);
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <div class="relative mb-12 animate-fade-in">
      <div class="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
      <div class="relative z-10 flex flex-col items-center">
        <img src="/images/logo.png" alt="Timi DB Logo" 
             class="w-32 h-32 md:w-48 md:h-48 object-cover drop-shadow-[0_0_30px_rgba(99,102,241,0.5)] animate-float-slow mb-6" />
        
        <h1 class="text-4xl md:text-6xl font-[800] italic uppercase tracking-tighter leading-none transition-all">
  <span :class="isDark ? 'text-white' : 'text-slate-900'">TIMI </span>
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span>
</h1>
        
        <p class="max-w-xl text-sm md:text-lg opacity-70 font-medium leading-relaxed italic uppercase tracking-widest">
          "Your ultimate companion for Toram Online adventures."
        </p>
        <p class="max-w-xl text-sm md:text-sm opacity-70 font-lower leading-relaxed italic uppercase tracking-widest">
  © 2026 
  <a href="https://timiid.github.io/toram-vue/#/" 
     target="_blank" 
     class="font-black text-blue-500 hover:text-cyan-400 underline decoration-blue-500/30 hover:decoration-cyan-400 transition-all">
    TIMI DB
  </a> 
  • Toram Online Digital Database Project
</p>
        <div class="space-y-1 mt-11">
  <div class="flex flex-col items-center text-center space-y-6 mt-2 pb-10">
  
  <!-- Section: Contribution -->
  <div class="space-y-1">
    <p class="text-[14px] font-black uppercase tracking-[0.3em] 
          text-transparent bg-clip-text bg-gradient-to-b
          from-amber-400 to-orange-600 to-red-800
          dark:from-yellow-100 dark:to-amber-300 dark:to-orange-400">
  Contribution
</p>
    <a href="https://www.facebook.com/J7Timi" 
       target="_blank" 
       class="block font-black italic uppercase transition-all duration-300
              text-blue-600 dark:text-blue-400 
              hover:text-cyan-500 dark:hover:text-cyan-300
              underline decoration-blue-600/30 dark:decoration-blue-400/30">
      TIMI
    </a>
  </div>

  <!-- Section: Reference -->
  <div class="space-y-1">
    <p class="text-[14px] font-black uppercase tracking-[0.3em] 
          text-transparent bg-clip-text bg-gradient-to-b
          from-amber-400 to-orange-600 to-red-800
          dark:from-yellow-100 dark:to-amber-300 dark:to-orange-400">
  Reference
</p>
    <div class="flex flex-col items-center">
      <a href="https://en.toram.jp/information/?type_code=update" 
         target="_blank" 
         class="font-black italic uppercase transition-all duration-300
                text-blue-600 dark:text-blue-400 
                hover:text-cyan-500 dark:hover:text-cyan-300
                underline decoration-blue-600/30 dark:decoration-blue-400/30">
        Toram Online Official Website
      </a>
      <p class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 dark:opacity-50 mt-1">
        and Other Database Websites
      </p>
    </div>
  </div>

</div>
</div>
      </div>
    </div>

    <div v-if="favoriteXtalls && favoriteXtalls.length > 0" class="w-full max-w-6xl mb-12 animate-slide-up">
  
  <div class="flex items-center justify-between mb-8 px-2">
    <div class="flex items-center gap-4">
      <h2 class="font-black italic text-xl tracking-tighter uppercase text-rose-500">
        Your Favorites
      </h2>
      <div class="h-[2px] w-24 bg-gradient-to-r from-rose-500 to-transparent opacity-30"></div>
    </div>

    <button @click="navigateTo('/favorite')" 
            :class="[
              'group flex items-center gap-2 px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-lg active:scale-95',
              isDark 
                ? 'bg-rose-600 border-b-4 border-rose-800 text-white hover:bg-rose-500 hover:-translate-y-0.5' 
                : 'bg-rose-500 border-b-4 border-rose-700 text-white hover:bg-rose-400 hover:-translate-y-0.5'
            ]">
      <span>View All</span>
      <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
    <div v-for="fav in favoriteXtalls" :key="fav.code"
         @click="navigateTo(`/xtall/${fav.code}`)"
         class="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img :src="getIconPath(fav.type)" class="w-7 h-7 object-contain drop-shadow-md" />
        </div>
        <div class="text-left overflow-hidden">
          <h4 class="text-[11px] font-black uppercase tracking-tight truncate">{{ fav.name }}</h4>
          <p class="text-[8px] opacity-40 font-bold uppercase tracking-widest">{{ fav.type }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
    <div class="w-full max-w-6xl flex items-center gap-6 my-16 opacity-50">
      <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-purple-500"></div>
      <h2 class="font-black italic text-2xl tracking-tighter uppercase shrink-0">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
          MAIN GUIDES
        </span>
      </h2>
      <div class="h-[1px] flex-1 bg-gradient-to-r from-purple-500 via-red-500 to-transparent"></div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 w-full max-w-6xl animate-slide-up">
      <div v-for="item in features" :key="item.path"
           @click="navigateTo(item.path)"
           class="group relative overflow-hidden rounded-[2rem] border border-black/80 bg-white/25 backdrop-blur-xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">
        <div :class="['absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br', item.color]"></div>
        <div class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div class="mb-4 h-16 flex items-center justify-center">
            <img :src="item.icon" :alt="item.name" class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
          </div>
          <h3 class="text-xl font-black mb-2 tracking-tight">{{ item.name }}</h3>
          <p class="text-xs opacity-60 leading-loose">{{ item.desc }}</p>
          <div class="mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest text-purple-400 group-hover:text-indigo-300 transition-colors uppercase">
            Open Tools <span class="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full max-w-6xl flex items-center gap-6 my-16 opacity-50">
      <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-black-500 to-purple-500"></div>
      <h2 class="font-black italic text-2xl tracking-tighter uppercase shrink-0">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
          OTHER GUIDES
        </span>
      </h2>
      <div class="h-[1px] flex-1 bg-gradient-to-r from-purple-500 via-red-500 to-transparent"></div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 w-full max-w-6xl animate-slide-up">
      <div v-for="item in other" :key="item.path"
           @click="navigateTo(item.path)"
           class="group relative overflow-hidden rounded-[2rem] border border-black/50 bg-white/15 backdrop-blur-xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">
        <div :class="['absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br', item.color]"></div>
        <div class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div class="mb-4 h-16 flex items-center justify-center">
            <img :src="item.icon" :alt="item.name" class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
          </div>
          <h3 class="text-xl font-black mb-2 tracking-tight">{{ item.name }}</h3>
          <p class="text-xs opacity-60 leading-loose">{{ item.desc }}</p>
          <div class="mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest text-orange-400 group-hover:text-red-600 transition-colors uppercase">
            Open Tools <span class="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </div>

    <footer class="mt-32 w-full transition-colors duration-500" :class="isDark ? 'bg-slate-900/80 text-slate-400' : 'bg-black text-slate-400'">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div class="md:col-span-2 space-y-6">
            <div class="flex items-center gap-3">
              <img src="/images/logo.png" class="w-10 h-10 grayscale brightness-200" alt="Logo" />
              <span class="text-2xl font-black italic tracking-tighter text-white">TIMI <span class="text-indigo-500">DB</span></span>
            </div>
            <p class="text-xs leading-loose max-w-sm font-medium opacity-70">
              The most advanced digital database project for Toram Online. Built for adventurers, by adventurers.
            </p>
          </div>
          <div class="space-y-4">
            <h4 class="text-white font-black text-xs uppercase tracking-[0.2em]">Resources</h4>
            <ul class="space-y-2 text-[11px] font-bold uppercase tracking-wider">
              <li><a href="#/mq-list" class="hover:text-indigo-400 transition-colors">Main Quest List</a></li>
              <li><a href="#/bag-list" class="hover:text-indigo-400 transition-colors">Bag Expansion List</a></li>
              <li><a href="#/mq-calc" class="hover:text-indigo-400 transition-colors">Main Quest Calculator</a></li>
              <li><a href="#/bs-calc" class="hover:text-indigo-400 transition-colors">Blacksmith Calculator</a></li>
              <li><a href="#/xtall" class="hover:text-indigo-400 transition-colors">Xtall Database (Indonesia)</a></li>
              <li><a href="#/event" class="hover:text-indigo-400 transition-colors">Event Guide</a></li>  
              <li><a href="#/lvling" class="hover:text-indigo-400 transition-colors">Leveling Guide</a></li>                    
              <li><a href="#/favorite" class="hover:text-indigo-400 transition-colors">Favorite Xtall</a></li>                    
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-white font-black text-xs uppercase tracking-[0.2em]">Project</h4>
            <ul class="space-y-2 text-[11px] font-bold uppercase tracking-wider">
              <li><a href="#" class="hover:text-indigo-400 transition-colors">About Timi DB</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Contribution</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Reference</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-[9px] font-black tracking-[0.3em] uppercase opacity-50">
            © 2026 TIMI DB • Toram Online Digital Database Project
          </p>
          <div class="flex gap-6 opacity-50">
            <span class="text-[10px] font-black italic">STAY VIGILANT</span>
            <span class="text-[10px] font-black italic">KEEP GRINDING</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-float-slow {
  animation: floatSlow 6s ease-in-out infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>