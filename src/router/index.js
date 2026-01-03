import { createRouter, createWebHashHistory } from 'vue-router'

// Import semua view Anda
import ListBag from '../views/ListBag.vue' 
import MainQuest from '../views/MainQuest.vue'
import XtallView from '../views/XtallView.vue'
import CalculatorMQ from '../views/CalculatorMQ.vue'
import BSCalculator from '../views/BSCalculator.vue'

const routes = [
  {
    path: '/',
    name: 'bag',
    component: ListBag 
  },
  {
    path: '/mq',
    name: 'mainquest',
    component: MainQuest 
  },
  {
    path: '/mq-calc', 
    name: 'mqcalc', 
    component: CalculatorMQ 
  },
  {
    path: '/bs-calc', // <--- Pastikan penulisan ini sama dengan di Navigation.vue
    name: 'bs-calc',
    component: BSCalculator
  },
  {
    path: '/xtall',
    name: 'xtall',
    component: XtallView
  }
]

const router = createRouter({
  // Gunakan Hash History untuk kompatibilitas hosting
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router