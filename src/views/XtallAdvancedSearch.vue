<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { statusGroups } from '@/constants/statusGroups'
import { groupColors } from '@/constants/groupColors'
// Import data kategori yang sudah berisi ikon gambar
import { displayTypes, getBadgeColor } from '@/utils/xtallFilters'

const props = defineProps({
  isDark: Boolean
})

const router = useRouter()
const route = useRoute()

const filters = reactive({ 
  stats: {},
  types: [] // Menyimpan pilihan kategori (8 jenis)
})

onMounted(() => {
  if (!route.query.filter) return
  try {
    const saved = JSON.parse(route.query.filter)
    if (saved?.stats) filters.stats = saved.stats
    if (saved?.types) filters.types = saved.types
  } catch (e) {
    console.warn('Invalid filter data')
  }
})

function goBack() { router.back() }

// GANTI: Clear All menjadi Clear Page (Hanya reset state lokal di halaman ini)
function clearPage() {
  Object.keys(filters.stats).forEach(k => delete filters.stats[k])
  filters.types = []
}

function toggleStat(stat) {
  if (!filters.stats[stat]) {
    filters.stats[stat] = { sign: '+', op: '>=', value: null }
  } else {
    delete filters.stats[stat]
  }
}

function toggleType(typeValue) {
  const index = filters.types.indexOf(typeValue)
  if (index > -1) {
    filters.types.splice(index, 1)
  } else {
    filters.types.push(typeValue)
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
  <div :class="['p-4 md:p-8 font-sans transition-all duration-700 min-h-screen', isDark ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900']">
    
    <div class="max-w-[1600px] mx-auto mb-6 flex items-center justify-between">
      <button @click="goBack" class="group flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-white/5 active:scale-95">
        <div :class="['w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all', 
          isDark ? 'border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10' : 'border-slate-200 group-hover:border-orange-500/50 group-hover:bg-orange-50']">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span class="text-[11px] font-[1000] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100">Back</span>
      </button>
    </div>

    <div class="max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
      <div>
        <h1 class="text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]">
          <span :class="isDark ? 'text-white' : 'text-black'">Advanced</span><br/>
          <span class="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">Search</span>
        </h1>
        <h2 class="text-2xl md:text-2xl font-[100] tracking-tighter uppercase italic leading-[0.8]">
          <br/><span :class="isDark ? 'text-white' : 'text-black'">All Flat and percent(%) stats are combined </span><br/>
        </h2>
      </div>

      <div class="flex flex-row items-center gap-4 w-full lg:w-auto">
        <button @click="clearPage" 
          class="flex-1 lg:flex-none px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300">
          Clear Page
        </button>
        <button @click="applyFilter" 
          class="flex-[2] lg:flex-none px-10 py-5 bg-orange-600 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(234,88,12,0.3)]">
          <span class="text-xs font-[1000] uppercase tracking-[0.2em] text-white">Apply Parameters</span>
        </button>
      </div>
    </div>

    <div class="max-w-[1600px] mx-auto space-y-5">
      
      <section>
        <div class="flex items-center gap-3 mb-8 ml-2">
          <div class="w-1.5 h-6 rounded-full bg-cyan-500"></div>
          <h2 class="text-lg font-[1000] uppercase tracking-[0.3em] italic text-cyan-500">Type Crysta</h2>
        </div>
        
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          <div v-for="type in displayTypes" :key="type.value"
            @click="toggleType(type.value)"
            :class="[
              'group relative p-5 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col items-center gap-4 min-h-[160px] justify-center',
              filters.types.includes(type.value)
                ? 'bg-[#468FE0] border-cyan-400 shadow-xl shadow-cyan-600/80 scale-[1.12]'
                : (isDark ? 'bg-[#0a0a0a] border-white/5 hover:border-white/20' : 'bg-white border-slate-100 shadow-sm hover:border-slate-300')
            ]"
          >
            <div :class="['w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner', 
              filters.types.includes(type.value) ? 'border-white shadow-lg' : 'border-slate-800/50']">
              <img :src="type.icon" class="w-full h-full object-cover" :alt="type.label" />
            </div>

            <span :class="['text-[10px] font-black uppercase tracking-[0.15em] text-center leading-tight transition-colors',
              filters.types.includes(type.value) ? 'text-white' : (isDark ? 'text-slate-400' : 'text-slate-500')]">
              {{ type.label }}
            </span>

            <div v-if="filters.types.includes(type.value)" class="absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
          </div>
        </div>
      </section>

      <div v-for="(stats, group) in statusGroups" :key="group">
        <div class="flex items-center gap-1 mb-4 ml-2">
          <div :class="['w-1.5 h-6 rounded-full', groupColors[group]?.bg || 'bg-slate-500']"></div>
          <h2 :class="['text-lg font-[1000] uppercase tracking-[0.3em] italic', groupColors[group]?.text || 'text-slate-500']">
            {{ group }}
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2">
          <div v-for="stat in stats" :key="stat.value"
            @click="toggleStat(stat.value)"
            :class="[
              'group/item relative rounded-[2rem] border-2 p-2 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[70px]', 
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
              
              <div :class="['shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500', 
                filters.stats[stat.value] ? 'bg-orange-500 border-orange-400 rotate-0' : (isDark ? 'bg-white/5 border-white/10 rotate-45' : 'bg-slate-50 border-slate-200 rotate-45')]">
                <svg v-if="filters.stats[stat.value]" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" />
                </svg>
                <div v-else :class="['text-lg leading-none', isDark ? 'text-white/20' : 'text-slate-300']">+</div>
              </div>
            </div>

            <transition name="fade">
              <div v-if="filters.stats[stat.value]" @click.stop class="space-y-2 mt-auto pt-4 border-t border-orange-500/20">
                <div class="flex gap-1">
                  <select v-model="filters.stats[stat.value].sign" 
                    :class="['flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors',
                    isDark ? 'bg-black border-white/10 text-orange-400' : 'bg-white border-slate-200 text-orange-600']">
                    <option value="+">Stats +</option><option value="-">Stats -</option>
                  </select>
                  <select v-model="filters.stats[stat.value].op" 
                    :class="['flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors',
                    isDark ? 'bg-black border-white/10 text-cyan-400' : 'bg-white border-slate-200 text-cyan-600']">
                    <option value=">=">&ge;</option><option value="<=">&le;</option>
                  </select>
                </div>
                <input type="number" v-model.number="filters.stats[stat.value].value" 
                  :class="['w-full py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-all focus:border-orange-500',
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
.fade-enter-active, .fade-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-move 3s ease infinite;
}

@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(249, 115, 22, 0.1);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover { background: rgba(249, 115, 22, 0.3); }
</style>