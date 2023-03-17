import { createRouter, createWebHistory } from "vue-router";
import EventsView from "../views/EventsView.vue";
import AboutView from "../views/AboutView";
import EventDetail from "../components/EventDetail";

const routes = [
  {
    path: "/",
    name: "Events",
    component: EventsView,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    props: true,
    component: EventDetail,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
