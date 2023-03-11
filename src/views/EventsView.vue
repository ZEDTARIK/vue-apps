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
  data() {
    return {
      events: [
        {
          id: 51547,
          title: "Smet consectetur adipisicing",
          decription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, inventore.",
          time: "10:00",
          date: "10 March 2023",
        },
        {
          id: 52367,
          title: "sit elit invetor",
          decription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, inventore.",
          time: "10:00",
          date: "26 July 2021",
        },
        {
          id: 74515,
          title: "Lorem ipsum dolor sit amet consectetur.",
          decription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, inventore.",
          time: "15:30",
          date: "86 September 2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
