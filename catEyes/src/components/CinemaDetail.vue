<template>
  <div class="cinemaD">
    <!-- <Header/> -->
    <CinemaImg />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/cinema2.css";
</style>

<script lang="ts">
import Vue from "vue";
// import Header from "../components/Header.vue";
import CinemaImg from "../components/CinemaImg.vue";
import { mapMutations } from "vuex";
export default Vue.extend({
  created() {
    this.setAadd();
  },
  components: {
    // Header,
    CinemaImg
  },
  methods: {
    ...mapMutations(["setAadd"])
  },
  mounted(){
    this.$store.state.foot_show=false
  },
  destroyed(){
    this.$store.state.foot_show=true
  }
});
</script>
