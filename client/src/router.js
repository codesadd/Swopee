import Vue from 'vue'
import Router from 'vue-router'
import Money from './views/Money.vue'
import Dashboard from '@/views/Dashboard'
import Transaction from '@/views/Transaction'
import NewWallet from '@/views/NewWallet'

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
    },
    {
      path: '/new-wallet',
      name: 'newWallet',
      component: NewWallet,
      beforeEnter: (to, from, next) => {
        if (to.params.id) {
          next()
        } else {
          next('/dashboard')
        }
      }
    },
    {
      path: '/transaction/:id',
      name: 'transaction',
      component: Transaction
    },
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard'
    }
  ]
})
