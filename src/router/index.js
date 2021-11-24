import {createRouter , createWebHashHistory} from 'vue-router'
import TodayPage from '../pages/Today'

const routes = [
  {
    path: '/',
    name: 'today',
    component: TodayPage
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import('../pages/Tomorrow')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import('../pages/Week')
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../pages/Month')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import('../pages/Year')
  }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router