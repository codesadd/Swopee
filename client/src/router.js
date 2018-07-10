import Vue from "vue";
import Router from "vue-router";
import Money from "./views/Money.vue";
import Dashboard from "@/views/Dashboard";
import Transaction from "@/views/Transaction";
import NewWallet from "@/views/NewWallet";
import AuthForm from "@/views/Login";
import auth from "./store/modules/auth";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/money",
      name: "money",
      component: Money,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/new-wallet",
      name: "newWallet",
      component: NewWallet,
      beforeEnter: (to, from, next) => {
        if (to.params.id) {
          next();
        } else {
          next("/dashboard");
        }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/transaction/:id",
      name: "transaction",
      component: Transaction,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      name: "home",
      component: AuthForm
    }
  ]
});

router.beforeEach((to, from, next) => {
  // check for requires Auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.state.idToken) {
      // go to login page
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
