import axios from "@/utils/axios.js";

const actions = {
  async categories({ commit }) {
    try {
      const { data } = await axios.get("/categories");
      commit("updateCategories", data);
    } catch (error) {
      commit("updateCategories", error);
    }
  },
  async createCategory({ commit }, form) {
    try {
      const { data } = await axios.post("/createCategory", form);
      commit("updateCreatedCategory", data);
    } catch (error) {
      commit("updateCreatedCategory", error);
    }
  },
  async removeCategory({ commit }, id) {
    try {
      const { data } = await axios.post("/categoryRemove", id);
      commit("updateRemovedCateogory", data);
    } catch (error) {
      commit("updateRemovedCateogory", error);
    }
  },
  async updateCategory({ commit }, form) {
    try {
      const { data } = await axios.put("/categoryUpdate", form);
      commit("updateUpdatedCateogory", data);
    } catch (error) {
      commit("updateUpdatedCateogory", error);
    }
  },
};
const mutations = {
  updateCategories: (state, res) => {
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
    state.categories = res;
  },
  updateCreatedCategory: (state, res) => {
    state.createdCategory = res;
  },
  updateRemovedCateogory: (state, res) => {
    state.removedCategory = res;
  },
  updateUpdatedCateogory: (state, res) => {
    state.updatedCategory = res;
  },
};
const state = {
  categories: null,
  createdCategory: null,
  removedCategory: null,
  updatedCategory: null,
};
const getters = {
  getCategories: (state) => state.categories,
  getCreatedCategory: (state) => state.createdCategory,
  getRemovedCategory: (state) => state.removedCategory,
  getUpdatedCategory: (state) => state.updatedCategory,
};

export default { state, getters, mutations, actions };
