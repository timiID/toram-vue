<script setup>
import { useRouter } from 'vue-router';

import iconBag from '@/assets/iconfromhome/bag.png'
import iconMq from '@/assets/iconfromhome/mq.png'
import iconMqCalc from '@/assets/iconfromhome/mq_calc.png'
import iconBsCalc from '@/assets/iconfromhome/bs_calc.png'
import iconXtall from '@/assets/iconfromhome/xtall.png'
import iconEvent from '@/assets/iconfromhome/event.png'
import iconLeveling from '@/assets/iconfromhome/lvling.png'

const router = useRouter();

 const features = [
  { 
    name: 'BAG LIST', 
    path: '/bag-list', 
    icon: iconBag, // Gunakan variabel import
    desc: 'Manage your item storage efficiently.',
    color: 'from-blue-100 to-cyan-400'
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
  }
  ];

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
                <span :class="text-white">TIMI </span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span>
              </h1>
        
        <p class="max-w-xl text-sm md:text-lg opacity-70 font-medium leading-relaxed italic uppercase tracking-widest">
          "Your ultimate companion for Toram Online adventures."
        </p>
        <p class="max-w-xl text-sm md:text-sm opacity-70 font-lower leading-relaxed italic uppercase tracking-widest">
          "© 2026 TIMI DB • Toram Online Digital Database Project"
        </p>
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

   <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-7 w-full max-w-6xl animate-slide-up">
  <div v-for="item in features" :key="item.path"
       @click="navigateTo(item.path)"
       class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">
    
    <div :class="['absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br', item.color]"></div>
    
    <div class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
      <div class="mb-4 h-16 flex items-center justify-center">
        <img :src="item.icon" 
             :alt="item.name" 
             class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
      </div>

      <h3 class="text-xl font-black mb-2 tracking-tight">{{ item.name }}</h3>
      <p class="text-xs opacity-60 leading-loose">{{ item.desc }}</p>
      
      <div class="mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest text-indigo-400 group-hover:text-indigo-300 transition-colors uppercase">
        Open Tools
        <span class="group-hover:translate-x-1 transition-transform">→</span>
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl animate-slide-up">
  <div v-for="item in other" :key="item.path"
       @click="navigateTo(item.path)"
       class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">
    
    <div :class="['absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br', item.color]"></div>
    
    <div class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
      <div class="mb-4 h-16 flex items-center justify-center">
        <img :src="item.icon" 
             :alt="item.name" 
             class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
      </div>

      <h3 class="text-xl font-black mb-2 tracking-tight">{{ item.name }}</h3>
      <p class="text-xs opacity-60 leading-loose">{{ item.desc }}</p>
      
      <div class="mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest text-indigo-400 group-hover:text-indigo-300 transition-colors uppercase">
        Open Tools
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  </div>
</div>

    <footer class="mt-32 w-full transition-colors duration-500"
      :class="isDark ? 'bg-slate-900/80 text-slate-400' : 'bg-black text-slate-400'">
      
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div class="md:col-span-2 space-y-6">
            <div class="flex items-center gap-3">
              <img src="/images/logo.png" class="w-10 h-10 grayscale brightness-200" alt="Logo" />
              <span class="text-2xl font-black italic tracking-tighter text-white">TIMI <span class="text-indigo-500">DB</span></span>
            </div>
            <p class="text-xs leading-loose max-w-sm font-medium opacity-70">
              The most advanced digital archival project for Toram Online. 
              Built for adventurers, by adventurers. Level up your journey with our precision tools.
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
            </ul>
          </div>

          <div class="space-y-4">
            <h4 class="text-white font-black text-xs uppercase tracking-[0.2em]">Project</h4>
            <ul class="space-y-2 text-[11px] font-bold uppercase tracking-wider">
              <li><a href="#" class="hover:text-indigo-400 transition-colors">About Timi DB</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Contribution</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
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