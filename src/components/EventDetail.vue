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
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchEvent", this.id);
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
  },
};
</script>
<style lang=""></style>
