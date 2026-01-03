<script setup>
import { ref, computed } from 'vue';
// Mengambil database dari path yang ditentukan
import { LV_CAP, mq_data, quest_data, getTotalXP, addXP } from '../data/toramData';

defineProps({
  isDark: Boolean
});

// TABS STATE
const activeTab = ref('mq'); // 'mq' atau 'npc'

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
const selectedSQ = ref(Object.keys(quest_data)[1]); // Default: Nightmare Crystal
const sqAmount = ref(1);

// FORMAT OPSI MQ (Hanya menampilkan Quest asli, bukan label Chapter)
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

  // 1. Hitung XP yang dibutuhkan ke Target
  const xpNeeded = getTotalXP(lv, p, target);

  // 2. Hitung XP dari MQ
  let totalMqXP = 0;
  for (let i = mqFromIdx.value; i <= mqUntilIdx.value; i++) {
    const val = mq_data[mqKeys[i]];
    if (typeof val === 'number') {
      totalMqXP += val;
    }
    // Logic khusus Venena (Meta Coenubia) - XP bonus jika tidak di-skip
    if (mqKeys[i].includes("Coenubia") && !skipVenena.value) {
      totalMqXP += 12500000;
    }
  }

  // 3. Hasil MQ (1 Run)
  const [resLv, resP] = addXP(lv, p, totalMqXP);

  // 4. Simulasi Diary Spam
  let diaryRuns = [];
  if (useDiary.value && totalMqXP > 0) {
    let loopLv = lv;
    let loopP = p;
    // Maksimal 50 diary untuk mencegah lag browser
    for (let i = 1; i <= 50; i++) {
      const [nextLv, nextP] = addXP(loopLv, loopP, totalMqXP);
      diaryRuns.push({ run: i, lv: nextLv, p: nextP });
      loopLv = nextLv;
      loopP = nextP;
      if (loopLv >= target) break;
    }
  }

  // 5. Hitung NPC Quest
  const sqXP = (quest_data[selectedSQ.value] || 0) * (sqAmount.value || 0);
  const [sqLv, sqPercent] = addXP(lv, p, sqXP);

  return { xpNeeded, totalMqXP, resLv, resP, diaryRuns, sqLv, sqPercent, sqXP };
});
</script>

<template>
  <div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20">
    
    <div class="flex flex-col items-center gap-6 animate-bounce-slow">
      <div class="text-center">
        <h1 class="text-5xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl">
          MQ Calculator 
        </h1>
        <p class="text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse">Timi DB</p>
      </div>

      <div :class="['p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl', 
                    isDark ? 'bg-white/5 border-white/10' : 'bg-slate-200/50 border-slate-300']">
        <button @click="activeTab = 'mq'" :class="['tab-btn active:scale-90 active:shadow-inner', activeTab === 'mq' ? 'tab-active' : '']">Main Quest</button>
        <button @click="activeTab = 'npc'" :class="['tab-btn active:scale-90 active:shadow-inner', activeTab === 'npc' ? 'tab-active' : '']">NPC Quest</button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 space-y-6 animate-float">
        <div :class="['p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10 active:scale-[0.99]', 
                      isDark ? 'bg-slate-900/40 border-white/10 shadow-indigo-500/5' : 'bg-white/60 border-white/40 shadow-blue-500/5']">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="group">
              <label class="label-text">Current Lv</label>
              <input v-model.number="currentLv" type="number" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
            <div class="group">
              <label class="label-text">Percent %</label>
              <input v-model.number="currentP" type="number" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
            <div class="group">
              <label class="label-text">Target Lv</label>
              <input v-model.number="targetLv" type="number" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'" />
            </div>
          </div>

          <div v-if="activeTab === 'mq'" class="space-y-8 animate-in slide-in-from-top-2 duration-500">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <label class="label-text text-indigo-400">Start From</label>
                <select v-model="mqFromIdx" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'">
                  <option v-for="opt in mqOptions" :key="opt.id" :value="opt.id">{{ opt.label }}</option>
                </select>
              </div>
              <div>
                <label class="label-text text-indigo-400">End At</label>
                <select v-model="mqUntilIdx" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'">
                  <option v-for="opt in mqOptions" :key="opt.id" :value="opt.id">{{ opt.label }}</option>
                </select>
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

          <div v-else class="space-y-8 animate-in slide-in-from-top-2 duration-500">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <label class="label-text text-emerald-400">Select Quest</label>
                <select v-model="selectedSQ" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'">
                  <option v-for="(val, key) in quest_data" :key="key" :value="key">{{ key }}</option>
                </select>
              </div>
              <div>
                <label class="label-text text-emerald-400">Amount (Stack/Times)</label>
                <input v-model.number="sqAmount" type="number" class="input-style active:scale-95" :class="isDark ? 'dark-input' : 'light-input'" />
              </div>
            </div>
            <p class="text-[10px] font-bold opacity-40 ml-2 uppercase italic">*Rewards calculated based on Toram Official XP data</p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1 animate-float-delayed">
        <div :class="[
          'p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden transition-all duration-700 h-full flex flex-col justify-between active:scale-[0.98]',
          activeTab === 'mq' ? 'bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/40' : 'bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/40'
        ]">
          <div class="relative z-10 space-y-8">
            <div>
              <p class="text-[10px] font-black tracking-widest opacity-60 uppercase mb-1">XP Required to Target</p>
              <h3 class="text-2xl font-black">{{ calculation.xpNeeded.toLocaleString() }}</h3>
            </div>
            
            <div class="pt-8 border-t border-white/20">
              <p class="text-[10px] font-black tracking-widest opacity-60 uppercase mb-2">
                {{ activeTab === 'mq' ? 'Result After 1 Run' : 'Result After Turn-in' }}
              </p>
              <div class="flex items-baseline gap-2">
                <span class="text-6xl font-black italic tracking-tighter drop-shadow-lg transition-transform hover:scale-110 block cursor-default">
                  Lv {{ activeTab === 'mq' ? calculation.resLv : calculation.sqLv }}
                </span>
                <span class="text-xl font-bold opacity-70">
                  {{ activeTab === 'mq' ? calculation.resP : calculation.sqPercent }}%
                </span>
              </div>
            </div>

            <div class="bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-black/30 transition-colors">
              <p class="text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1">Total XP Gained</p>
              <p class="text-sm font-black group-hover:scale-105 transition-transform origin-left">
                {{ (activeTab === 'mq' ? calculation.totalMqXP : calculation.sqXP).toLocaleString() }} XP
              </p>
            </div>
          </div>
          
          <div class="absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter">
            {{ activeTab }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'mq' && useDiary" class="animate-in slide-in-from-bottom-10 duration-700">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div v-for="run in calculation.diaryRuns" :key="run.run" 
             :class="['p-5 rounded-3xl border backdrop-blur-md transition-all hover:-translate-y-2 active:scale-95 hover:shadow-2xl', 
                      isDark ? 'bg-white/5 border-white/10 hover:shadow-indigo-500/10' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-slate-300/50']">
          <p class="text-[9px] font-black text-indigo-500 uppercase tracking-tighter mb-2">Diary #{{ run.run }}</p>
          <div class="flex flex-col">
            <span class="text-2xl font-black italic">Lv {{ run.lv }}</span>
            <span class="text-[10px] font-bold opacity-40">{{ run.p }}% Completed</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@reference "tailwindcss";

/* --- CUSTOM ANIMATIONS --- */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: 2s; }
.animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }

.tab-btn {
  @apply px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer;
  @apply text-slate-500 hover:text-indigo-500;
}

.tab-active {
  @apply bg-indigo-600 !text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.5)];
}

.label-text {
  @apply text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block transition-colors group-hover:text-indigo-400;
}

.input-style {
  @apply w-full p-4 rounded-2xl outline-none font-bold transition-all border shadow-sm;
}

.input-style:focus {
  @apply ring-2 ring-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)];
}

.dark-input {
  @apply bg-slate-950/50 border-white/5 text-white focus:border-indigo-600;
}

.light-input {
  @apply bg-white border-slate-200 text-slate-900 focus:border-indigo-400;
}

/* Chrome, Safari, Edge, Opera - menghilangkan arrow number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] { -moz-appearance: textfield; }
</style>