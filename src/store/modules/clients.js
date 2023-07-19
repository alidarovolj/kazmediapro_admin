import axios from "@/utils/axios.js";

const actions = {
  async clients({ commit }) {
    try {
      const { data } = await axios.get("/clients");
      commit("updateClients", data);
    } catch (error) {
      commit("updateClients", error);
    }
  },
  async createClient({ commit }, form) {
    try {
      const { data } = await axios.post("/clientSave", form);
      commit("updateCreatedClient", data);
    } catch (error) {
      commit("updateCreatedClient", error);
    }
  },
};
const mutations = {
  updateClients: (state, res) => {
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
    state.clients = res;
  },
  updateCreatedClient: (state, res) => {
    state.createdClient = res;
  },
};
const state = {
  clients: null,
  createdClient: null,
};
const getters = {
  getClients: (state) => state.clients,
  getCreatedClient: (state) => state.createdClient,
};

export default { state, getters, mutations, actions };
