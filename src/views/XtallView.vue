<template>
  <div :class="['min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent', isDark ? 'text-slate-200' : 'text-slate-900']">
    <div class="fixed inset-0 pointer-events-none z-0">
      <div :class="['absolute inset-0 bg-[url(\'/images/logo.png\')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000', isDark ? 'brightness-200' : 'invert opacity-[0.02]']"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent"></div>
      <div v-if="isDark" class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      
      <div v-if="isDark" class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <div class="relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-8 md:space-y-14">
      
      <header :class="['relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500', isDark ? 'border-white/5' : 'border-black/5']">
        <div class="flex items-center gap-6">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img src="/images/logo.png" class="relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" alt="Logo" />
          </div>
          
          <div class="text-center md:text-left space-y-1">
            <div class="flex items-center gap-3">
              <h1 class="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all">
                <span :class="isDark ? 'text-white' : 'text-slate-900'">TIMI</span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">DB</span>
              </h1>
              <div class="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase">Bahasa Indonesia</div>
            </div>
            <p :class="['text-xs font-black uppercase tracking-[0.5em] opacity-60', isDark ? 'text-slate-400' : 'text-slate-500']">Toram Online Database</p>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-end gap-3">
          <div :class="['group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500', isDark ? 'bg-slate-900/40 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50']">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span :class="['relative text-xs font-black uppercase tracking-[0.2em]', isDark ? 'text-cyan-400' : 'text-blue-600']">
              Results : {{ filteredResults.length }} Xtall
            </span>
          </div>
          <div class="flex gap-2">
            <div v-for="i in 3" :key="i" class="w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
          </div>
        </div>
      </header>

      <RouterLink
  to="/xtall/advanced"
  class="mb-6 block w-full rounded-2xl border-2 border-indigo-500
         bg-gradient-to-t from-indigo-400 to-purple-500
         px-6 py-5 text-center text-lg font-black text-white
         shadow-xl hover:scale-[1.02] transition"
>
  🔎 Advanced Xtall Search
</RouterLink>

      <section :class="['grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl', 
        isDark ? 'bg-slate-950/60 border-red/100 shadow-black/40' : 'bg-red/80 border-slate-200 shadow-slate-300/50']">
        
        <div class="space-y-2 col-span-2 md:col-span-2 lg:col-span-2">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
            Search Name
          </label>
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"></div>
            <input v-model="searchQuery" type="text" placeholder="Search xtall name..." 
              :class="['relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm', 
              isDark ? 'bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600' : 'bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400']">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="3"/></svg>
          </div>
        </div>

        <div class="space-y-2 col-span-1">
  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 ml-4">Type Xtall</label>
  <div class="relative" ref="typeRef">
    <button @click.stop="toggleTypeDropdown" 
      :class="['w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300',
      isTypeOpen ? 'border-orange-500 ring-4 ring-orange-500/10 scale-[0.98]' : '',
      isDark ? (isTypeOpen ? 'bg-orange-500/10' : 'bg-slate-900/50 border-white/5') : (isTypeOpen ? 'bg-orange-50 text-orange-700' : 'bg-white border-slate-200 shadow-sm')]">
      
      <span class="truncate">
        {{ selectedTypes.length === 0 ? 'All Type' : (selectedTypes.length === 1 ? selectedTypes[0] : selectedTypes.length + ' Terpilih') }}
      </span>
      
      <svg :class="['w-4 h-4 transition-transform duration-500', isTypeOpen ? 'rotate-180 text-orange-500' : 'text-slate-500']" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3"/></svg>
    </button>

    <transition name="dropdown-slide">
  <div
    v-if="isTypeOpen"
    :class="[
      'absolute left-0 top-full mt-3 w-64 z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-3xl',
      isDark ? 'bg-slate-950/95 border-white/10' : 'bg-white border-slate-100'
    ]"
  >
    <div class="space-y-1.5 max-h-[300px] overflow-y-auto custom-scroll pr-1">

      <!-- ALL TYPE -->
      <div
        @click="selectedTypes = []"
        :class="[
          'group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all',
          selectedTypes.length === 0
            ? 'bg-orange-500 text-white'
            : (isDark ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-50 text-slate-600')
        ]"
      >
        <span class="text-[10px] font-black uppercase tracking-widest">
          All Type
        </span>
        <div
          v-if="selectedTypes.length === 0"
          class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"
        ></div>
      </div>

      <div :class="['h-[1px] my-2', isDark ? 'bg-white/5' : 'bg-slate-100']"></div>

      <!-- TYPE LIST -->
      <div
        v-for="type in displayTypes"
        :key="type.value"
        @click="toggleType(type.value)"
        :class="[
          'group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all border border-transparent',
          selectedTypes.includes(type.value)
            ? 'bg-orange-500/10 border-orange-500/20'
            : (isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50')
        ]"
      >
        <!-- CHECKBOX -->
        <div
          :class="[
            'w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300',
            selectedTypes.includes(type.value)
              ? 'border-orange-500 bg-orange-500'
              : 'border-slate-500 group-hover:border-orange-400'
          ]"
        >
          <svg
            v-if="selectedTypes.includes(type.value)"
            class="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <!-- LABEL -->
        <span
          :class="[
            'text-xs font-bold',
            selectedTypes.includes(type.value)
              ? 'text-orange-500'
              : (isDark ? 'text-slate-400' : 'text-slate-600')
          ]"
        >
          {{ type.label }}
        </span>
      </div>

    </div>
  </div>
</transition>

  </div>
</div>

<div class="space-y-2 col-span-1">
  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 ml-4">Attributes</label>
  <div class="relative" ref="statusRef">
    <button @click.stop="toggleStatusDropdown"
      :class="['w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300',
      isStatusOpen ? 'border-teal-500 ring-4 ring-teal-500/10 scale-[0.98]' : '',
      isDark ? (isStatusOpen ? 'bg-teal-500/10' : 'bg-slate-900/50 border-white/5') : (isStatusOpen ? 'bg-teal-50 text-teal-700' : 'bg-white border-slate-200 shadow-sm')]">
  
      <span class="truncate">
        {{ selectedStats.length > 0 ? selectedStats.length + ' Filters Selected' : 'Attribute Status' }}
      </span>
  
      <svg :class="['w-4 h-4 transition-transform duration-500', isStatusOpen ? 'rotate-180 text-teal-500' : 'text-slate-500']" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3"/></svg>
    </button>

    <transition name="dropdown-slide">
      <div v-if="isStatusOpen" :class="['absolute right-0 md:left-0 top-full mt-3 w-[280px] z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl', isDark ? 'bg-slate-950/98 border-white/10' : 'bg-white/98 border-slate-200']">
    
        <div class="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
          <div>
            <h4 class="text-xs font-black uppercase italic tracking-tighter">Attribute Status</h4>
            <p class="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Narrow your results</p>
          </div>
          <button @click="selectedStats = []" class="px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg text-[10px] font-black uppercase transition-all duration-300">Reset</button>
        </div>

        <div class="grid grid-cols-1 gap-2 max-h-[55vh] overflow-y-auto custom-scroll pr-1">
          <div v-for="(options, group) in statusGroups" :key="group" 
            :class="['group p-3 rounded-[1.5rem] border-2 transition-all duration-500', isDark ? 'bg-white/[0.02] hover:bg-white/[0.04]' : 'bg-slate-50', groupColors[group]?.border || 'border-transparent']">
        
            <div class="flex items-center gap-2 mb-2">
              <div :class="['w-1 h-3 rounded-full', groupColors[group]?.bg || 'bg-slate-500']"></div>
              <h5 :class="['text-[9px] font-black uppercase tracking-widest', groupColors[group]?.text || 'text-slate-400']">{{ group }}</h5>
            </div>

            <div class="flex flex-wrap gap-1.5">
              <div v-for="opt in options" :key="opt.value" 
                @click.stop="toggleStat(opt.value)" 
                :class="['group/stat px-2 py-1 rounded-lg text-[9px] font-black transition-all duration-300 border flex items-center gap-1.5 cursor-pointer', 
                selectedStats.includes(opt.value) 
                  ? (groupColors[group]?.text + ' border-current bg-current/10 shadow-sm') 
                  : (isDark ? 'text-slate-500 border-white/5 hover:border-white/20' : 'text-slate-500 border-slate-200 bg-white hover:border-slate-400')]">
            
                <div :class="['w-2.5 h-2.5 rounded-sm border flex items-center justify-center transition-all', 
                  selectedStats.includes(opt.value) ? 'bg-current border-transparent' : 'border-current/30']">
                  <svg v-if="selectedStats.includes(opt.value)" class="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
            
                {{ opt.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</div>

        <div class="space-y-2 col-span-1">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4">Scale</label>
          <div class="relative group">
            <select v-model="itemsPerPage" :class="['w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10',
              isDark ? 'bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200' : 'bg-white border-slate-200 focus:border-purple-500 shadow-sm']">
              <option :value="10">10 Units</option>
              <option :value="25">25 Units</option>
              <option :value="50">50 Units</option>
              <option :value="9999">Show All</option>
            </select>
            <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3"/></svg>
          </div>
        </div>

<div class="space-y-4 w-full col-span-2 lg:col-span-3">
  <div class="flex items-center gap-2 ml-4">
    <div class="w-1.5 h-4 bg-red-600 rounded-full"></div>
    <label class="text-[11px] font-[1000] uppercase tracking-[0.25em] text-red-600">
      Sequence & Reset Control Center
    </label>
  </div>
  
  <div class="flex flex-col md:flex-row items-center gap-3 w-full">
    
    <div class="relative group flex-[2.5] w-full">
      <select v-model="sortOrder" :class="['w-full h-[60px] px-6 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-12',
        isDark ? 'bg-slate-900 border-white/10 focus:border-red-500 text-slate-200' : 'bg-white border-slate-200 focus:border-red-500 shadow-sm']">
        <option value="asc">Sequence: A to Z</option>
        <option value="desc">Sequence: Z to A</option>
      </select>
      <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-500">
        <svg class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <button 
      @click="searchQuery = ''; selectedTypes = []; sortOrder = 'asc'"
      class="h-[60px] flex-1 w-full px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span class="whitespace-nowrap">Reset Filters</span>
    </button>

    <button 
      @click="handleResetAll"
      class="h-[60px] flex-1 w-full px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <span class="whitespace-nowrap">Reset All</span>
    </button>

  </div>
</div>


        
      </section>

      <div class="relative py-4 flex items-center justify-center">
        <div :class="['absolute inset-0 h-[1px] my-auto', isDark ? 'bg-white/5' : 'bg-slate-200']"></div>
        <div class="absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"></div>
        <div :class="['relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all', isDark ? 'bg-[#020617] border-white/10 text-slate-500' : 'bg-transparent-50 border-slate-200 text-slate-400']">
          Xtall Versi Indonesia
        </div>
      </div>

      <main class="space-y-10 relative z-10 pb-32">
        <div v-for="(xtall, idx) in paginatedResults" :key="xtall.code" 
          class="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry"
          :style="{ animationDelay: (idx * 70) + 'ms' }">
          
          <div class="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide">
            <div v-if="getBaseFor(xtall)" @click="setSearch(getBaseFor(xtall).name)"
              :class="['flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl',
              isDark ? 'bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60' : 'bg-white border-slate-200 hover:border-cyan-400']">
              <div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/></svg>
                <span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest">Previous</span>
              </div>
              <p :class="['text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300', isDark ? 'text-slate-300' : 'text-slate-700']">
                {{ getBaseFor(xtall).name }}
              </p>
              <div class="absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform">🧬</div>
            </div>
            <div v-else class="hidden lg:flex flex-1 items-center justify-center opacity-10">
               <div class="w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
            </div>
          </div>

          <div class="lg:col-span-6 relative group">
            <div :class="['absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700', 
              xtall.type === 'UPGRADE' ? 'bg-purple-600' : 'bg-blue-600']"></div>

            <div :class="['h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl',
              isDark ? 'bg-[#0b1226]/90 border-white/80 group-hover:border-white/80' : 'bg-white border-slate-200 group-hover:border-blue-400']">
              
              <div class="relative p-6 md:p-10">
                 <div class="flex flex-col md:flex-row gap-8 items-start">
                    <div class="relative shrink-0 mx-auto md:mx-0">
                      <div class="absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"></div>
                      <div :class="['relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110',
                        isDark ? 'bg-slate-950 border-white/70' : 'bg-slate-50 border-slate-200']">
                        <img :src="getIconPath(xtall)" class="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]" :alt="xtall.type" />
                      </div>
                      <div :class="['absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black', getBadgeColor(xtall.type)]">
                         {{ xtall.type.charAt(0) }}
                      </div>
                    </div>

                    <div class="flex-1 space-y-6 w-full">
                       <div class="space-y-2">
                          <div class="flex flex-wrap items-center gap-3">
                        </div>
                          <h3 :class="[
  'text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400',
  getLabelColor(xtall)
]">

                            {{ xtall.name }}
                          </h3>
                       </div>

                       <div :class="['p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]', isDark ? 'bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]' : 'bg-slate-50 border-slate-100']">
  <div class="grid grid-cols-1 gap-4">
    <div v-for="(stat, sIdx) in parseStats(xtall.view)" :key="sIdx" 
      class="flex items-center gap-4 group/item">
      
      <div v-if="!stat.includes('Dengan')" 
        class="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0">
      </div>
      
      <p :class="[
        'text-xs md:text-sm font-bold tracking-tight transition-all duration-300', 
        stat.includes('Dengan') 
          ? 'text-green-500 italic' 
          : (stat.includes('-') 
              ? 'text-red-500' 
              : (isDark ? 'text-slate-300 group-hover/item:text-white' : 'text-slate-600 group-hover/item:text-slate-900')
            )
      ]">
        {{ stat }}
      </p>
    </div>
  </div>

                       </div>
                    </div>
                 </div>
              </div>

              <div :class="['px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4', isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-100']">
                <div class="flex items-center gap-4">
                  <div class="flex flex-col">
                   <span :class="['text-[10px] font-black tracking-widest transition-colors', isDark ? 'text-slate-400' : 'text-slate-500']">
    TYPE XTALL
  </span>
  
  <span :class="[
    'text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter', 
    getBadgeColor(xtall.type)
  ]">
    {{ xtall.type }}
  </span>
                  </div>
                  <div class="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
                </div>
                <router-link 
  :to="'/xtall/' + xtall.code"
  class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
>
  Details
</router-link>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide">
            <template v-if="getEvoFor(xtall).length">
              <div v-for="evo in getEvoFor(xtall)" :key="evo.code" @click="setSearch(evo.name)"
                :class="['flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl',
                isDark ? 'bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60' : 'bg-white border-slate-200 hover:border-purple-400']">
                <div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                <div class="flex items-center justify-end gap-2 mb-2 text-right">
                  <span class="text-[9px] font-black uppercase text-purple-500 tracking-widest">Next Upgrade</span>
                  <svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/></svg>
                </div>
                <p :class="['text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300', isDark ? 'text-slate-300' : 'text-slate-700']">
                  {{ evo.name }}
                </p>
                <div class="absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform">🚀</div>
              </div>
            </template>
            <div v-else class="hidden lg:flex flex-1 items-center justify-center opacity-10">
               <div class="w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
            </div>
          </div>
        </div>

        <div v-if="filteredResults.length === 0" class="py-40 text-center animate-pulse">
          <div class="inline-flex relative mb-8">
            <div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping"></div>
            <div class="text-8xl relative">🔎</div>
          </div>
          <h2 class="text-3xl font-[1000] uppercase italic tracking-tighter">Xtall not found</h2>
          <p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4">Search xtall name with correct Indonesian name.</p>
          <button @click="resetFilters" class="mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Reset</button>
        </div>

        <div class="flex flex-col items-center gap-10 py-20">
  <nav v-if="totalPages > 1 && itemsPerPage < 1000" class="flex flex-wrap justify-center items-center gap-3">
    <button @click="currentPage--" :disabled="currentPage === 1" 
      class="w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm
      isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'">
      «
    </button>
    
    <div class="flex gap-2.5 items-center">
      <template v-for="page in visiblePages" :key="page">
        <button v-if="page !== '...'" @click="currentPage = page"
          :class="['w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center', 
          currentPage === page 
            ? 'bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1' 
            : (isDark ? 'bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500' : 'bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm')]">
          {{ page }}
        </button>
        
        <span v-else class="px-2 font-black text-blue-500">...</span>
      </template>
    </div>

    <button @click="currentPage++" :disabled="currentPage === totalPages" 
      class="w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm
      isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'">
      »
    </button>
  </nav>

  <button @click="itemsPerPage = 9999" v-if="itemsPerPage < 100"
    class="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl">
    <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    <span class="relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic">Explore All</span>
  </button>
  
  <div class="flex items-center gap-4 opacity-50">
     <div class="h-[1px] w-12 bg-blue-500/30"></div>
     <p class="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Page {{ currentPage }} of {{ totalPages }}</p>
     <div class="h-[1px] w-12 bg-blue-500/30"></div>
  </div>
</div>
      </main>
    </div>

    <div class="fixed bottom-8 left-8 z-[200] hidden lg:block">
      <div :class="['px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500', isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-slate-200 shadow-2xl']">
        <div class="flex items-center gap-4">
          <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span class="text-[9px] font-black uppercase tracking-widest opacity-60">Versi Nama Indonesia</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router' // TAMBAHKAN INI
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { crystalData, CrystalType } from '../data/store.js';
// Crysta Biasa
import normalCrystas from "@/assets/icons/crysta_normal.jpg";
import weaponCrystas from "@/assets/icons/crysta_senjata.jpg";
import armorCrystas from "@/assets/icons/crysta_zirah.jpg";
import additionalCrystas from "@/assets/icons/crysta_tambahan.jpg";
import specialCrystas from "@/assets/icons/crysta_pelengkap.jpg";

// Enhancer (Crysta Upgrade/Up)
// Sesuai permintaanmu: crysta_up.jpg digunakan untuk normalEnhancerCrystas
import normalEnhancerCrystas from "@/assets/icons/crysta_up.jpg"; 
import weaponEnhancerCrystas from "@/assets/icons/enhance_weapon_crysta.png";
import armorEnhancerCrystas from "@/assets/icons/enhance_armor_crysta.png";
import additionalEnhancerCrystas from "@/assets/icons/enhance_additional_crysta.png";
import specialEnhancerCrystas from "@/assets/icons/enhace_special_crysta.png";
 import { parseXtallStats } from '@/utils/parseXtallStats'

const parsedCache = new Map()

function getParsedStats(xtall) {
  if (!parsedCache.has(xtall.code)) {
    parsedCache.set(xtall.code, parseXtallStats(xtall.view))
  }
  return parsedCache.get(xtall.code)
}

const router = useRouter()

function handleResetAll() {
  // 1. Reset State Lokal (seperti yang Anda miliki)
  searchQuery.value = ''
  selectedTypes.value = []
  selectedStats.value = []
  sortOrder.value = 'asc'
  itemsPerPage.value = 10

  // 2. Reset Parameter URL (Advanced Search)
  // Ini akan menghapus ?filter=... sehingga Advanced Search kembali kosong
  router.push({ query: {} })
}
/**
 * COMPONENT PROPS
 */
const props = defineProps({
  isDark: { type: Boolean, default: true }
});

/**
 * VISUAL COLOR ENGINE
 */
const groupColors = {
  "Base Stats": { text: "text-orange-400", border: "border-orange-500/30", accent: "text-orange-500 focus:ring-orange-500" },
  "ATK & DEF": { text: "text-cyan-400", border: "border-cyan-500/30", accent: "text-cyan-500 focus:ring-cyan-500" },
  "Stability, Accuracy, Dodge": { text: "text-blue-400", border: "border-blue-500/30", accent: "text-blue-500 focus:ring-blue-500" },
  "Critical": { text: "text-red-400", border: "border-red-500/30", accent: "text-red-500 focus:ring-red-500" },
  "Speed": { text: "text-pink-400", border: "border-pink-500/30", accent: "text-pink-500 focus:ring-pink-500" },
  "HP & MP": { text: "text-emerald-400", border: "border-emerald-500/30", accent: "text-emerald-500 focus:ring-emerald-500" },
  "Weapon ATK & Element": { text: "text-yellow-400", border: "border-yellow-500/30", accent: "text-yellow-500 focus:ring-yellow-500" },
  "Element Resistance": { text: "text-amber-500", border: "border-amber-500/30", accent: "text-amber-500 focus:ring-amber-500" },
  "Barrier & Defense Effect": { text: "text-green-500", border: "border-green-500/30", accent: "text-green-500 focus:ring-green-500" },
  "Offensive Effect": { text: "text-indigo-400", border: "border-indigo-500/30", accent: "text-indigo-500 focus:ring-indigo-500" },
  "Reduce DMG": { text: "text-teal-400", border: "border-teal-500/30", accent: "text-teal-500 focus:ring-teal-500" },
  "Other Stat": { text: "text-purple-400", border: "border-purple-500/30", accent: "text-purple-500 focus:ring-purple-500" }
};

const statusGroups = { "Base Stats": [ { label: "STR / STR%", value: "STR" }, { label: "INT / INT%", value: "INT" }, { label: "DEX / DEX%", value: "DEX" }, { label: "AGI / AGI%", value: "AGI" }, { label: "VIT / VIT%", value: "VIT" } ], 
"ATK & DEF": [ { label: "ATK / ATK%", value: ".ATK" }, { label: "MATK / MATK%", value: "MATK" }, { label: "DEF", value: ".DEF" }, { label: "MDEF", value: "MDEF" } ], 
"Stability, Accuracy, Dodge": [ { label: "Stability", value: "Stability" }, { label: "Akurasi", value: "Akurasi" }, { label: "Dodge", value: "Dodge" } ], 
"Critical": [ { label: "Critical Rate / CR%", value: "Critical Rate" }, { label: "Critical Damage / CD%", value: "Critical Damage" } ], 
"Speed": [ { label: "ASPD", value: "ASPD" }, { label: "CSPD", value: "CSPD" }, { label: "Motion Speed%", value: "Motion Speed" } ], 
"HP & MP": [ { label: "MaxHP / MaxHP%", value: "MaxHP" }, { label: "MaxMP / MaxMP%", value: "MaxMP" }, { label: "Natural MP Regen", value: "Natural MP Regen" }, { label: "Natural HP Regen", value: "Natural HP Regen" }, { label: "Attack MP Recovery", value: "Attack MP Recovery" } ],
 "Weapon ATK & Element": [ { label: "Weapon ATK", value: "Weapon ATK" }, { label: "DTE (Elements)", value: "stronger against" } ], 
 "Element Resistance": [ { label: "Phys Resistance%", value: "Kekebalan Fisik" }, { label: "Magic Resistance%", value: "Kekebalan Sihir" }, { label: "Light Resistance%", value: "kebal Cahaya" }, { label: "Dark Resistance%", value: "kebal Gelap" }, { label: "Earth Resistance%", value: "kebal Bumi" }, { label: "Fire Resistance%", value: "kebal Api" }, { label: "Water Resistance%", value: "kebal Air" }, { label: "Wind Resistance%", value: "kebal Angin" } ],
  "Barrier & Defense Effect": [ { label: "Fractional Barrier%", value: "Pelindung Fraksional" }, { label: "Ailment Resistance%", value: "Resistansi Status Buruk" }, { label: "Aggro%", value: "Aggro" } ], 
  "Offensive Effect": [ { label: "Physical Pierce%", value: "Physical Pierce" }, { label: "Magic Pierce%", value: "Peneterasi Sihir" }, { label: "Short Range Dmg%", value: "Daya Jarak Dekat" }, { label: "Long Range Dmg%", value: "Daya Jarak Jauh" }, { label: "Unsheathe Attack%", value: "Serangan Menghunus" }, { label: "Additional Melee", value: "Tambahan Fisik" }, { label: "Additional Magic", value: "Tambahan Sihir" }, { label: "Antisipasi", value: "Antisipasi" }, { label: "Guard Break", value: "Guard Break" } ], 
  "Reduce DMG": [ { label: "Reduksi DMG (Sekitar Pemain)", value: "Reduksi DMG (Sekitar Pemain)" }, { label: "Reduksi DMG (Sekitar Musuh)", value: "Reduksi DMG (Sekitar Musuh)" }, { label: "Reduksi DMG (Lantai)", value: "Reduksi DMG (Lantai)" }, { label: "Reduksi DMG (Linear)", value: "Reduksi DMG (Linear)" }, { label: "Reduksi DMG (Bowling)", value: "Reduksi DMG (Bowling)" }, { label: "Reduksi DMG (Terjang)", value: "Reduksi DMG (Terjang)" }, { label: "Reduksi DMG (Peluru)", value: "Reduksi DMG (Peluru)" } ], 
  "Other Stat": [ { label: "Drop Rate%", value: "Drop Rate" }, { label: "EXP%", value: "EXP" }, { label: "Revive Time%", value: "Revive Time" }, { label: "Tumble Unavailable", value: "Tumble Unavailable" }, { label: "Evasion Recharge", value: "Evasion Recharge" }, { label: "Refleks", value: "Refleks" }, { label: "Recoil", value: "Recoil" } ] };


/**
 * RECTIVE STATE
 */
const searchQuery = ref('');
const selectedTypes = ref([]);
const selectedStats = ref([]);
const isStatusOpen = ref(false);
const isTypeOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortOrder = ref('asc');
const statusRef = ref(null);
const typeRef = ref(null);

const route = useRoute()

const advancedFilter = computed(() => {
  try {
    return route.query.filter
      ? JSON.parse(route.query.filter)
      : null
  } catch {
    return null
  }
})

function parseStatsFromView(viewText) {
  const result = {}
  if (!viewText) return result

  viewText.split('\n').forEach(line => {
    const match = line.match(/(.+?)\s([+-])\s?(\d+)/)
    if (match) {
      const [, name, sign, value] = match
      result[name.trim().toUpperCase()] = {
        sign,
        value: Number(value)
      }
    }
  })

  return result
}


 /** LOGIC METHODS
 */
 const toggleTypeDropdown = () => {
  isTypeOpen.value = !isTypeOpen.value;
  if (isTypeOpen.value) isStatusOpen.value = false; // Tutup Status jika Type dibuka
};

const toggleStatusDropdown = () => {
  isStatusOpen.value = !isStatusOpen.value;
  if (isStatusOpen.value) isTypeOpen.value = false; // Tutup Type jika Status dibuka
};

const toggleType = (type) => {
  const index = selectedTypes.value.indexOf(type);
  if (index === -1) {
    selectedTypes.value.push(type); // Masukkan jika belum ada
  } else {
    selectedTypes.value.splice(index, 1); // Hapus jika sudah ada
  }
};

// Fungsi Toggle Stat
const toggleStat = (stat) => {
  const index = selectedStats.value.indexOf(stat);
  if (index === -1) {
    selectedStats.value.push(stat);
  } else {
    selectedStats.value.splice(index, 1);
  }
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedTypes.value = [];
  selectedStats.value = [];
  currentPage.value = 1;
};

const getIconPath = (xtall) => {
  const type = xtall.type?.toUpperCase();

  // Kalau bukan upgrade
  if (type !== 'UPGRADE') {
    return iconMap[type] || normalCrystas;
  }

  // Kalau upgrade → cari root type
  const rootType = findRootType(xtall);
  return iconMap[`${rootType}_UPGRADE`] || normalEnhancerCrystas;
};


const getBadgeColor = (type) => {
  const map = { 
    'NORMAL': 'bg-blue-500/10 text-blue-500 border-blue-500/40', 
    'UPGRADE': 'bg-purple-500/10 text-purple-500 border-purple-500/40', 
    'ADDITIONAL': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/40', 
    'WEAPON': 'bg-red-500/10 text-red-500 border-red-500/40', 
    'ARMOR': 'bg-green-500/10 text-green-500 border-green-500/40', 
    'SPECIAL': 'bg-pink-500/10 text-pink-500 border-pink-500/40' 
  };
  return map[type?.toUpperCase()] || 'bg-slate-500/10 text-slate-500 border-slate-500/40';
};

const getBaseFor = (xtall) => {
  if (!xtall.link) return null;
  return crystalData.find(c => String(c.code) === String(xtall.link));
};

const getEvoFor = (xtall) => {
  return crystalData.filter(c => String(c.link) === String(xtall.code));
};
const displayTypes = [
  { label: 'Weapon Crystas', value: 'WEAPON' },
  { label: 'Weapon Enhancer Crystas', value: 'WEAPON_UPGRADE' },

  { label: 'Armor Crystas', value: 'ARMOR' },
  { label: 'Armor Enhancer Crystas', value: 'ARMOR_UPGRADE' },

  { label: 'Additional Crystas', value: 'ADDITIONAL' },
  { label: 'Additional Enhancer Crystas', value: 'ADDITIONAL_UPGRADE' },

  { label: 'Normal Crystas', value: 'NORMAL' },
  { label: 'Normal Enhancer Crystas', value: 'NORMAL_UPGRADE' },

  { label: 'Special Crystas', value: 'SPECIAL' },
  { label: 'Special Enhancer Crystas', value: 'SPECIAL_UPGRADE' }
];
const iconMap = {
  NORMAL: normalCrystas,
  UPGRADE: normalEnhancerCrystas,

  ADDITIONAL: additionalCrystas,
  ADDITIONAL_UPGRADE: additionalEnhancerCrystas,

  ARMOR: armorCrystas,
  ARMOR_UPGRADE: armorEnhancerCrystas,

  WEAPON: weaponCrystas,
  WEAPON_UPGRADE: weaponEnhancerCrystas,

  SPECIAL: specialCrystas,
  SPECIAL_UPGRADE: specialEnhancerCrystas,
};


const getTypeLabel = (type) => {
  const t = type.toUpperCase();

  const isEnhancer = t === 'UPGRADE' || t === 'ENHANCER';

  const rootMap = {
    WEAPON: 'Weapon',
    ARMOR: 'Armor',
    ADDITIONAL: 'Additional',
    NORMAL: 'Normal',
    SPECIAL: 'Special'
  };

  // Kalau DB sudah kasih full info
  if (rootMap[t]) {
    return `${rootMap[t]} Crystas`;
  }

  // Untuk UPGRADE / ENHANCER
  if (isEnhancer) {
    return 'Enhancer Crystas';
  }

  return `${type} Crystas`;
};

/**
 * ROOT XTALL RESOLVER (BASE XTALL)
 */
const findRootItem = (item) => {
  if (!item) return null;

  let current = item;
  let safety = 0;

  while (current.link && safety < 10) {
    const parent = crystalData.find(
      c => String(c.code) === String(current.link)
    );
    if (!parent) break;
    current = parent;
    safety++;
  }

  return current;
};

const findRootType = (item) => {
  const root = findRootItem(item);
  return root?.type?.toUpperCase() || 'NORMAL';
};

/**
 * LABEL COLOR ENGINE (FOLLOW BASE XTALL)
 */
const getLabelColor = (xtall) => {
  if (!xtall) return 'text-cyan-500';

  const type = xtall.type?.toUpperCase();

  // Upgrade / Enhancer selalu abu
  if (type === 'UPGRADE' || type === 'ENHANCER') {
    return 'text-gray-400';
  }

  const rootType = findRootType(xtall);

  const map = { 
    WEAPON: 'text-red-500',
    ARMOR: 'text-green-500',
    NORMAL: 'text-sky-500',
    ADDITIONAL: 'text-yellow-500',
    SPECIAL: 'text-purple-500'
  };

  return map[rootType] || 'text-cyan-500';
};


const parseStats = (view) => {
  if (!view) return [];
  return Array.isArray(view) ? view : view.split(/,|\n/).map(s => s.trim()).filter(s => s);
};

const setSearch = (name) => { 
  searchQuery.value = name; 
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
};

/**
 * COMPUTED ENGINE
 */
const filteredResults = computed(() => {
  let res = crystalData.filter(c => c.name?.trim());
  if (advancedFilter.value?.stats) {
  res = res.filter(c => {
    const parsed = getParsedStats(c)

    return Object.entries(advancedFilter.value.stats).every(
  ([statName, rule]) => {
    const stat = parsed[statName.toUpperCase()]
    if (!stat) return false

    // tanda + / -
    if (stat.sign !== rule.sign) return false

    // nilai (0 AMAN)
    if (rule.value !== null) {
      if (rule.op === '>=' && stat.value < rule.value) return false
      if (rule.op === '<=' && stat.value > rule.value) return false
    }

    return true
  }
)

  })
}
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    res = res.filter(c => c.name.toLowerCase().includes(q));
  }
  
if (selectedTypes.value.length > 0) {
  res = res.filter(c => {
    const rootType = findRootType(c); // WEAPON / ARMOR / etc
    const isUpgrade = c.type === 'UPGRADE';

    return selectedTypes.value.some(sel => {
      // contoh: WEAPON
      if (!sel.includes('_')) {
        return !isUpgrade && rootType === sel;
      }

      // contoh: WEAPON_UPGRADE
      const [base, kind] = sel.split('_');
      return (
        kind === 'UPGRADE' &&
        isUpgrade &&
        rootType === base
      );
    });
  });
}

  
  if (selectedStats.value.length > 0) {
    res = res.filter(c => {
      const vText = (c.view || "").toUpperCase();
      return selectedStats.value.every(s => vText.includes(s.toUpperCase()));
    });
  }
  
  return res.sort((a, b) => {
    return sortOrder.value === 'asc' 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name);
  });
});

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredResults.value.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() => Math.ceil(filteredResults.value.length / itemsPerPage.value) || 1);

const visiblePages = computed(() => {
  let start = Math.max(1, currentPage.value - 2);
  let end = Math.min(totalPages.value, start + 4);
  if (end - start < 4) start = Math.max(1, end - 4);
  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);
  return pages;
});

/**
 * LIFECYCLE & UTILITIES
 */
const closeOnOutside = (e) => {
  if (statusRef.value && !statusRef.value.contains(e.target)) isStatusOpen.value = false;
  if (typeRef.value && !typeRef.value.contains(e.target)) isTypeOpen.value = false;
};

onMounted(() => {
  window.addEventListener('click', closeOnOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', closeOnOutside);
});

watch([searchQuery, selectedTypes, selectedStats, itemsPerPage, sortOrder], () => {
  currentPage.value = 1;
});
</script>

<style scoped>
/* CUSTOM SCROLLBAR REFINEMENT */
.custom-scroll::-webkit-scrollbar { width: 16px; }
.custom-scroll::-webkit-scrollbar-track { background: transparent; }
.custom-scroll::-webkit-scrollbar-thumb { 
  background: rgba(59, 130, 246, 0.2); 
  border-radius: 20px;
  border: 2px solid transparent;
  background-clip: content-box;
}
.custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.5); }

.scroll-hide::-webkit-scrollbar { display: none; }

/* ANIMATION KEYFRAMES */
.animate-entry { 
  animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
  opacity: 0; 
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px) scale(0.98); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}

.animate-shimmer {
  animation: shimmer-effect 4s infinite linear;
  background-size: 200% 100%;
}

@keyframes shimmer-effect {
  0% { transform: translateX(-150%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateX(150%); opacity: 0; }
}

/* TRANSITIONS */
.dropdown-slide-enter-active { animation: ds-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.dropdown-slide-leave-active { animation: ds-out 0.3s cubic-bezier(0.7, 0, 0.84, 0); }

@keyframes ds-in {
  from { opacity: 0; transform: translateY(-12px) scale(0.95); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}

@keyframes ds-out {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(-8px) scale(0.98); filter: blur(4px); }
}

/* INTERACTIVE HUD */
input:focus::placeholder {
  transform: translateX(10px);
  opacity: 0;
  transition: all 0.4s;
}
</style>