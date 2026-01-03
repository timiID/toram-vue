import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- Mengambil dari file index.js di atas
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')