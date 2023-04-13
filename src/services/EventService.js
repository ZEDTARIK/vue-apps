import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
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
