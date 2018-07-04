import globalAxios from 'axios'

const state = {
  idToken: 123456789,
  userId: 9922019223348,
  user: {
    name: 'Kriangkrai Prommaithong',
    tel: '0818578334',
    address: 'brabra',
    listOfScope: [{}]
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
