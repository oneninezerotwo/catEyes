<template>
  <div class="cinema">
    <CinemaSeach />
    <CinemaNav />
    <CinemaList />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/cinema2.css";
</style>

<script lang="ts">
import Vue from "vue";
import CinemaNav from "../components/CinemaNav.vue";
import CinemaList from "../components/CinemaList.vue";
import CinemaSeach from "../components/CinemaSeach.vue";

export default Vue.extend({
  components: {
    CinemaNav,
    CinemaList,
    CinemaSeach
    // Header
  },
  methods: {
    seach_ru() {
      this.$router.push({ path: "seach" });
    }
  }
});
</script>
