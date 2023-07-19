import { createStore } from "vuex";
import Registration from "./modules/registration";
import Messages from "./modules/messages";
import Auth from "./modules/auth";
import Users from "./modules/users";
import Categories from "./modules/categories";
import Cases from "./modules/cases";
import Projects from "./modules/projects";
import Clients from "./modules/clients";

export default createStore({
  modules: {
    Registration,
    Auth,
    Messages,
    Users,
    Categories,
    Cases,
    Projects,
    Clients,
  },
  actions: {},
  mutations: {},
  state: {},
  getters: {},
});
