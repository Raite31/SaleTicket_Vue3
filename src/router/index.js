// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Film from '../views/Film.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'
const routes = [
  {
    path: '/film',
    component: Film,
    name: 'film',
    // 二级路由
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  // 动态路由
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/center',
    component: Center
  },
  // { // vu3中用vue2的重定向不行了
  //   path: '*',
  //   redirect: '/film'
  // }
  {
    path: '/',
    redirect: '/film'
  },
  // 重定向
  {
    path: '/:dsada',
    redirect: {
      name: 'film'
    }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 规定了路由模式
  // histrory: createWebHistory(),
  history: createWebHashHistory(), // hash模式（有＃号）
  routes
})
// 拦截
// router.beforeEach
export default router
