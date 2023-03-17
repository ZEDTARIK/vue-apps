<template>
  <div v-if="event">
    <router-link
      class="event-router-link"
      :to="{ name: 'EventDetail', params: { id: event.id } }"
    >
      <div class="event-card">
        <span> @ {{ event.time }} on {{ event.date }}</span>
        <h4>{{ event.title }}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgb(0, 0, 0, 0.2);
}

.event-router-link {
  text-decoration: none;
  color: rgb(74, 74, 74);
}
</style>
