import Vue from 'vue'
import VueRouter from 'vue-router'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Film from '@/views/Film'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/center',
    name: 'Center',
    component: Center
  },
  {
    path: '/film',
    name: 'Film',
    component: Film
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
