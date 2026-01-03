<script setup>
import { ref, onMounted } from 'vue'
import AppLayout from './layouts/AppLayout.vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <div class="min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
    <AppLayout :isDark="isDark" @toggleDark="toggleDark">
      <router-view v-slot="{ Component }">
        <transition name="slide-page" mode="out-in">
          <component :is="Component" :isDark="isDark" />
        </transition>
      </router-view>
    </AppLayout>
  </div>
</template>

<style>
/* --- ANIMASI GESER KANAN KE KIRI --- */
.slide-page-enter-active,
.slide-page-leave-active {
  /* Menggunakan cubic-bezier agar gerakan terasa 'meluncur' premium */
  transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

/* Halaman baru masuk dari arah kanan */
.slide-page-enter-from {
  opacity: 0;
  transform: translateX(60px); 
  filter: blur(10px); /* Tambahan efek blur saat transisi agar lebih estetik */
}

/* Halaman lama keluar ke arah kiri */
.slide-page-leave-to {
  opacity: 0;
  transform: translateX(-60px);
  filter: blur(10px);
}

/* Base Clean Style */
body { 
  margin: 0; 
  padding: 0; 
  background: transparent !important; 
  overflow-x: hidden; /* Mencegah munculnya scrollbar horizontal saat animasi */
}
</style>