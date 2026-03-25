<script setup>
import { ref, onMounted } from 'vue'
import AppLayout from './Layouts/AppLayout.vue'

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
  <div class="selection:bg-indigo-500 selection:text-white">
    
    <div v-if="isDark" class="smoke-container">
      <div class="smoke smoke-1"></div>
      <div class="smoke smoke-2"></div>
      <div class="smoke smoke-3"></div>
    </div>

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
/* --- 1. RESET & DOUBLE SCROLL FIX --- */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; 
  background-color: transparent;
}

/* --- 2. SCROLLBAR MODERN WITH BUTTONS --- */

/* The main scrollbar bar */
::-webkit-scrollbar {
  width: 14px; /* Slightly wider to accommodate buttons better */
}

/* The background of the scrollbar */
::-webkit-scrollbar-track {
  background: #4a4a4a94;
}

.dark ::-webkit-scrollbar-track {
  background: #dcdcdc67;
}

/* The draggable handle (Thumb) */
::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  background-clip: padding-box;
  border-radius: 10px;
  /* Light Mode: Gradasi Kuning ke Oranye */
  background-image: linear-gradient(180deg, rgba(237, 202, 2, 0.98) 0%, #ff8c00 100%);
  transition: all 0.3s;
}

.dark ::-webkit-scrollbar-thumb {
  /* Dark Mode: Gradasi Ungu ke Pink Neon */
  background-image: linear-gradient(180deg, rgba(128, 16, 126, 0.8) 0%, #ff007f 100%);
  box-shadow: inset 0 0 10px rgba(84, 1, 30, 0.2);
}

::-webkit-scrollbar-thumb:hover {
  /* Hover Light Mode */
  background-image: linear-gradient(180deg, #ff6303 0%, #ff4500 100%);
}

.dark ::-webkit-scrollbar-thumb:hover {
  /* Hover Dark Mode */
  background-image: linear-gradient(180deg, rgb(55, 142, 255) 0%, #00fbff 100%);
}
/* --- THE BUTTONS (Arrows) --- */

::-webkit-scrollbar-button:single-button {
  background-color: #e0e0e0;
  display: block;
  background-size: 10px;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
}

.dark ::-webkit-scrollbar-button:single-button {
  background-color: #333;
}

/* Up Button Icon */
::-webkit-scrollbar-button:single-button:vertical:decrement {
  background-position: center 4px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black'><polygon points='50,00 0,100 100,100'/></svg>");
}

.dark ::-webkit-scrollbar-button:single-button:vertical:decrement {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'><polygon points='50,00 0,100 100,100'/></svg>");
}

/* Down Button Icon */
::-webkit-scrollbar-button:single-button:vertical:increment {
  background-position: center 2px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black'><polygon points='0,0 100,0 50,100'/></svg>");
}

.dark ::-webkit-scrollbar-button:single-button:vertical:increment {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'><polygon points='0,0 100,0 50,100'/></svg>");
}

::-webkit-scrollbar-button:hover {
  background-color: #ccc;
}

.dark ::-webkit-scrollbar-button:hover {
  background-color: #444;
}

/* --- 3. EFEK ASAP (SMOKE ANIMATION) --- */
.smoke-container {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.6;
}

.smoke {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  animation: drift 20s infinite linear;
}

.smoke-1 { top: -20%; left: -20%; animation-duration: 25s; }
.smoke-2 { bottom: -20%; right: -20%; animation-duration: 35s; animation-direction: reverse; }
.smoke-3 { top: 20%; left: 50%; animation-duration: 30s; opacity: 0.4; }

@keyframes drift {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  50% { transform: translate(10%, 15%) rotate(10deg) scale(1.2); }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); }
}

/* --- 4. ANIMASI TRANSISI HALAMAN --- */
.slide-page-enter-active,
.slide-page-leave-active {
  transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

.slide-page-enter-from {
  opacity: 0;
  transform: translateX(60px); 
  filter: blur(10px);
}

.slide-page-leave-to {
  opacity: 0;
  transform: translateX(-60px);
  filter: blur(10px);
}
</style>