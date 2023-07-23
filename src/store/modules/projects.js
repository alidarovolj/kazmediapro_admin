import axios from "@/utils/axios.js";

const actions = {
  async projects({ commit }) {
    try {
      const { data } = await axios.get("/projects");
      commit("updateProjects", data);
    } catch (error) {
      commit("updateProjects", error);
    }
  },
  async createProject({ commit }, form) {
    try {
      const { data } = await axios.post("/projectSave", form);
      commit("updateCreatedProject", data);
    } catch (error) {
      commit("updateCreatedProject", error);
    }
  },
  async removeProject({ commit }, form) {
    try {
      const { data } = await axios.post("/projectRemove", form);
      commit("updateRemovedProject", data);
    } catch (error) {
      commit("updateRemovedProject", error);
    }
  },
  async updateProject({ commit }, form) {
    try {
      const { data } = await axios.put("/projectUpdate", form);
      commit("updateUpdatedProject", data);
    } catch (error) {
      commit("updateUpdatedProject", error);
    }
  },
};
const mutations = {
  updateProjects: (state, res) => {
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
    state.projects = res;
  },
  updateCreatedProject: (state, res) => {
    state.createdProject = res;
  },
  updateRemovedProject: (state, res) => {
    state.removedProject = res;
  },
  updateUpdatedProject: (state, res) => {
    state.updatedProject = res;
  },
};
const state = {
  projects: null,
  createdProject: null,
  removedProject: null,
  updatedProject: null,
};
const getters = {
  getProjects: (state) => state.projects,
  getCreatedProject: (state) => state.createdProject,
  getRemovedProject: (state) => state.removedProject,
  getUpdatedProject: (state) => state.updatedProject,
};

export default { state, getters, mutations, actions };
