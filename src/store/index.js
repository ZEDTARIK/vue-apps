import { createStore } from "vuex";
import EventService from "@/services/EventService";

export default createStore({
  state: {
    user: "Zouhair ETTARAK",
    events: [],
    event: {},
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit("ADD_EVENT", event);
        })
        .catch((err) => console.error(err));
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((err) => console.log(err));
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
