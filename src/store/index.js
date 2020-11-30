import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import AUTH from './auth'

export default new Vuex.Store({
  plugins: [ createPersistedState() ],
  modules: {
    AUTH,
  }
})
