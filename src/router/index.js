import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage/firstPage'
import discover from '@/components/discover/discover'
import order from '@/components/order/order'
import my from '@/components/my/my'

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
