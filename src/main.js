import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import { Dialog, Loading, Toast } from 'vant'

Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
