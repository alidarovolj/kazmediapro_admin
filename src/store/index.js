import { createStore } from "vuex";
import Posts from "./modules/posts";
import Registration from "./modules/registration";
import Auth from "./modules/auth";

export default createStore({
  modules: {
    Posts,
    Registration,
    Auth,
  },
  actions: {},
  mutations: {},
  state: {},
  getters: {},
});
