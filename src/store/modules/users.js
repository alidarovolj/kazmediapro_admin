import axios from "@/utils/axios.js";

const actions = {
  async users({ commit }) {
    try {
      const { data } = await axios.get("/allUsers");
      commit("updateUsers", data);
    } catch (error) {
      commit("updateUsers", error);
    }
  },
};
const mutations = {
  updateUsers: (state, res) => {
    state.users = res;
  },
};
const state = {
  users: null,
};
const getters = {
  getUsers: (state) => state.users,
};

export default { state, getters, mutations, actions };
