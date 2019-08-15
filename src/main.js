// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'
//引入Mint-ui
<<<<<<< HEAD
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'  

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MintUI)
=======
//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'  
//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';



Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(ElementUI)
//Vue.use(MintUI)
>>>>>>> 修改了底部导航栏，引入了vant​

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
