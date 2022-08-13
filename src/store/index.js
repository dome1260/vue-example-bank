import Vue from 'vue'
import Vuex from 'vuex'
import AppModule from '@/store/modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: AppModule
  },
  plugins: []
})

export default store
