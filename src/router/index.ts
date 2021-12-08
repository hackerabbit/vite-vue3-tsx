import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home'
    },
    component: () => import('@/views/home')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      type: 'login'
    },
    component: () => import('@/views/login')
  },
  {
    path: '/father',
    name: 'father',
    meta: {
      type: 'father'
    },
    component: () => import('@/views/father')
  },
  {
    path: '/route',
    name: 'route',
    meta: {
      type: 'route'
    },
    component: () => import('@/views/route')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const user = localStorage.getItem('user')
    // console.log(user);
    // console.log(to.meta.type)
    if (to.meta.type === 'login' && user) {
      next({ name: 'home' })
      return
    }

    if (to.meta.type === 'home' && !user) {
      // next({ name: 'login' })
      next({ name: 'route' })
      return
    }

    next()
  }
)

export default router
