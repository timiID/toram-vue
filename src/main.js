import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// fallback title (kalau belum ada)
if (!document.title) {
  document.title = 'Timi DB Vue | Toram Online Database'
}

const app = createApp(App)
app.use(router)
app.mount('#app')
