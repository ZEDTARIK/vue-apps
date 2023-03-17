import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "Application/json",
    "Content-Type": "Application/json",
  },
});

export default {
  getEvents() {
    return apiClient("/events");
  },
  getEvent(id) {
    return apiClient("/events/" + id);
  },
};
