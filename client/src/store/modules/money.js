import globalAxios from "axios";
import router from "../../router";
import auth from "./auth";

const state = {
  id: null,
  listOfScope: []
};

const mutations = {
  ADD_WALLET: (state, payload) => {
    state.listOfScope.push(payload);
    globalAxios
      .put("users/" + state.id + ".json" + "?auth=" + auth.state.idToken, state)
      .then(res => console.log(res))
      .catch(error => console.log(error));
    router.replace("/transaction/" + payload.id);
  },
  INIT_DATA_USER: (state, payload) => {
    state.listOfScope = payload;
  },
  SET_ID_USER: (state, payload) => {
    state.id = payload;
  },
  CLEAR_LIST: state => {
    state.listOfScope = null;
  }
};

const actions = {
  addPayment: ({ commit }, obj) => {
    commit("ADD_NEW_MONEY", obj);
  },
  addWallet: ({ commit }, payload) => {
    commit("ADD_WALLET", payload);
  },
  initDataUser: ({ commit }, payload) => {
    globalAxios
      .get("users.json" + "?auth=" + auth.state.idToken)
      .then(res => {
        for (let key in res.data) {
          const user = res.data[key];
          if (payload == user.uid) {
            commit("SET_ID_USER", key);
          }
          if (user.listOfScope !== undefined && user.listOfScope.length > 0) {
            commit("INIT_DATA_USER", user.listOfScope);
          }
        }
      })
      .catch(error => console.log(error));
  }
};

const getters = {
  dataUser() {
    return state.user;
  },
  getTransactionById: state => id => {
    return state.listOfScope.filter(e => e.id === parseInt(id));
  },
  getListOfScope: state => {
    return state.listOfScope;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
