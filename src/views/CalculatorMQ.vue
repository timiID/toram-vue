<script setup>
import { ref, computed } from 'vue';
import { LV_CAP, mq_data, quest_data, getTotalXP, addXP } from '../data/toramData';

defineProps({
  isDark: Boolean
});

// TABS STATE
const activeTab = ref('mq'); 

// STATE INPUT
const currentLv = ref(1);
const currentP = ref(0);
const targetLv = ref(LV_CAP);
const skipVenena = ref(true);
const useDiary = ref(false);

// MQ DATA LOGIC
const mqKeys = Object.keys(mq_data);
const mqFromIdx = ref(1); 
const mqUntilIdx = ref(mqKeys.length - 1);

// NPC QUEST STATE
const selectedSQ = ref(Object.keys(quest_data)[1]); 
const sqAmount = ref(1);

// FORMAT OPSI MQ
const mqOptions = computed(() => {
  let options = [];
  let chapter = 0;
  mqKeys.forEach((key, index) => {
    if (key.startsWith('Chapter')) {
      chapter++;
    } else if (mq_data[key] !== "") {
      options.push({ id: index, label: `CH${chapter} - ${key}` });
    }
  });
  return options;
});

// LOGIKA KALKULASI UTAMA
const calculation = computed(() => {
  const lv = Number(currentLv.value) || 1;
  const p = Number(currentP.value) || 0;
  const target = Number(targetLv.value) || LV_CAP;

  const xpNeeded = getTotalXP(lv, p, target);

  let totalMqXP = 0;
  for (let i = mqFromIdx.value; i <= mqUntilIdx.value; i++) {
    const val = mq_data[mqKeys[i]];
    if (typeof val === 'number') {
      totalMqXP += val;
    }
    if (mqKeys[i].includes("Coenubia") && !skipVenena.value) {
      totalMqXP += 12500000;
    }
  }

  const [resLv, resP] = addXP(lv, p, totalMqXP);

  // LOGIKA DIARY
  let diaryRuns = [];
  if (useDiary.value && totalMqXP > 0) {
    let loopLv = lv;
    let loopP = p;
    for (let i = 1; i <= 20; i++) {
      const [nextLv, nextP] = addXP(loopLv, loopP, totalMqXP);
      diaryRuns.push({ run: i, lv: nextLv, p: nextP });
      loopLv = nextLv;
      loopP = nextP;
      if (loopLv >= target) break;
    }
  }

  const sqXP = (quest_data[selectedSQ.value] || 0) * (sqAmount.value || 0);
  const [sqLv, sqPercent] = addXP(lv, p, sqXP);

  return { xpNeeded, totalMqXP, resLv, resP, diaryRuns, sqLv, sqPercent, sqXP };
});
</script>

<template>
  <div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4">
    
    <div class="flex flex-col items-center gap-6 animate-bounce-slow">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl">
          MQ Calculator 
        </h1>
        <p class="text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse">Timi DB System</p>
      </div>

      <div :class="['p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl', 
                    isDark ? 'bg-white/5 border-white/10' : 'bg-slate-200/50 border-slate-300']">
        <button @click="activeTab = 'mq'" :class="['tab-btn', activeTab === 'mq' ? 'tab-active' : '']">Main Quest</button>
        <button @click="activeTab = 'npc'" :class="['tab-btn', activeTab === 'npc' ? 'tab-active' : '']">NPC Quest</button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 space-y-6">
        <div :class="['p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500', 
                      isDark ? 'bg-slate-900/40 border-white/10' : 'bg-white/60 border-white/40']">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="group">
              <label class="label-text">Current Lv</label>
              <input v-model.number="currentLv" type="number" class="input-style" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
            <div class="group">
              <label class="label-text">Percent %</label>
              <input v-model.number="currentP" type="number" class="input-style" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
            <div class="group">
              <label class="label-text text-pink-500">Target Lv</label>
              <input v-model.number="targetLv" type="number" class="input-style" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
          </div>

          <div v-if="activeTab === 'mq'" class="space-y-8 animate-in slide-in-from-top-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div class="relative group select-container">
                <label class="label-text text-indigo-400">Start From</label>
                <div class="relative">
                  <select v-model="mqFromIdx" class="input-style custom-select pr-10" :class="isDark ? 'dark-input' : 'light-input'">
                    <option v-for="opt in mqOptions" :key="opt.id" :value="opt.id" class="dropdown-item">{{ opt.label }}</option>
                  </select>
                  <div class="select-arrow text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative group select-container">
                <label class="label-text text-indigo-400">End At</label>
                <div class="relative">
                  <select v-model="mqUntilIdx" class="input-style custom-select pr-10" :class="isDark ? 'dark-input' : 'light-input'">
                    <option v-for="opt in mqOptions" :key="opt.id" :value="opt.id" class="dropdown-item">{{ opt.label }}</option>
                  </select>
                  <div class="select-arrow text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-8 ml-2">
              <label class="flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform">
                <input type="checkbox" v-model="skipVenena" class="w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer">
                <span class="text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">Skip Pre-Venena</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform">
                <input type="checkbox" v-model="useDiary" class="w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer">
                <span class="text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">Spam Diaries</span>
              </label>
            </div>
          </div>

          <div v-else class="space-y-8 animate-in slide-in-from-top-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div class="relative group select-container">
                <label class="label-text text-emerald-400">Select Quest</label>
                <div class="relative">
                  <select v-model="selectedSQ" class="input-style custom-select pr-10" :class="isDark ? 'dark-input' : 'light-input'">
                    <option v-for="(val, key) in quest_data" :key="key" :value="key" class="dropdown-item">{{ key }}</option>
                  </select>
                  <div class="select-arrow text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label class="label-text text-emerald-400">Amount (Stack/Times)</label>
                <input v-model.number="sqAmount" type="number" class="input-style" :class="isDark ? 'dark-input' : 'light-input'" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="space-y-6 sticky top-8">
          <div :class="[
            'p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive',
            activeTab === 'mq' ? 'bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30' : 'bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30'
          ]">
            <div class="relative z-10 space-y-8">
              <div class="result-item">
                <p class="text-[10px] font-black tracking-widest opacity-60 uppercase mb-1">XP Required to Target</p>
                <h3 class="text-2xl font-black tabular-nums tracking-tighter">{{ calculation.xpNeeded.toLocaleString() }}</h3>
              </div>
              
              <div class="pt-8 border-t border-white/20 result-item">
                <p class="text-[10px] font-black tracking-widest opacity-60 uppercase mb-2">
                  {{ activeTab === 'mq' ? 'Result After 1 Run' : 'Result After Turn-in' }}
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-6xl font-black italic tracking-tighter drop-shadow-lg block">
                    Lv {{ activeTab === 'mq' ? calculation.resLv : calculation.sqLv }}
                  </span>
                  <span class="text-xl font-bold opacity-70">
                    {{ activeTab === 'mq' ? calculation.resP : calculation.sqPercent }}%
                  </span>
                </div>
              </div>

              <div class="bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item">
                <p class="text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1">Total XP Gained</p>
                <p class="text-sm font-black tabular-nums tracking-wide">
                  {{ (activeTab === 'mq' ? calculation.totalMqXP : calculation.sqXP).toLocaleString() }} XP
                </p>
              </div>
            </div>
            
            <div class="absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text">
              {{ activeTab }}
            </div>
          </div>

          <div v-if="activeTab === 'mq' && useDiary && calculation.diaryRuns.length > 0" 
               class="p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4"
               :class="isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-lg'">
            <p class="text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2">Diary Projection</p>
            <div class="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll">
              <div v-for="run in calculation.diaryRuns" :key="run.run" 
                   class="flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors">
                <span class="text-[11px] font-black opacity-40">RUN #{{ run.run }}</span>
                <div class="text-right">
                  <span class="font-black" :class="isDark ? 'text-white' : 'text-slate-800'">Lv {{ run.lv }}</span>
                  <span class="text-[10px] font-bold opacity-50 ml-1">{{ run.p }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

/* --- ANIMASI BOUNCE SLOW --- */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow { 
  animation: bounce-slow 4s ease-in-out infinite; 
}

/* --- INTERACTIVE RESULT CARD --- */
.result-card-interactive { cursor: pointer; }
.result-card-interactive:hover {
  transform: scale(1.02) translateY(-2px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.result-card-interactive:active { transform: scale(0.98); }
.result-card-interactive:hover .result-item {
  transform: translateX(8px);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.result-card-interactive:hover .deco-text { transform: scale(1.1) rotate(-8deg); }

/* --- DROPDOWN STABILITY & VECTOR --- */
.select-container { isolation: isolate; position: relative; z-index: 50; }
.custom-select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  z-index: 10;
}
.select-arrow {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 20;
  transition: transform 0.3s ease;
}
.select-container:hover .select-arrow { transform: translateY(-50%) scale(1.2); }

/* --- UI COMPONENTS --- */
.tab-btn {
  @apply px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer text-slate-500 hover:text-indigo-500 active:scale-95;
}
.tab-active {
  @apply bg-indigo-600 !text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.5)];
}
.label-text { @apply text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block; }
.input-style { @apply w-full p-4 rounded-2xl outline-none font-bold transition-all border shadow-sm; }
.dark-input { @apply bg-slate-950/50 border-white/5 text-white focus:border-indigo-600; }
.light-input { @apply bg-white border-slate-200 text-slate-900 focus:border-indigo-400; }

.custom-scroll::-webkit-scrollbar { width: 4px; }
.custom-scroll::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.3); border-radius: 10px; }

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
input[type=number] { -moz-appearance: textfield; }
</style>