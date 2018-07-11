import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import config from './config'
import axios from 'axios'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.debug = false
Vue.config.silent = true

Vue.use(Buefy, VueCurrencyFilter)
Vue.use(VueCurrencyFilter, {
  symbol: 'บ.',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: '',
  symbolSpacing: true
})
firebase.initializeApp(config.firebaseConfig)
axios.defaults.baseURL = 'https://money-socity.firebaseio.com/'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
