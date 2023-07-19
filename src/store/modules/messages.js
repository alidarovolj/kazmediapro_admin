import axios from "@/utils/axios.js";

const actions = {
  async messages({ commit }) {
    try {
      const { data } = await axios.get("/messagesList");
      commit("updateMessages", data);
    } catch (error) {
      commit("updateMessages", error);
    }
  },
};
const mutations = {
  updateMessages: (state, res) => {
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
    state.messages = res;
  },
};
const state = {
  messages: null,
};
const getters = {
  getMessages: (state) => state.messages,
};

export default { state, getters, mutations, actions };
