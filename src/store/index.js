import Vue from 'vue'
import Vuex from 'vuex'
import module from './module';
// import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: module,
  strict: false,
  plugins: []
})