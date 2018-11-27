import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页' },
      component: _import('Home/index')
    },
    {
      path: '/store',
      name: 'store',
      meta: { title: '商城' },
      component: _import('Store/index')
    },
    {
      path: '/person',
      name: 'person',
      meta: { title: '我的' },
      component: _import('Person/index')
    }
  ]
})
