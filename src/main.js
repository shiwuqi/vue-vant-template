import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import router from './router/index'
import store from './store'

// 解决移动端点击延迟300毫秒
FastClick.attach(document.body)

import { Dialog, Loading, Toast, Lazyload } from 'vant'

Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
