<template>
  <Mcanary />
</template>

<script lang="ts">
import Vue from "vue";
import Mcanary from "@/components/Mcanary.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  components: {
    Mcanary
  },
   created() {
    this.setAadd();
  },
  methods: {
    ...mapMutations(["setAadd"])
  },
});
</script>
