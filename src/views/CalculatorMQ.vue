<script setup>
import { ref, computed } from 'vue';
import { LV_CAP, mq_data, quest_data, getTotalXP, addXP } from '../data/toramData';

defineProps({
  isDark: Boolean
});

// --- TABS STATE ---
const activeTab = ref('mq'); 

// --- INPUT STATE ---
const currentLv = ref(1);
const currentP = ref(0);
const targetLv = ref(LV_CAP);
const skipVenena = ref(true);
const useDiary = ref(false);

// --- MQ DATA LOGIC ---
const mqKeys = Object.keys(mq_data);
const mqFromIdx = ref(1); 
const mqUntilIdx = ref(mqKeys.length - 1);

// --- NPC QUEST STATE ---
const selectedSQ = ref(Object.keys(quest_data)[1]); 
const sqAmount = ref(1);

// --- CUSTOM DROPDOWN STATE ---
const isStartOpen = ref(false);
const isEndOpen = ref(false);
const isSQOpen = ref(false);

const closeAllDropdowns = () => {
  isStartOpen.value = false;
  isEndOpen.value = false;
  isSQOpen.value = false;
};

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

// VALIDASI RANGE MQ
const isRangeInvalid = computed(() => {
  return activeTab.value === 'mq' && mqFromIdx.value > mqUntilIdx.value;
});

// LOGIKA KALKULASI UTAMA (TIDAK DIUBAH)
const calculation = computed(() => {
  const lv = Number(currentLv.value) || 1;
  const p = Number(currentP.value) || 0;
  const target = Number(targetLv.value) || LV_CAP;

  if (isRangeInvalid.value) return null;

  const xpNeeded = getTotalXP(lv, p, target);
  let totalMqXP = 0;
  
  const start = mqFromIdx.value;
  const end = mqUntilIdx.value;

  for (let i = start; i <= end; i++) {
    const key = mqKeys[i];
    const val = mq_data[key];
    if (typeof val === 'number') {
      totalMqXP += val;
    }
    if (key === "The Battle to Recapture Eldenbaum" && !skipVenena.value) {
      totalMqXP += 12500000;
    }
  }

  const [resLv, resP] = addXP(lv, p, totalMqXP);

  let diaryRuns = [];
  if (useDiary.value && totalMqXP > 0) {
    let loopLv = lv;
    let loopP = p;
    for (let i = 1; i <= 100; i++) {
      const [nextLv, nextP] = addXP(loopLv, loopP, totalMqXP);
      diaryRuns.push({ run: i, lv: nextLv, p: nextP });
      loopLv = nextLv;
      loopP = nextP;
      if (loopLv >= target) break;
    }
  }

  const sqXP = (quest_data[selectedSQ.value] || 0) * (sqAmount.value || 0);
  const [sqLv, sqPercent] = addXP(lv, p, sqXP);

  return { 
    xpNeeded, totalMqXP, resLv, resP, diaryRuns, sqLv, sqPercent, sqXP 
  };
});
</script>

<template>
  <div @click="closeAllDropdowns" class="space-y-10 animate-in fade-in zoom-in-95 duration-1000 max-w-6xl mx-auto pb-20 px-4">
    
    <div class="flex flex-col items-center gap-8 animate-bounce-slow pt-10">
      <div class="text-center relative">
        <div class="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-50"></div>
        <h1 class="relative text-6xl md:text-7xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          MQ Calculator 
        </h1>
        <p class="text-[11px] font-black opacity-60 tracking-[0.5em] uppercase mt-2">Timi DB System</p>
      </div>

      <div :class="['p-1.5 rounded-2xl flex gap-1 border backdrop-blur-2xl transition-all shadow-2xl', 
                    isDark ? 'bg-slate-900/60 border-white/10' : 'bg-slate-200/50 border-slate-300']">
        <button @click.stop="activeTab = 'mq'; closeAllDropdowns()" 
                :class="['tab-btn active:scale-90', activeTab === 'mq' ? 'tab-active' : '']">
          Main Quest
        </button>
        <button @click.stop="activeTab = 'npc'; closeAllDropdowns()" 
                :class="['tab-btn active:scale-90', activeTab === 'npc' ? 'tab-active' : '']">
          NPC Quest
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-24">
      
      <div class="lg:col-span-2 space-y-8">
        <div :class="['p-10 rounded-[3rem] border backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700', 
                      isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white/70 border-white']">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div class="group">
              <label class="label-text">Current Lv</label>
              <input v-model.number="currentLv" type="number" class="input-style active:scale-[0.98]" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
            <div class="group">
              <label class="label-text">Percent %</label>
              <input v-model.number="currentP" type="number" class="input-style active:scale-[0.98]" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
            <div class="group">
              <label class="label-text text-pink-500">Target Lv</label>
              <input v-model.number="targetLv" type="number" class="input-style active:scale-[0.98]" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
          </div>

          <div v-if="activeTab === 'mq'" class="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
              
              <div class="relative group select-container">
                <label class="label-text" :class="isRangeInvalid ? 'text-red-400 animate-pulse' : 'text-indigo-400'">✦ Start From</label>
                <div @click.stop="isStartOpen = !isStartOpen; isEndOpen = false" 
                     :class="['input-style flex items-center justify-between cursor-pointer active:scale-95', isDark ? 'dark-input' : 'light-input', isRangeInvalid ? '!border-red-500/50' : '']">
                  <span class="truncate font-black text-sm">{{ mqOptions.find(o => o.id === mqFromIdx)?.label }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4 transition-transform duration-500', isStartOpen ? 'rotate-180' : '']" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <Transition name="mega-menu">
                  <div v-if="isStartOpen" :class="['custom-list custom-scroll', isDark ? 'bg-slate-900 shadow-[0_20px_50px_rgba(79,70,229,0.3)]' : 'bg-white shadow-2xl']">
                    <div v-for="opt in mqOptions" :key="opt.id" @click="mqFromIdx = opt.id; isStartOpen = false"
                         :class="['list-item active:scale-95', mqFromIdx === opt.id ? 'active-item' : (isDark ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-50 text-slate-700')]">
                      {{ opt.label }}
                    </div>
                  </div>
                </Transition>
              </div>

              <div class="relative group select-container">
                <label class="label-text text-indigo-400">✦ End At</label>
                <div @click.stop="isEndOpen = !isEndOpen; isStartOpen = false" 
                     :class="['input-style flex items-center justify-between cursor-pointer active:scale-95', isDark ? 'dark-input' : 'light-input']">
                  <span class="truncate font-black text-sm">{{ mqOptions.find(o => o.id === mqUntilIdx)?.label }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4 transition-transform duration-500', isEndOpen ? 'rotate-180' : '']" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <Transition name="mega-menu">
                  <div v-if="isEndOpen" :class="['custom-list custom-scroll', isDark ? 'bg-slate-900 shadow-[0_20px_50px_rgba(79,70,229,0.3)]' : 'bg-white shadow-2xl']">
                    <div v-for="opt in mqOptions" :key="opt.id" @click="mqUntilIdx = opt.id; isEndOpen = false"
                         :class="['list-item active:scale-95', mqUntilIdx === opt.id ? 'active-item' : (isDark ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-50 text-slate-700')]">
                      {{ opt.label }}
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <div v-if="isRangeInvalid" class="p-5 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center gap-4 animate-pulse">
              <div class="p-2.5 rounded-2xl bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-[12px] font-black uppercase tracking-widest text-red-500">Selection Error: Chapter Start > Chapter End!</p>
            </div>

            <div v-else class="flex flex-wrap gap-10 ml-4">
              <label class="flex items-center gap-4 cursor-pointer group active:scale-90 transition-all">
                <div class="relative flex items-center justify-center">
                  <input type="checkbox" v-model="skipVenena" class="peer h-6 w-6 opacity-0 absolute">
                  <div class="h-6 w-6 border-2 border-indigo-500 rounded-lg transition-all peer-checked:bg-indigo-500 peer-checked:shadow-[0_0_15px_rgba(99,102,241,0.6)] flex items-center justify-center">
                    <svg v-if="skipVenena" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <span class="text-[12px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Skip Pre-Venena</span>
              </label>
              <label class="flex items-center gap-4 cursor-pointer group active:scale-90 transition-all">
                <div class="relative flex items-center justify-center">
                  <input type="checkbox" v-model="useDiary" class="peer h-6 w-6 opacity-0 absolute">
                  <div class="h-6 w-6 border-2 border-purple-500 rounded-lg transition-all peer-checked:bg-purple-500 peer-checked:shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center">
                    <svg v-if="useDiary" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <span class="text-[12px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Spam Diaries</span>
              </label>
            </div>
          </div>

          <div v-else class="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
              <div class="relative group select-container">
                <label class="label-text text-emerald-400">✦ Select Quest</label>
                <div @click.stop="isSQOpen = !isSQOpen" 
                     :class="['input-style flex items-center justify-between cursor-pointer active:scale-95', isDark ? 'dark-input' : 'light-input']">
                  <span class="truncate font-black text-sm">{{ selectedSQ }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4 transition-transform duration-500', isSQOpen ? 'rotate-180' : '']" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <Transition name="mega-menu">
                  <div v-if="isSQOpen" :class="['custom-list custom-scroll', isDark ? 'bg-slate-900 shadow-[0_20px_50px_rgba(16,185,129,0.3)]' : 'bg-white shadow-2xl']">
                    <div v-for="(val, key) in quest_data" :key="key" @click="selectedSQ = key; isSQOpen = false"
                         :class="['list-item active:scale-95', selectedSQ === key ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : (isDark ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-50 text-slate-700')]">
                      {{ key }}
                    </div>
                  </div>
                </Transition>
              </div>
              <div>
                <label class="label-text text-emerald-400">✦ Amount (Stack/Times)</label>
                <input v-model.number="sqAmount" type="number" class="input-style active:scale-[0.98]" :class="isDark ? 'dark-input' : 'light-input'" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1 space-y-8">
        <div class="space-y-8 sticky top-10">
          
          <div :class="[
            'p-10 rounded-[4rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-700 result-card-interactive active:scale-95',
            isRangeInvalid ? 'bg-gradient-to-br from-red-600 to-red-900 shadow-red-500/40' : 
            (activeTab === 'mq' ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-900 shadow-indigo-500/40' : 'bg-gradient-to-br from-emerald-600 to-teal-900 shadow-emerald-500/40')
          ]">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

            <div class="relative z-10 space-y-10">
              <div v-if="isRangeInvalid" class="h-full flex flex-col justify-center items-center py-16 text-center">
                <div class="text-6xl mb-6 animate-pulse">⚠️</div>
                <h2 class="text-2xl font-black uppercase tracking-tighter">System Error</h2>
                <p class="text-[12px] font-bold opacity-60 mt-2">CHAPTER RANGE INVALID</p>
              </div>

              <template v-else-if="calculation">
                <div class="result-item">
                  <p class="text-[11px] font-black tracking-widest opacity-50 uppercase mb-2">XP Required to Target</p>
                  <h3 class="text-3xl font-black tabular-nums tracking-tighter">{{ calculation.xpNeeded.toLocaleString() }}</h3>
                </div>
                
                <div class="pt-10 border-t border-white/20 result-item">
                  <p class="text-[11px] font-black tracking-widest opacity-50 uppercase mb-3">
                    {{ activeTab === 'mq' ? 'Result After 1 Run' : 'Post-Quest Projection' }}
                  </p>
                  <div class="flex flex-col gap-1">
                    <span class="text-7xl font-black italic tracking-tighter drop-shadow-2xl">
                      Lv {{ activeTab === 'mq' ? calculation.resLv : calculation.sqLv }}
                    </span>
                    <span class="text-2xl font-bold opacity-60 ml-2">
                      {{ activeTab === 'mq' ? calculation.resP : calculation.sqPercent }}% Experience
                    </span>
                  </div>
                </div>

                <div class="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md result-item">
                  <p class="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mb-1">Total Gain</p>
                  <p class="text-lg font-black tabular-nums tracking-wide text-indigo-200">
                    + {{ (activeTab === 'mq' ? calculation.totalMqXP : calculation.sqXP).toLocaleString() }} XP
                  </p>
                </div>
              </template>
            </div>
            
            <div class="absolute -right-10 -bottom-10 text-[14rem] font-black italic opacity-5 pointer-events-none uppercase tracking-tighter transition-all duration-1000 deco-text">
              {{ isRangeInvalid ? 'Err' : activeTab }}
            </div>
          </div>

          <div v-if="activeTab === 'mq' && useDiary && calculation && calculation.diaryRuns.length > 0" 
               class="p-10 rounded-[3.5rem] border backdrop-blur-3xl shadow-2xl transition-all duration-700 animate-in slide-in-from-right-10"
               :class="isDark ? 'bg-slate-900/40 border-white/5 shadow-black/50' : 'bg-white/80 border-slate-200 shadow-slate-200'">
            
            <div class="flex items-center justify-between mb-8">
              <div>
                <h4 class="text-[12px] font-black uppercase tracking-[0.3em] text-indigo-500">Diary Adventure</h4>
                <p class="text-[10px] opacity-40 font-bold uppercase mt-1">Simulated Progress</p>
              </div>
              <div class="px-6 py-4 rounded-[2rem] bg-gradient-to-br from-yellow-200 to-purple-700 shadow-x9 shadow-indigo-500/20 flex flex-col items-center justify-center border-t border-white/10 transition-all active:scale-95 cursor-default">
  <span class="text-[9px] font-black opacity-100 uppercase tracking-[0.2em] leading-none mb-1">Total Run</span>
  <span class="text-3xl font-black italic tracking-tighter leading-none text-white">
    {{ calculation?.diaryRuns?.length || 0 }}
  </span>
</div>
            </div>

            <div class="space-y-4 max-h-[350px] overflow-y-auto pr-7 custom-scroll">
              <div v-for="run in calculation.diaryRuns" :key="run.run" 
                   class="flex items-center justify-between p-5 rounded-3xl transition-all group hover:bg-indigo-500 hover:scale-[1.02] border border-transparent hover:border-white/20 active:scale-95">
                <div class="flex flex-col">
                  <span class="text-[10px] font-black opacity-30 group-hover:opacity-100 group-hover:text-indigo-100 transition-all uppercase">Run</span>
                  <span class="text-sm font-black italic group-hover:text-white transition-all">#{{ run.run.toString().padStart(2, '0') }}</span>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl font-black italic tracking-tighter group-hover:text-white" :class="isDark ? 'text-white' : 'text-slate-800'">Lv {{ run.lv }}</span>
                  <span class="text-[11px] font-bold opacity-40 group-hover:text-white/60 group-hover:opacity-100">{{ run.p }}%</span>
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
/* --- ANIMASI KEYFRAMES --- */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.01); }
}
.animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }

/* --- MEGA MENU TRANSITIONS --- */
.mega-menu-enter-active, .mega-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.mega-menu-enter-from, .mega-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
  filter: blur(15px);
}

/* --- THE REAL FIX: CUSTOM FLOATING LIST --- */
.select-container { 
  position: relative; 
  min-height: 65px; 
}

.custom-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 110%;
  z-index: 9999;
  padding: 0.8rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  max-height: 240px;
  overflow-y: auto;
}

.list-item {
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 800;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid transparent;
}

.active-item {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white !important;
  box-shadow: 0 15px 30px -10px rgba(99, 102, 241, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
}

/* --- UI COMPONENTS --- */
.input-style { 
  width: 100%;
  padding: 1.25rem 1.5rem;
  border-radius: 1.25rem;
  outline: none;
  font-weight: 900;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-width: 1.5px;
}

.dark-input { 
  background-color: rgba(2, 6, 23, 0.5); 
  border-color: rgba(255, 255, 255, 0.05); 
  color: white; 
}
.dark-input:focus { 
  border-color: #6366f1; 
  background-color: rgba(99, 102, 241, 0.05);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
}

.light-input { 
  background-color: white; 
  border-color: #e2e8f0; 
  color: #0f172a; 
}
.light-input:focus { border-color: #6366f1; }

.tab-btn {
  padding: 0.9rem 2.5rem;
  border-radius: 1.25rem;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  color: #64748b;
  border: 1px solid transparent;
}

.tab-active {
  background-color: #6366f1;
  color: white !important;
  box-shadow: 0 15px 30px -10px rgba(99, 102, 241, 0.4);
  transform: scale(1.05);
}

.label-text {
  font-size: 10px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-left: 0.75rem;
  margin-bottom: 0.75rem;
  display: block;
  opacity: 0.8;
}

.custom-scroll::-webkit-scrollbar {
  width: 20px;
}

/* JALUR (yang panjang, putih) */
.custom-scroll::-webkit-scrollbar-track {
  background: rgba(108, 108, 108, 0.15); /* putih transparan biar nyatu */
  border-radius: 999px;
}

/* YANG DIGESER (ungu) */
.custom-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6366f1, #a855f7);
  border-radius: 999px;
  transition: all 0.3s ease;
}

/* Hover */
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #4f46e5, #9333ea);
}

/* Result Card Polish */
.result-card-interactive:hover .deco-text {
  transform: scale(1.1) rotate(-5deg);
  opacity: 0.15;
}

.deco-text {
  filter: blur(4px);
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
}
</style>
