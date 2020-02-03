import Vue from 'vue'
import VueRouter from 'vue-router'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Film from '@/views/Film'
import FilmNowplaying from '@/views/Film/Nowplaying'
import FilmComingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'

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
    component: Film,
    // 设置二级路由
    children: [
      {
        path: 'nowplaying',
        component: FilmNowplaying,
        name: FilmNowplaying
      },
      {
        path: 'comingsoon',
        component: FilmComingsoon
      }
    ]
  },
  {
    // nowplaying 列表详情页
    // 动态路由, id作为占位符
    path: '/detail/:id',
    component: Detail
  }
  // ,
  // redirect, default: film page
  // {
  //   path: '*',
  //   name: 'redirect',
  //   component: Film
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
