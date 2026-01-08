<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { statusGroups } from '@/constants/statusGroups'
import { groupColors } from '@/constants/groupColors'

const props = defineProps({
  isDark: Boolean
})

const router = useRouter()
const filters = reactive({ stats: {} })

function toggleStat(stat) {
  if (!filters.stats[stat]) {
    filters.stats[stat] = { sign: '+', op: '>=', value: null }
  } else {
    delete filters.stats[stat]
  }
}

function applyFilter() {
  router.push({
    name: 'xtall',
    query: { filter: JSON.stringify(filters) }
  })
}
</script>

<template>
  <div :class="['p-4 md:p-8 font-sans transition-all duration-700', isDark ? 'text-white' : 'text-slate-900']">
    
    <div class="max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
      <div>
        <h1 class="text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]">
          <span :class="isDark ? 'text-white' : 'text-black'">Advanced</span><br/>
          <span class="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
            Search
          </span>
        </h1>
      </div>

      <div class="flex items-center gap-4">
        <button @click="filters.stats = {}" class="px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
          Clear All
        </button>
        <button @click="applyFilter" 
          class="group px-10 py-5 bg-orange-500 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(249,115,22,0.3)]">
          <span class="text-xs font-[1000] uppercase tracking-[0.2em] text-white">Apply Parameters</span>
        </button>
      </div>
    </div>

    <div class="max-w-[1600px] mx-auto space-y-16">
      <div v-for="(stats, group) in statusGroups" :key="group">
        
        <div class="flex items-center gap-3 mb-8 ml-2">
          <div :class="['w-2 h-6 rounded-full', groupColors[group].bg]"></div>
          <h2 :class="['text-lg font-[1000] uppercase tracking-[0.3em] italic', groupColors[group].text]">
            {{ group }}
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div v-for="stat in stats" :key="stat.value"
            @click="toggleStat(stat.value)"
            :class="[
              'group/item relative rounded-[2rem] border-2 p-5 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[140px]', 
              filters.stats[stat.value] 
                ? (isDark ? 'bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20' : 'bg-orange-50 border-orange-500') 
                : (isDark ? 'bg-[#0a0a0a] border-white/5 hover:border-white/20' : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm')
            ]"
          >
            <div class="flex items-start justify-between gap-2 mb-4">
              <span :class="['text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors', 
                filters.stats[stat.value] ? (isDark ? 'text-white' : 'text-orange-600') : (isDark ? 'text-slate-500' : 'text-slate-400')]">
                {{ stat.label }}
              </span>
              
              <div :class="['shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-500', 
                filters.stats[stat.value] ? 'bg-orange-500 border-orange-400' : (isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200')]">
                <svg v-if="filters.stats[stat.value]" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" />
                </svg>
                <plus v-else :class="['w-4 h-4', isDark ? 'text-white/20' : 'text-slate-300']" />
              </div>
            </div>

            <transition name="fade">
              <div v-if="filters.stats[stat.value]" @click.stop class="space-y-2 mt-auto pt-3 border-t border-orange-500/20">
                <div class="flex gap-1.5">
                  <select v-model="filters.stats[stat.value].sign" 
                    :class="['flex-1 py-2 rounded-lg text-center font-black text-[10px] outline-none border',
                    isDark ? 'bg-black border-white/10 text-orange-400' : 'bg-white border-slate-200 text-orange-600']">
                    <option value="+">Stats +</option><option value="-">Stats -</option>
                  </select>
                  <select v-model="filters.stats[stat.value].op" 
                    :class="['flex-1 py-2 rounded-lg text-center font-black text-[10px] outline-none border',
                    isDark ? 'bg-black border-white/10 text-cyan-400' : 'bg-white border-slate-200 text-cyan-600']">
                    <option value=">=">&ge;</option><option value="<=">&le;</option>
                  </select>
                </div>
                <input type="number" v-model.number="filters.stats[stat.value].value" 
                  :class="['w-full py-2 rounded-lg text-center font-black text-[10px] outline-none border',
                  isDark ? 'bg-black border-white/10 text-white' : 'bg-white border-slate-200 text-black']" 
                  placeholder="VALUE" />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Grid Layout Enhancer */
@media (min-width: 1500px) {
  .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
}

.fade-enter-active { transition: opacity 0.3s ease; }
.fade-enter-from { opacity: 0; }

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-move 3s ease infinite;
}
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>