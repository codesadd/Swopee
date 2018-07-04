import Vue from 'vue'
import Vuex from 'vuex'
import MoneyModule from './modules/money'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MoneyModule
  }
})
