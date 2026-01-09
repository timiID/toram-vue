<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry"
    :style="animationStyle"
  >
    <div class="lg:col-span-3 flex flex-row lg:flex-col gap-3">
      <div
        v-if="baseXtall"
        @click="$emit('set-search', baseXtall.name)"
        :class="[
          'flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] cursor-pointer transition-all backdrop-blur-sm shadow-xl ring-1',
          isDark
            ? 'bg-white/[0.04] ring-white/10 hover:ring-cyan-400 shadow-black/30'
            : 'bg-white/70 ring-slate-200 hover:ring-cyan-500 shadow-slate-300/40'
        ]"
      >
        <span class="text-[9px] font-black uppercase tracking-widest text-cyan-500 block mb-1">
          Previous
        </span>
        <p
          :class="[
            'text-xs font-[1000] truncate',
            isDark ? 'text-slate-100' : 'text-slate-900'
          ]"
        >
          {{ baseXtall.name }}
        </p>
      </div>
    </div>

    <div class="lg:col-span-6">
      <div
        :class="[
          'h-full relative rounded-[2.5rem] overflow-hidden transition-all duration-500',
          'ring-1 backdrop-blur-xl shadow-2xl',
          isDark
            ? 'bg-white/[0.03] ring-white/10 shadow-black/50'
            : 'bg-white/80 ring-slate-200 shadow-slate-300/50'
        ]"
      >
        <div class="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div class="shrink-0 mx-auto md:mx-0">
            <div
              :class="[
                'w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] flex items-center justify-center ring-1',
                isDark
                  ? 'bg-white/[0.04] ring-white/10'
                  : 'bg-white/80 ring-slate-200'
              ]"
            >
              <img
                :src="iconPath"
                :alt="xtall.type"
                class="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div class="flex-1 space-y-5 w-full">
            <h3
              :class="[
                'text-2xl md:text-4xl font-[1000] uppercase italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r',
                isDark 
                  ? 'from-white via-cyan-200 to-blue-300' 
                  : 'from-indigo-900 via-purple-800 to-blue-900'
              ]"
            >
              {{ xtall.name }}
            </h3>

            <div
              :class="[
                'p-6 rounded-3xl ring-1',
                isDark
                  ? 'bg-white/[0.03] ring-white/10'
                  : 'bg-white/70 ring-slate-200'
              ]"
            >
              <div class="space-y-3">
                <div
                  v-for="(stat, sIdx) in parsedStats"
                  :key="sIdx"
                  class="flex gap-3 items-start"
                >
                  <span
                    v-if="!stat.includes('Dengan')"
                    :class="[
                      'w-1.5 h-1.5 rounded-full mt-1.5',
                      isDark ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'bg-indigo-600'
                    ]"
                  />
                  <p
                    :class="[
                      'text-xs md:text-sm font-[1000] leading-relaxed',
                      stat.includes('Dengan')
                        ? 'text-emerald-500 italic font-bold'
                        : stat.includes('-')
                          ? 'text-rose-600'
                          : isDark
                            ? 'bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400'
                            : 'bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-800'
                    ]"
                  >
                    {{ stat }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          :class="[
            'px-8 py-5 flex justify-between items-center border-t',
            isDark
              ? 'bg-white/[0.02] border-white/10'
              : 'bg-white/60 border-slate-200'
          ]"
        >
          <span
            :class="[
              'text-[9px] font-[1000] px-4 py-1.5 rounded-full ring-1 uppercase tracking-tighter',
              badgeColorClass,
              isDark ? 'text-white' : 'text-slate-900'
            ]"
          >
            {{ xtall.type }}
          </span>

          <router-link
            :to="'/xtall/' + xtall.code"
            class="px-7 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
                   text-white text-[10px] font-[1000] uppercase tracking-widest
                   shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Details
          </router-link>
        </div>
      </div>
    </div>

    <div class="lg:col-span-3 flex flex-row lg:flex-col gap-3">
      <div
        v-for="evo in evoXtalls"
        :key="evo.code"
        @click="$emit('set-search', evo.name)"
        :class="[
          'flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] cursor-pointer transition-all backdrop-blur-sm shadow-xl ring-1',
          isDark
            ? 'bg-white/[0.04] ring-white/10 hover:ring-purple-400 shadow-black/30'
            : 'bg-white/70 ring-slate-200 hover:ring-purple-500 shadow-slate-300/40'
        ]"
      >
        <span class="text-[9px] font-black uppercase tracking-widest text-purple-500 block mb-1 text-right">
          Next Upgrade
        </span>
        <p
          :class="[
            'text-xs font-[1000] truncate text-right',
            isDark ? 'text-slate-100' : 'text-slate-900'
          ]"
        >
          {{ evo.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineEmits(['set-search'])

const props = defineProps({
  xtall: Object,
  idx: Number,
  isDark: Boolean,
  baseXtall: Object,
  evoXtalls: Array,
  iconPath: String,
  labelColor: String,
  badgeColorClass: String
})

const animationStyle = computed(() => ({
  animationDelay: props.idx * 70 + 'ms'
}))

const parsedStats = computed(() => {
  if (!props.xtall?.view) return []
  return Array.isArray(props.xtall.view)
    ? props.xtall.view
    : props.xtall.view
        .split(/,|\n/)
        .map(s => s.trim())
        .filter(Boolean)
})
</script>

<style scoped>
.animate-entry {
  opacity: 0;
  animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
</style>
