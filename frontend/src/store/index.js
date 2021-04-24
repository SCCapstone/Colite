import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Due to using a single state tree, all states of application are contained inside one big object. However, as our application grows in scale, the store can get really bloated.
//To help with that, Vuex allows us to divide our store into modules.
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
