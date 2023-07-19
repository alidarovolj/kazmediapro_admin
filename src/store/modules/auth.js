import axios from "@/utils/axios.js";

const actions = {
  async authUser({ commit }, form) {
    try {
      const { data } = await axios.post("/login", form, {});
      localStorage.setItem("token", "Bearer " + data.token);
      commit("updateAuth", data);
    } catch (error) {
      console.log(error);
    }
  },
  async setUser({ commit }) {
    try {
      const { data } = await axios.get("/user");
      localStorage.setItem("user", JSON.stringify(data));
      commit("updateUser", data);
    } catch (error) {
      console.log(error);
    }
  },
  async logoutUser({ commit }) {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      commit("updateLogout", data);
    } catch (error) {
      console.log(error);
    }
  },
  currentUser({ commit }) {
    try {
      let data = JSON.parse(localStorage.getItem("user"));
      commit("updateCurrentUser", data);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  updateAuth: (state, res) => {
    state.authState = res;
  },
  updateUser: (state, res) => {
    state.userState = res;
  },
  updateLogout: (state, res) => {
    state.logoutState = res;
  },
  updateCurrentUser: (state, res) => {
    state.currentUser = res;
  },
};
const state = {
  authState: null,
  userState: null,
  logoutState: null,
  currentUser: null,
};
const getters = {
  getAuth: (state) => state.authState,
  getUser: (state) => state.userState,
  getLogout: (state) => state.logoutState,
  getCurrentUser: (state) => state.currentUser,
};

export default { state, getters, mutations, actions };
