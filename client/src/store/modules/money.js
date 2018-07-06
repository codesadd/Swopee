import globalAxios from 'axios'

const state = {
  idToken: 123456789,
  userId: 9922019223348,
  user: {
    name: 'Kriangkrai Prommaithong',
    tel: '0818578334',
    address: 'brabra',
    listOfScope: [
      {
        id: 1,
        ownerInfo: {
          name: 'Kriangkrai'
        },
        totalPlayer: 20,
        initMoney: 1000,
        listOfInterest: [1400, 1500]
      },
      {
        id: 2,
        ownerInfo: {
          name: 'Nutt'
        },
        totalPlayer: 30,
        initMoney: 2000,
        listOfInterest: [1400, 2200]
      },
      {
        id: 3,
        ownerInfo: {
          name: 'Nutt'
        },
        totalPlayer: 30,
        initMoney: 2000,
        listOfInterest: [1400, 2200]
      },
      {
        id: 4,
        ownerInfo: {
          name: 'Nutt'
        },
        totalPlayer: 30,
        initMoney: 2000,
        listOfInterest: [1400, 2200]
      }
    ]
  }
}

const mutations = {
  'ADD_NEW_MONEY': (state, obj) => {
    state.user.listMoney.push(obj)
    globalAxios.post('/users.json', state.user)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },
  'ADD_WALLET': (state, payload) => {
    state.user.listOfScope.push(payload)
  }
}

const actions = {
  addPayment: ({ commit }, obj) => {
    commit('ADD_NEW_MONEY', obj)
  },
  addWallet: ({ commit }, payload) => {
    commit('ADD_WALLET', payload)
  }
}

const getters = {
  dataUser () {
    return state.user
  },
  getTransactionById: (state) => (id) => {
    return state.user.listOfScope.filter(e => e.id === parseInt(id))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
