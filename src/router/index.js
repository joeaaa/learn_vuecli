import Vue from 'vue'
import VueRouter from 'vue-router'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Film from '@/views/Film'
import FilmNowplaying from '@/views/Film/Nowplaying'
import FilmComingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(VueRouter)

// user登陆 全局验证
const globalAuth = {
  isLogin () {
    return false
  }
}

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
        name: 'FilmNowplaying'
      },
      {
        path: 'comingsoon',
        component: FilmComingsoon,
        name: 'FilmComingsoon'
      }
    ]
  },
  {
    // nowplaying 列表详情页
    // 动态路由, id作为占位符
    path: '/detail/:id',
    component: Detail,
    name: 'nowPlayingDetail'
  },
  // 登陆页面
  {
    path: '/login',
    component: Login,
    name: 'Login'
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 访问center时 全局守卫
router.beforeEach((to, from, next) => {
  // 当前往center，判断用户登陆情况
  if (to.path === '/center') {
    // 如果用户已登陆，继续
    if (globalAuth.isLogin()) {
      next()
    } else { // 如果用户未登录，跳转登陆
      next('/login')
    }
  } else { // 当不是前往center时，继续
    next()
  }
})

export default router
