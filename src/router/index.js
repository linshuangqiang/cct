import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/home1',
    component: () => import('@/views/home/solution-list'),
    // hidden: true
  },
  {
    path: '/home2',
    component: () => import('@/views/home/solution-add'),
    // hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home/solution-list',
    children: [
      {
        path: 'solution-list',
        component: () => import('@/views/home/solution-list'),
        name: 'solution-list',
        meta: { title: '解决方案列表',  affix: true }
      }]
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/solution-add',
    name: 'home',
    meta: {
      title: '解决方案列表'
    },
    children: [
      {
        path: 'solution-add',
        component: () => import('@/views/home/solution-add'),
        name: 'solution-add',
        meta: { title: '新建解决方案',  affix: true }
      },
      {
        path: 'solution-add-0',
        component: () => import('@/views/home/solution-add-0'),
        name: 'solution-add',
        meta: { title: '新建解决方案',  affix: true }
      },
      {
        path: 'solution-add-1',
        component: () => import('@/views/home/solution-add-1'),
        name: 'solution-add',
        meta: { title: '新建解决方案',  affix: true }
      },
      {
        path: 'solution-add-show',
        component: () => import('@/views/home/solution-add-show'),
        name: 'solution-add',
        meta: { title: '查看配置清单',  affix: true }
      },
// solution-add-show
      {
        path: 'solution-list',
        component: () => import('@/views/home/solution-list'),
        name: 'solution-list',
        meta: { title: '解决方案列表',  affix: true }
      }
    ]
  },
  {
    path: '/imdc',
    component: Layout,
    redirect: '/imdc/imdc-list',
    name: 'imdc',
    meta: {
      title: 'imdc-解决方案'
    },
    children: [
      {
        path: 'imdc-list',
        component: () => import('@/views/imdc/imdc-list'),
        name: 'imdc-list',
        meta: { title: 'imdc-解决方案',  affix: true }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
