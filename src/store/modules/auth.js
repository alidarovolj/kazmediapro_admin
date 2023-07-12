import axios from "@/utils/axios.js";

const actions = {
  async authUser({ commit }, form) {
    try {
      const { data } = await axios.post("/login", form, {});
      localStorage.setItem("token", "Bearer " + data.access_token);
      localStorage.setItem("token_exp", data.expires_in);
      commit("updateAuth", data);
    } catch (error) {
      console.log(error);
    }
  },
  async setUser({ commit }) {
    try {
      const data = await axios.get("/user");
      localStorage.setItem("user", JSON.stringify(data));
      commit("updateUser", data);
    } catch (error) {
      console.log(error);
    }
  },
  async logoutUser({ commit }) {
    const bodyParameters = null;
    try {
      const { data } = await axios.post("/auth/logout", bodyParameters);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("token_exp");
      commit("updateLogout", data);
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
};
const state = {
  authState: null,
  userState: null,
  logoutState: null,
};
const getters = {
  getAuth: (state) => state.authState,
  getUser: (state) => state.userState,
  getLogout: (state) => state.logoutState,
};

export default { state, getters, mutations, actions };
