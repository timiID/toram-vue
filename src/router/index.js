import { createRouter, createWebHashHistory } from 'vue-router'

import ListBag from '../views/ListBag.vue'
import MainQuest from '../views/MainQuest.vue'
import XtallView from '../views/XtallView.vue'
import CalculatorMQ from '../views/CalculatorMQ.vue'
import BSCalculator from '../views/BSCalculator.vue'
import XtallDetail from '../views/XtallDetail.vue'

const routes = [
  {
    path: '/',
    name: 'bag',
    component: ListBag
  },
  {
    path: '/mq',
    name: 'main-quest',
    component: MainQuest
  },
  {
    path: '/mq-calc',
    name: 'mq-calc',
    component: CalculatorMQ
  },
  {
    path: '/bs-calc',
    name: 'bs-calc',
    component: BSCalculator
  },
  {
    path: '/xtall',
    name: 'xtall',
    component: XtallView
  },
  {
    path: '/xtall/:id',
    name: 'xtall-detail',
    component: XtallDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
