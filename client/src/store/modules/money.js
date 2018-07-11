import globalAxios from 'axios'
import router from '../../router'
import auth from './auth'

const state = {
  id: null,
  listOfScope: []
}

const mutations = {
  SET_WALLET: (state, payload) => {
    globalAxios
      .put('users/' + state.id + '/listOfScope.json' + '?auth=' + auth.state.idToken, state.listOfScope)
      .then(res => {
        state.listOfScope.push(payload)
      })
      .catch(error => console.log(error))
    router.replace('/transaction/' + payload.id)
  },
  INIT_DATA_USER: (state, payload) => {
    state.listOfScope = payload
  },
  SET_ID_USER: (state, payload) => {
    state.id = payload
  },
  CLEAR_LIST: state => {
    state.listOfScope = null
  }
}

const actions = {
  Add_WALLET: ({ commit }, payload) => {
    commit('SET_WALLET', payload)
  },
  initDataUser: ({ commit }, payload) => {
    globalAxios
      .get('users.json' + '?auth=' + auth.state.idToken)
      .then(res => {
        for (let key in res.data) {
          const user = res.data[key]
          if (payload === user.id) {
            commit('SET_ID_USER', key)
            if (user.listOfScope !== undefined && user.listOfScope.length > 0) {
              commit('INIT_DATA_USER', user.listOfScope)
            }
          }
        }
      })
      .catch(error => console.log(error))
  }
}

const getters = {
  dataUser: state => {
    return state.user
  },
  getTransactionById: state => id => {
    return state.listOfScope.filter(e => e.id === parseInt(id))
  },
  getListOfScope: state => {
    return state.listOfScope
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
