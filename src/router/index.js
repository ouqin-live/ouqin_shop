import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
=======
import firstPage from '@/components/firstPage/firstPage'
import discover from '@/components/discover/discover'
import order from '@/components/order/order'
import my from '@/components/my/my'
>>>>>>> 修改了底部导航栏，引入了vant​

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
=======
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
>>>>>>> 修改了底部导航栏，引入了vant​
    }
  ]
})
