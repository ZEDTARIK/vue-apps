import { createRouter, createWebHistory } from "vue-router";
import EventsView from "../views/EventsView.vue";
import AboutView from "../views/AboutView";

const routes = [
  {
    path: "/",
    name: "Events",
    component: EventsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
