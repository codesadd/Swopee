import globalAxios from 'axios'
import axios from '../../axios-auth'
import router from '../../router'
import firebase from 'firebase/app'
import 'firebase/auth'

const state = {
  idToken: null,
  idUser: null,
  user: null,
  isNewUser: null
}

const getters = {
  isAuth: (state) => {
    return state.idToken !== null
  },
  getUser: (state) => {
    return state.user
  }
}

const mutations = {
  'CLEAR_AUTH_DATA': (state) => {
    state.idToken = null
    state.idUser = null
    state.user = null
    state.isNewUser = null
  },
  'SET_AUTH_USER': (state, payload) => {
    state.idToken = payload.token
    state.idUser = payload.userId
  },
  'SET_USER': (state, payload) => {
    state.user = payload
  },
  'IS_NEW_USER': (state, payload) => {
    state.isNewUser = payload
  }
}

const actions = {
  setLogoutTimer: ({ commit }, expirationTime) => {
    setTimeout(() => {
      firebase.auth().signOut()
      localStorage.clear()
      commit('CLEAR_AUTH_DATA')
      router.replace('/')
    }, expirationTime * 1000)
  },
  signupWithProvider: ({commit, dispatch}) => {
    commit('setLoading', true)
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(firebaseUser => {
        commit('IS_NEW_USER', firebaseUser.additionalUserInfo.isNewUser)
        commit('SET_USER', firebaseUser.additionalUserInfo.profile)
        dispatch('setOAuthProvider', firebaseUser.credential.accessToken)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  setOAuthProvider: ({ commit, dispatch }, authData) => {
    commit('setLoading', true)
    axios.post('/verifyAssertion?key=AIzaSyCyFiSH0p6k-Rd6XUfCBP7nnYvRTitwrsQ', {
      postBody: 'access_token=' + authData + '&providerId=facebook.com',
      returnIdpCredential: true,
      requestUri: 'http://localhost:8080',
      returnSecureToken: true
    })
      .then(res => {
        commit('SET_AUTH_USER', {
          token: res.data.oauthAccessToken,
          userId: res.data.localId
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.oauthAccessToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        if (state.isNewUser) {
          dispatch('storeUser', state.user)
        }
        dispatch('setLogoutTimer', res.data.expiresIn)
        commit('setLoading', false)
        router.replace('/dashboard')
      })
      .catch(error => console.log(error))
  },
  tryAutoLogin: ({ commit, dispatch }) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        commit('SET_USER', user.providerData[0])
      }
    })
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    const expirationDate = localStorage.getItem('expirationDate')
    const now = new Date()
    if (now >= expirationDate) {
      return
    }
    const userId = localStorage.getItem('userId')
    commit('SET_AUTH_USER', {
      token: token,
      userId: userId
    })
    dispatch('setOAuthProvider', token)
    router.replace('/dashboard')
  },
  logout: ({ commit }) => {
    firebase.auth().signOut()
    localStorage.clear()
    commit('CLEAR_AUTH_DATA')
    router.replace('/')
  },
  storeUser ({ commit, state }, userData) {
    if (!state.idToken) {
      return
    }
    globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },
  redirectToDashboard: () => {
    if (!state.idToken) {
      return
    }
    router.replace('/dashboard')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
