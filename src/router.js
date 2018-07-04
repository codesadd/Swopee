import Vue from 'vue'
import Router from 'vue-router'
import Money from './views/Money.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
