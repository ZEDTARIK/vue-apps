<template>
  <div class="events">
    <h4>List Events</h4>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventsView",
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-direction: alternate;
}
</style>
