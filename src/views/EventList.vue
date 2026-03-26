<template>
  <div class="max-w-6xl mx-auto space-y-10 p-4 text-slate-900 dark:text-white">
    
    <div class="flex justify-start">
      <button 
        @click="goBack" 
        class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-rose-500 hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest border border-transparent hover:border-rose-400"
      >
        <span class="transform group-hover:-translate-x-1 transition-transform">←</span>
        {{ lang === 'id' ? 'Kembali' : 'Back' }}
      </button>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left space-y-2">
        <h1 class="text-3xl md:text-5xl font-black italic tracking-tighter uppercase">
          ANNUAL <span class="text-rose-500">EVENTS</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400 font-bold text-xs tracking-[0.2em] uppercase">
          {{ t('subtitle') }}
        </p>
      </div>
      
      <div class="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border dark:border-white/10">
        <button @click="lang = 'en'" :class="lang === 'en' ? 'bg-rose-500 text-white' : 'text-slate-500'" class="px-4 py-1.5 rounded-lg text-xs font-black transition-all">EN</button>
        <button @click="lang = 'id'" :class="lang === 'id' ? 'bg-rose-500 text-white' : 'text-slate-500'" class="px-4 py-1.5 rounded-lg text-xs font-black transition-all">ID</button>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <div class="relative flex-2 w-full">
        <input v-model="searchQuery" type="text" :placeholder="t('searchPlaceholder')" 
          class="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-rose-500 transition-all outline-none h-[50px]" />
      </div>

      <div class="relative w-full sm:w-72">
        <button 
          @click.stop="isMonthOpen = !isMonthOpen"
          class="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl px-5 py-3 text-sm flex justify-between items-center hover:ring-2 hover:ring-rose-500/50 transition-all h-[50px]"
        >
          <span class="font-bold">{{ getSelectedMonthName() }}</span>
          <span :class="{'rotate-180': isMonthOpen}" class="transition-transform duration-300 opacity-50 text-[10px]">▼</span>
        </button>

        <div v-if="isMonthOpen" 
          class="absolute z-[100] w-full mt-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border dark:border-white/10 overflow-hidden"
        >
          <div class="max-h-[140px] overflow-y-auto custom-scrollbar p-2 space-y-1">
            <div 
              @click="selectMonth('all')"
              class="px-4 py-2.5 rounded-xl hover:bg-rose-500 hover:text-white cursor-pointer text-sm font-bold transition-all"
              :class="selectedMonth === 'all' ? 'bg-rose-500/10 text-rose-500' : ''"
            >
              {{ lang === 'id' ? 'Semua Bulan' : 'All Months' }}
            </div>
            <div 
              v-for="m in monthOptions" :key="m.val"
              @click="selectMonth(m.val)"
              class="px-4 py-2.5 rounded-xl hover:bg-rose-500 hover:text-white cursor-pointer text-sm font-bold transition-all"
              :class="selectedMonth === m.val ? 'bg-rose-500/10 text-rose-500' : ''"
            >
              {{ m.name[lang] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="liveEvents.length > 0 && currentPage === 1" class="space-y-4">
      <div class="flex items-center gap-2 px-2">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
        <h2 class="text-sm font-black uppercase tracking-[0.2em] text-rose-500">Live Event</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(event, index) in liveEvents" :key="'live-'+index"
          class="group relative overflow-hidden rounded-3xl border-4 border-yellow-300 transition-all duration-500 shadow-xl shadow-rose-500/10 bg-white dark:bg-slate-900">
          <div class="p-6 space-y-4 relative z-10">
             <div class="flex justify-between items-center">
                <div class="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-rose-500 text-white">
                  {{ event.period[lang] }}
                </div>
                <span class="text-[10px] font-black text-rose-500 uppercase">Current Event</span>
             </div>
             <div class="flex items-center gap-3">
               <span class="text-2xl">{{ event.icon }}</span>
               <h3 class="text-lg font-black leading-tight uppercase">{{ event.title[lang] }}</h3>
             </div>
             <p class="text-xs font-medium opacity-70 leading-relaxed">{{ event.desc[lang] }}</p>
          </div>
        </div>
      </div>
      <hr class="border-slate-200 dark:border-white/5 mx-2" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(event, index) in paginatedEvents" :key="index"
        class="group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-slate-900/40 border-slate-200 dark:border-white/10 hover:border-rose-500/50">
        
        <div class="absolute -right-4 -top-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity grayscale group-hover:grayscale-0">
          {{ event.icon }}
        </div>

        <div class="p-6 space-y-4 relative z-10">
          <div class="flex justify-between items-center">
            <div class="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-rose-500/10 text-rose-500 border border-rose-500/20">
              {{ event.period[lang] }}
            </div>
            <div v-if="isEventLive(event.monthKeys)" class="flex items-center gap-1.5">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span class="text-[10px] font-black text-rose-500 uppercase tracking-wider">Live Now</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ event.icon }}</span>
            <h3 class="text-lg font-black leading-tight uppercase tracking-tight">
              {{ event.title[lang] }}
            </h3>
          </div>

          <p class="text-xs font-medium opacity-70 leading-relaxed min-h-[3em]">
            {{ event.desc[lang] }}
          </p>

          <div class="flex flex-wrap gap-2 pt-2">
            <span v-for="tag in event.tags[lang]" :key="tag" class="text-[9px] px-2 py-0.5 rounded bg-slate-500/10 opacity-60">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="totalPages > 1" class="flex flex-col items-center gap-6 pt-10">
      <div class="flex items-center gap-2">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" 
          class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 disabled:opacity-20 transition-all hover:bg-rose-500 hover:text-white font-black">
          «
        </button>

        <template v-for="page in displayedPages" :key="page">
          <button v-if="page !== '...'" @click="changePage(page)"
            :class="currentPage === page ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-500/10'"
            class="w-10 h-10 rounded-xl font-black text-sm transition-all">
            {{ page }}
          </button>
          <span v-else class="w-10 text-center opacity-40 font-black">...</span>
        </template>

        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
          class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 disabled:opacity-20 transition-all hover:bg-rose-500 hover:text-white font-black">
          »
        </button>
      </div>

      <button @click="itemsPerPage = 999; currentPage = 1" v-if="itemsPerPage !== 999"
        class="px-10 py-4 bg-rose-500 text-white rounded-2xl font-black italic tracking-widest uppercase hover:scale-105 transition-transform shadow-xl shadow-rose-500/20 text-sm">
        Show All
      </button>
    </div>

    <div v-if="filteredEvents.length === 0" class="text-center py-20 opacity-40">
      <p class="italic font-bold">{{ t('noResults') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps(['isDark']);
const lang = ref('id');
const searchQuery = ref('');
const selectedMonth = ref('all');
const isMonthOpen = ref(false); // State untuk dropdown
const currentPage = ref(1);
const itemsPerPage = ref(6);

const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');

const translations = {
  en: {
    subtitle: "Toram Online Yearly Event Calendar & Guides",
    searchPlaceholder: "🔍︎ Search event or month...",
    noResults: "No events found for your search."
  },
  id: {
    subtitle: "Kalender Event Tahunan & Panduan Toram Online",
    searchPlaceholder: "🔍︎ Cari event atau bulan...",
    noResults: "Event tidak ditemukan."
  }
};

const monthOptions = [
  { val: '01', name: { id: 'Januari', en: 'January' } },
  { val: '02', name: { id: 'Februari', en: 'February' } },
  { val: '03', name: { id: 'Maret', en: 'March' } },
  { val: '04', name: { id: 'April', en: 'April' } },
  { val: '05', name: { id: 'Mei', en: 'May' } },
  { val: '06', name: { id: 'Juni', en: 'June' } },
  { val: '07', name: { id: 'Juli', en: 'July' } },
  { val: '08', name: { id: 'Agustus', en: 'August' } },
  { val: '09', name: { id: 'September', en: 'September' } },
  { val: '10', name: { id: 'Oktober', en: 'October' } },
  { val: '11', name: { id: 'November', en: 'November' } },
  { val: '12', name: { id: 'Desember', en: 'December' } },
  { val: '13', name: { id: 'Event Akhir/Spesial', en: 'End/ Special Event' } }
];

const t = (key) => translations[lang.value][key];
const isEventLive = (monthKeys) => monthKeys.includes(currentMonth);

// Fungsi untuk Dropdown
const getSelectedMonthName = () => {
  if (selectedMonth.value === 'all') return lang.value === 'id' ? 'Semua Bulan' : 'All Months';
  const month = monthOptions.find(m => m.val === selectedMonth.value);
  return month ? month.name[lang.value] : '';
};

const selectMonth = (val) => {
  selectedMonth.value = val;
  isMonthOpen.value = false;
};

// Tutup dropdown jika klik di luar
const closeDropdown = () => { isMonthOpen.value = false; };
onMounted(() => window.addEventListener('click', closeDropdown));
onUnmounted(() => window.removeEventListener('click', closeDropdown));

const eventList = [
  { 
    title: { en: 'Hatsumode (Tahun Baru)', id: 'Hatsumode (New Year)' }, 
    icon: '🎍', 
    monthKeys: ['01'],
    period: { en: 'January', id: 'Januari' }, 
    desc: { en: 'Traditional shrine visit to celebrate the new year.', id: 'Kunjungan kuil tradisional untuk merayakan tahun baru.' },
    tags: { en: ['NewYear'], id: ['TahunBaru'] }
  },
  { 
    title: { en: 'Zodiac (Otoshidama Battle) Event', id: 'Event Shio (Otoshidama Battle)' }, 
    icon: '🐉', 
    monthKeys: ['01', '02'],
    period: { en: 'January~February', id: 'Januari~Februari' }, 
    desc: { en: 'Special battle against the animal of the year.', id: 'Pertarungan spesial melawan hewan shio tahun ini.' },
    tags: { en: ['Zodiac'], id: ['Shio'] }
  },
  { 
    title: { en: 'Lunar New Year', id: 'Imlek' }, 
    icon: '🧧', 
    monthKeys: ['01', '02'],
    period: { en: 'January~February', id: 'Januari~Februari' }, 
    desc: { en: 'Celebrate the spring festival with red envelopes.', id: 'Rayakan festival musim semi dengan angpao.' },
    tags: { en: ['Lunar'], id: ['Imlek'] }
  },
  { 
    title: { en: 'Boss Battle', id: 'Bos Battle' }, 
    icon: '⚔️', 
    monthKeys: ['01'],
    period: { en: 'January', id: 'Januari' }, 
    desc: { en: 'High difficulty challenge for veteran players.', id: 'Tantangan tingkat tinggi untuk pemain veteran.' },
    tags: { en: ['Challenge'], id: ['Tantangan'] }
  },
  { 
    title: { en: 'Snowball Battle Fight', id: 'Perang Bola Salju' }, 
    icon: '☃️', 
    monthKeys: ['02', '03', '04'],
    period: { en: 'February~April', id: 'Februari~April' }, 
    desc: { en: 'Throw snowballs in a mini-game to get rare items.', id: 'Mini-game lempar salju untuk dapetin koin dan item langka.' },
    tags: { en: ['MiniGame'], id: ['MiniGame'] }
  },
  { 
    title: { en: 'Valentine Day', id: 'Hari Valentine' }, 
    icon: '💝', 
    monthKeys: ['02', '03'],
    period: { en: 'February~March', id: 'Februari~Maret' }, 
    desc: { en: 'Collect chocolate and sweet cooking recipes.', id: 'Kumpulkan cokelat dan resep masakan manis.' },
    tags: { en: ['Cooking'], id: ['Masak'] }
  },
  { 
    title: { en: 'White Day', id: 'White Day' }, 
    icon: '🤍', 
    monthKeys: ['03', '04'],
    period: { en: 'March~April', id: 'Maret~April' }, 
    desc: { en: 'Gift exchange event and special seasonal bosses.', id: 'Event tukar kado dan bos musiman spesial.' },
    tags: { en: ['Gift'], id: ['Hadiah'] }
  },
  { 
    title: { en: 'Easter Event', id: 'Event Paskah' }, 
    icon: '🥚', 
    monthKeys: ['04'],
    period: { en: 'April', id: 'April' }, 
    desc: { en: 'Hunt for colorful eggs across the world.', id: 'Berburu telur warna-warni di seluruh dunia.' },
    tags: { en: ['EggHunt'], id: ['CariTelur'] }
  },
  { 
    title: { en: '(Spring) Hanami', id: '(Musim Semi) Hanami' }, 
    icon: '🌸', 
    monthKeys: ['04', '05'],
    period: { en: 'April~May', id: 'April~Mei' }, 
    desc: { en: 'Enjoy cherry blossoms with spring-themed bosses.', id: 'Menikmati bunga sakura dengan boss musim semi.' },
    tags: { en: ['Sakura'], id: ['Sakura'] }
  },
  { 
    title: { en: 'Golden Week', id: 'Golden Week' }, 
    icon: '🎏', 
    monthKeys: ['04', '05'],
    period: { en: 'April~May', id: 'April~Mei' }, 
    desc: { en: 'Golden monsters and EXP/Drop rate bonuses.', id: 'Monster emas dan bonus EXP/Drop.' },
    tags: { en: ['Buff'], id: ['Buff'] }
  },
  { 
    title: { en: 'Bride Event', id: 'Event Pengantin' }, 
    icon: '💒', 
    monthKeys: ['06'],
    period: { en: 'June', id: 'Juni' }, 
    desc: { en: 'Marriage-themed event and bridal equipment.', id: 'Event bertema pernikahan dan gear pengantin.' },
    tags: { en: ['Marriage'], id: ['Menikah'] }
  },
  { 
    title: { en: 'Rainy Season Event', id: 'Event Musim Hujan' }, 
    icon: '☔', 
    monthKeys: ['06'],
    period: { en: 'June', id: 'Juni' }, 
    desc: { en: 'Special monsters appearing during the rainy season.', id: 'Monster spesial yang muncul saat musim hujan.' },
    tags: { en: ['Rainy'], id: ['Hujan'] }
  },
  { 
    title: { en: 'Boss Battle Event', id: 'Event Bos Battle' }, 
    icon: '🏆', 
    monthKeys: ['06', '07'],
    period: { en: 'June~July', id: 'Juni~Juli' }, 
    desc: { en: 'Challenging arena against powerful bosses.', id: 'Arena menantang melawan bos-bos kuat.' },
    tags: { en: ['Arena'], id: ['Arena'] }
  },
  { 
    title: { en: 'Anniversary Countdown', id: 'Anniversary Countdown' }, 
    icon: '⏳', 
    monthKeys: ['06', '07'],
    period: { en: 'June~July', id: 'Juni~Juli' }, 
    desc: { en: 'Preparation for the grand anniversary celebration.', id: 'Persiapan menyambut perayaan ulang tahun.' },
    tags: { en: ['Countdown'], id: ['PreEvent'] }
  },
  { 
    title: { en: 'Anniversary', id: 'Anniversary' }, 
    icon: '🏅', 
    monthKeys: ['07', '08'],
    period: { en: 'July~August', id: 'Juli~Agustus' }, 
    desc: { en: 'Toram Online grand birthday celebration.', id: 'Perayaan ulang tahun besar Toram Online.' },
    tags: { en: ['Celebration'], id: ['Perayaan'] }
  },
  { 
    title: { en: 'Summer', id: 'Summer' }, 
    icon: '🏖️', 
    monthKeys: ['07', '08', '09'],
    period: { en: 'July~September', id: 'Juli~September' }, 
    desc: { en: 'Diving and water-themed boss battles.', id: 'Menyelam dan pertarungan bos bertema air.' },
    tags: { en: ['Beach'], id: ['Pantai'] }
  },
  { 
    title: { en: 'Otsukimi', id: 'Otsukimi' }, 
    icon: '🌾', 
    monthKeys: ['09'],
    period: { en: 'September', id: 'September' }, 
    desc: { en: 'Moon viewing festival and Moon Rabbit hunt.', id: 'Festival melihat bulan dan berburu kelinci bulan.' },
    tags: { en: ['Moon'], id: ['Bulan'] }
  },
  { 
    title: { en: 'Autumn', id: 'Musim Gugur' }, 
    icon: '🍁', 
    monthKeys: ['09', '10'],
    period: { en: 'September~October', id: 'September~Oktober' }, 
    desc: { en: 'Celebrate the harvest with seasonal gear.', id: 'Rayakan panen dengan gear musim gugur.' },
    tags: { en: ['Harvest'], id: ['Panen'] }
  },
  { 
    title: { en: 'Halloween', id: 'Halloween' }, 
    icon: '🎃', 
    monthKeys: ['10', '11'],
    period: { en: 'October~November', id: 'Oktober~November' }, 
    desc: { en: 'Trick or Treat! Puzzle-filled story chapters.', id: 'Trik or Treat! Chapter cerita penuh puzzle.' },
    tags: { en: ['Spooky'], id: ['Seram'] }
  },
  { 
    title: { en: 'Christmas Event', id: 'Event Natal' }, 
    icon: '🎄', 
    monthKeys: ['11', '12'],
    period: { en: 'November~December', id: 'November~Desember' }, 
    desc: { en: 'Gift exchange and winter boss battles.', id: 'Tukar kado dan pertarungan bos musim dingin.' },
    tags: { en: ['Xmas'], id: ['Natal'] }
  },
  { 
    title: { en: 'Megiston', id: 'Megiston' }, 
    icon: '⚔️', 
    monthKeys: ['12'],
    period: { en: 'End/ Special Event', id: 'Event Akhir/Spesial' }, 
    desc: { en: 'The brutal combat tournament by hero Megiston.', id: 'Turnamen tempur brutal oleh pahlawan Megiston.' },
    tags: { en: ['Tournament'], id: ['Turnamen'] }
  }
];

const goBack = () => {
  window.history.back();
};

const liveEvents = computed(() => {
  const search = searchQuery.value.toLowerCase();
  return eventList.filter(event => {
    const isLive = isEventLive(event.monthKeys);
    const matchesSearch = event.title[lang.value].toLowerCase().includes(search) || 
                          event.period[lang.value].toLowerCase().includes(search);
    const matchesMonth = selectedMonth.value === 'all' || event.monthKeys.includes(selectedMonth.value);
    return isLive && matchesSearch && matchesMonth;
  });
});

const filteredEvents = computed(() => {
  const search = searchQuery.value.toLowerCase();
  return eventList.filter(event => {
    const matchesSearch = event.title[lang.value].toLowerCase().includes(search) || 
                          event.period[lang.value].toLowerCase().includes(search);
    const matchesMonth = selectedMonth.value === 'all' || event.monthKeys.includes(selectedMonth.value);
    return matchesSearch && matchesMonth;
  });
});

const totalPages = computed(() => {
  return Math.ceil(filteredEvents.value.length / itemsPerPage.value);
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredEvents.value.slice(start, end);
});

watch([searchQuery, selectedMonth], () => {
  currentPage.value = 1;
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const displayedPages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 1;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
});
</script>

<style scoped>
/* Scrollbar halus untuk dropdown */
.custom-scrollbar::-webkit-scrollbar {
  width: 14px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f43f5e;
  border-radius: 10px;
}
</style>