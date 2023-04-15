import { createStore } from "vuex";

export default createStore({
  state: {
    user: "Zouhair ETTARAK",
    events: [],
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {},
  modules: {},
});
