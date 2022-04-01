import axios from 'axios'

export default {
    namespaced: true,
    state:{
        isAuthenticated: false,
        strategy: 'admin',
        admin: {}
    },

    mutations:{
        SET_AUTHENTICATED (state, value = false) {
            state.isAuthenticated = value
        },
        SET_USER (state, value = {}) {
            state.admin = value
        }
    },

    actions: {
        login({ commit }){
          return axios.get('/api/user').then(({ data })=>{
                commit('SET_USER', data)
                commit('SET_AUTHENTICATED', true)
            })
        },
        logout({ commit }){
            commit('SET_USER', {})
            commit('SET_AUTHENTICATED', false)
        }
    },

    getters:{
        strategy(state){
            return state.strategy
        },
        authenticated(state){
            return state.isAuthenticated
        },
        user(state){
            return state.admin
        }
    }
}
