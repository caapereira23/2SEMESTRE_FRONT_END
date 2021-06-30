import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
export default new Vuex.Store({
    state: {
        info:[],
        favoritos: [],
        venda: [{
            'nome': 'akita',
            'preco': 800,
            'foto': ''
        },
        {
            'nome': 'husky',
            'preco': 600,
            'foto': ''
        },
        {
            'nome': 'akita',
            'preco': 800,
            'foto': ''
        },
        {
            'nome': 'akita',
            'preco': 800,
            'foto': ''
        },
        {
            'nome': 'boxer',
            'preco': 800,
            'foto': ''
        },
        ]
    },
    mutations: {
        marcaFavorito(state, item) {
            state.favoritos = [item, ...state.favoritos]
            localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
        },
        desmarcaFavorito(state, index) {
            state.favoritos.splice(index, 1)
            localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
        },
        carregaInfo(state, item) {
            state.info = item
        },
        iniciaFavoritos(state, lista){
            state.favoritos = lista
        }
    },
    actions: {
        carregaInfo({ commit }) {
            let resultados = []
            let breeds = []
            let carregaBreed = (breed) => {
                return axios
                    .get("https://dog.ceo/api/breed/" + breed + "/images/random")
                    .then((res) => res.data.message);
            }
            let infoLocalStorage = localStorage.getItem('infoLocal')
            if (!infoLocalStorage){
                axios.get("https://dog.ceo/api/breeds/list/all")
                .then((res) => {
                    return res.data.message;
                })
                .then((res) => {
                    breeds = [...Object.keys(res)];
                    return [...Object.keys(res)];
                })
                .then((res) => {
                    return axios.all([...res.map((x) => carregaBreed(x))]);
                })
                .then((res) => {
                    for (let [index, item] of res.entries()) {
                        resultados.push(
                            {
                                'name': breeds[index],
                                'photo': item
                            }
                        )
                    }
                    return resultados
                }
                )
                .then(
                    res => commit('carregaInfo', resultados)
                    localStorage.setItem('infoLocal', JSON.stringify(resultados))
                )
            }
            else {
                commit('carregaInfo', JSON.parse(infoLocalStorage)
            }
            
        },
        carregaFavoritos({commit}){
            const favoritoLocalStorage = localStorage.getItem('favoritoLocal')
            if (!favoritoLocalStorage){
                localStorage.setItem('favoritoLocal', '[]')
            }
            else{
                commit('iniciaFavoritos', JSON.parse(favoritoLocalStorage))
            }
        }
    },
    modules: {

    },
    getters: {
        racaVenda: state => {
            return [...new Set(state.venda.map(x => x.nome))]
        }
    }
})