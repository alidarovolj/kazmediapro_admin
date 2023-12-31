import axios from "@/utils/axios.js";

const actions = {
  async cases({ commit }) {
    try {
      const { data } = await axios.get("/cases");
      commit("updateCases", data);
    } catch (error) {
      commit("updateCases", error);
    }
  },
  async createCase({ commit }, form) {
    try {
      const { data } = await axios.post("/caseSave", form);
      commit("updateCreatedCase", data);
    } catch (error) {
      commit("updateCreatedCase", error);
    }
  },
  async removeCase({ commit }, form) {
    try {
      const { data } = await axios.post("/caseRemove", form);
      commit("updateRemovedCase", data);
    } catch (error) {
      commit("updateRemovedCase", error);
    }
  },
  async updateCase({ commit }, form) {
    try {
      const { data } = await axios.put("/caseUpdate", form);
      commit("updateUpdatedCases", data);
    } catch (error) {
      commit("updateUpdatedCases", error);
    }
  },
};
const mutations = {
  updateCases: (state, res) => {
    if (!Array.isArray(res.data)) {
      console.error("'res' is not an array");
      return;
    }
    const formattedCategories = res.data.map((category) => {
      const timestamp = new Date(category.created_at);
      const formattedDate = timestamp.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const formattedTime = timestamp.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return {
        ...category,
        created_at: `${formattedDate} ${formattedTime}`,
      };
    });
    res.data = formattedCategories;
    state.cases = res;
  },
  updateCreatedCase: (state, res) => {
    state.createdCase = res;
  },
  updateRemovedCase: (state, res) => {
    state.removedCase = res;
  },
  updateUpdatedCases: (state, res) => {
    state.updatedCase = res;
  },
};
const state = {
  cases: null,
  createdCase: null,
  removedCase: null,
  updatedCase: null,
};
const getters = {
  getCases: (state) => state.cases,
  getCreatedCase: (state) => state.createdCase,
  getRemovedCase: (state) => state.removedCase,
  getUpdatedCase: (state) => state.updatedCase,
};

export default { state, getters, mutations, actions };
