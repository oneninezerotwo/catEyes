<template>
  <div class="body">
    <Mmovie />
    <Mshowdays/>
    <Mfilter/>
    <CinemaList/>
    
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mmovie from "@/components/Mmovie.vue";
import CinemaList from "@/components/CinemaList.vue";
import Mfilter from "@/components/Mfilter.vue";
import Mshowdays from "@/components/Mshowdays.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  components: {
    Mmovie,
    CinemaList,
    Mfilter,
    Mshowdays
  },
   created() {
    this.setAadd();
  },
  methods: {
    ...mapMutations(["setAadd"])
  },
});
</script>
