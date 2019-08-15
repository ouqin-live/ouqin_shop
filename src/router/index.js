import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/pages/firstPage/firstPage'
import discover from '@/pages/discover/discover'
import order from '@/pages/order/order'
import my from '@/pages/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
