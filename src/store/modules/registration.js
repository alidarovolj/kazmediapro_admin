import ax from "axios";
import axios from "@/utils/axios.js";

const actions = {
  async registration({ commit }, form) {
    try {
      const { data } = await axios.post("/userRegistration", form);
      commit("updateRegistration", data);
    } catch (error) {
      commit("updateRegistration", error);
    }
  },
};
const mutations = {
  updateRegistration: (state, res) => {
    state.registration = res;
  },
};
const state = {
  registration: null,
};
const getters = {
  getRegistration: (state) => state.registration,
};

export default { state, getters, mutations, actions };
