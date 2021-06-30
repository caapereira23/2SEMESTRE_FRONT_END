import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos:[],
    user: null
  },
  mutations: {
    setUser(state, user){
      state.user=user
    },
    marcaFavorito(state, data){
      state.favoritos = [data, ...state.favoritos]
    },
    desmarcaFavorito(state, index){
      state.favoritos.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
