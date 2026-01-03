<template>
  <div class="relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8">
    
    <div class="text-center py-4 animate-bounce-slow">
      <h1 class="text-5xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-500 dark:from-white dark:to-slate-600 drop-shadow-2xl">
        Blacksmith Calculator
      </h1>
      <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse">Timi DB</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      <div class="lg:col-span-4 space-y-6 animate-float">
        <div :class="cardClass">
          <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-white/5 pb-2">Character Parameters</p>
          
          <div class="grid grid-cols-2 gap-x-4 gap-y-5">
            <div v-for="(val, stat) in form.stats" :key="stat" class="transition-transform active:scale-95">
              <label class="block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1">{{ stat }}</label>
              <input type="number" v-model.number="form.stats[stat]" 
                class="w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:border-orange-500 focus:bg-orange-500/5 transition-all duration-300">
            </div>
          </div>

          <div class="mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3">
            <div v-for="bonus in [['eStr', 'STR+'], ['eStrP', 'STR%'], ['eDex', 'DEX+'], ['eDexP', 'DEX%']]" :key="bonus[0]">
              <label class="block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1">{{ bonus[1] }}</label>
              <input type="number" v-model.number="form[bonus[0]]" 
                class="w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:scale-105 transition-transform">
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 space-y-6 animate-float-delayed">
        <div :class="[cardClass, 'hover:shadow-cyan-500/20 shadow-2xl transition-shadow']">
          <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-white/5 pb-2">Crafting Configuration</p>

          <div class="space-y-4">
            <div class="relative group">
              <label class="block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors">Equipment Type</label>
              <select v-model="form.craftType" @change="handleTypeChange" 
                class="w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3.5 font-black dark:text-white text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:border-cyan-500 focus:bg-cyan-500/5">
                <option v-for="type in craftTypes" :key="type" :value="type">{{ type }}</option>
              </select>
              <div class="absolute right-4 bottom-4 pointer-events-none group-hover:translate-y-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="group">
                <label class="block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors">Proficiency</label>
                <input type="number" v-model.number="form.prof" class="w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500">
              </div>
              <div class="group">
                <label class="block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors">Player Lv</label>
                <input type="number" v-model.number="form.level" class="w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500">
              </div>
            </div>

            <div class="space-y-3 pt-2">
              <div v-for="skill in [['createSkill', 'Create Equipment'], ['careful', 'Careful Creation'], ['expert', 'Expert\'s Creation']]" :key="skill[0]" 
                   class="flex justify-between items-center bg-slate-500/5 p-3 rounded-xl border border-transparent hover:border-orange-500/30 hover:bg-orange-500/5 transition-all group">
                <span class="text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-slate-300">{{ skill[1] }}</span>
                <input type="number" v-model.number="form[skill[0]]" class="w-10 bg-transparent text-right font-black text-orange-500 outline-none group-hover:scale-110 transition-transform">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 space-y-6 animate-float-slow">
        <div :class="[cardClass, 'relative overflow-hidden group shadow-orange-500/10']">
          <p class="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4">Success Rate</p>
          <div class="flex items-baseline gap-2">
            <span class="text-7xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:scale-110 block" 
              :class="successRate >= 100 ? 'text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'dark:text-white text-slate-900'">
              {{ successRate }}
            </span>
            <span class="text-2xl font-black text-orange-500">%</span>
          </div>
          <div class="mt-6 w-full bg-slate-500/10 h-1.5 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-1000 ease-out" :style="{ width: successRate + '%' }"></div>
          </div>
        </div>

        <div :class="[cardClass, 'border-l-4 border-l-cyan-500 shadow-cyan-500/10']">
          <p class="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4">Total Potential</p>
          <div class="flex items-baseline gap-2">
            <span class="text-7xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-110 transition-transform duration-700 block">
              {{ totalPot }}
            </span>
            <span class="text-2xl font-black text-cyan-500/50 uppercase text-[12px]">Pts</span>
          </div>
        </div>

        <div :class="cardClass">
          <div class="space-y-4">
            <div class="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3">
              <span>Diff: {{ charDiff }} / {{ form.itemDiff }}</span>
            </div>
            
            <div v-if="charDiff < form.itemDiff" 
                 class="flex items-center justify-center gap-3 p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl text-rose-500 animate-shake">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-[10px] font-black uppercase tracking-widest">Low Difficulty</span>
            </div>
            
            <div v-else 
                 class="flex items-center justify-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-emerald-400 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-[10px] font-black uppercase tracking-widest">Ready to Craft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue';
import * as BS from '../data/bs-logic.js'; 

const props = defineProps(['isDark']);

const cardClass = computed(() => [
  'p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500',
  props.isDark 
    ? 'bg-slate-950/50 border-white/5 shadow-2xl' 
    : 'bg-white/80 border-slate-200 shadow-xl'
]);

const craftTypes = ["Armor", "1H Sword", "2H Sword", "Bow", "Bowgun", "Staff", "Magic Device", "Knuckle", "Halberd", "Katana"];

const form = reactive({
    level: 305, craftType: "Armor",
    stats: { STR: 0, INT: 0, VIT: 0, DEX: 0, AGI: 0, TEC: 0 },
    eStr: 0, eStrP: 0, eDex: 0, eDexP: 0,
    prof: BS.HIGHEST_PROF || 280,
    createSkill: 10,
    itemDiff: BS.ARMOR_DIFFICULTY || 265,
    basePot: BS.HIGHEST_ARM_POT || 54,
    careful: 10, expert: 10
});

const handleTypeChange = () => {
    Object.keys(form.stats).forEach(k => form.stats[k] = 0);
    if (form.craftType === "Armor") {
        form.stats.VIT = BS.PRIMARY_STAT; form.stats.TEC = BS.SECONDARY_STAT;
        form.itemDiff = BS.ARMOR_DIFFICULTY; form.basePot = BS.HIGHEST_ARM_POT;
    } else {
        form.itemDiff = BS.WEAPON_DIFFICULTY; form.basePot = BS.HIGHEST_WPN_POT;
        if (["1H Sword", "Bow", "Bowgun"].includes(form.craftType)) {
            form.stats.DEX = BS.PRIMARY_STAT; form.stats.STR = BS.SECONDARY_STAT;
        } else if (form.craftType === "2H Sword") {
            form.stats.STR = BS.PRIMARY_STAT; form.stats.DEX = BS.SECONDARY_STAT;
        } else if (form.craftType === "Staff") {
            form.stats.INT = BS.PRIMARY_STAT; form.stats.TEC = BS.SECONDARY_STAT;
        } else if (form.craftType === "Magic Device") {
            form.stats.INT = BS.PRIMARY_STAT; form.stats.AGI = BS.SECONDARY_STAT;
        } else if (form.craftType === "Knuckle") {
            form.stats.AGI = BS.PRIMARY_STAT; form.stats.DEX = BS.SECONDARY_STAT;
        } else if (form.craftType === "Halberd") {
            form.stats.STR = BS.PRIMARY_STAT; form.stats.AGI = BS.SECONDARY_STAT;
        } else if (form.craftType === "Katana") {
            form.stats.DEX = BS.PRIMARY_STAT; form.stats.AGI = BS.SECONDARY_STAT;
        }
    }
};

onMounted(() => handleTypeChange());

const charDiff = computed(() => BS.calculateCharacterDiff(form.prof, form.stats.TEC, form.stats.DEX, form.eDex, form.eDexP));
const successRate = computed(() => BS.calculateSuccessRate(form.createSkill, charDiff.value, form.itemDiff, form.stats.STR, form.eStr, form.eStrP));
const totalPot = computed(() => BS.calculatePotential(form.basePot, form.careful, form.expert, form.craftType, form.stats));
</script>

<style scoped>
/* KEYFRAME ANIMATIONS */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: 1s; }
.animate-float-slow { animation: float 8s ease-in-out infinite; animation-delay: 2s; }
.animate-shake { animation: shake 0.4s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] { -moz-appearance: textfield; }
</style>