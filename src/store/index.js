import Vue from 'vue'
import Vuex from 'vuex'
import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    example
  },
  strict: false,
  plugins: []
})