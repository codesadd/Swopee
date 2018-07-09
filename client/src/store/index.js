import Vue from "vue";
import Vuex from "vuex";
import MoneyModule from "./modules/money";
import AuthModule from "./modules/auth";
import SharedModule from "./modules/shared";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MoneyModule,
    AuthModule,
    SharedModule
  }
});
