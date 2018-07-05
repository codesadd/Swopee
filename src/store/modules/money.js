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
      }
    ]
  }
}

const mutations = {
  addNewMoney: (state, obj) => {
    state.user.listMoney.push(obj)
    globalAxios.post('/users.json', state.user)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
}

const actions = {
  addPayment: ({ commit }, obj) => {
    commit('addNewMoney', obj)
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
