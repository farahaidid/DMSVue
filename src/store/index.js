import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import AUTH from './auth'
import LOCAL_MESSAGE from './localMessaging'

export default new Vuex.Store({
  plugins: [ createPersistedState() ],
  modules: {
    AUTH,
    LOCAL_MESSAGE
  }
})
