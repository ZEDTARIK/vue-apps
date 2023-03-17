<template lang="">
  <div>
    <div class="">
      <span> @ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <pre>
        {{ event.description }}
      </pre>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  props: ["id"],
  data() {
    return {
      event: {
        type: Object,
        required: true,
      },
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => (this.event = response.data))
      .catch((err) => console.error(err));
  },
};
</script>
<style lang=""></style>
