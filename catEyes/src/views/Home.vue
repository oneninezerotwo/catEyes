<template>
  <div>
    <!-- <Mheader/> -->
    <div class="body" style="display: block;">
      <Mmenu />
      <!-- <Mkklist/> -->
      <router-view></router-view>
      <!-- <Mfooter/> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Mheader from "@/components/Mheader.vue";
import Mmenu from "@/components/Mmenu.vue";
// import Mkklist from "@/components/Mkklist.vue";
// import Mfooter from "@/components/Mfooter.vue";
import { mapMutations } from "vuex";
export default Vue.extend({
  created() {
    this.setAcut();
  },
  components: {
    // Mheader,
    Mmenu
    // Mkklist
    // Mfooter
  },
  methods: {
    ...mapMutations(["setAcut"])
  }
});
</script>
<style lang="scss" scoped>
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
.footerTab,
a,
div {
  -webkit-tap-highlight-color: transparent;
}
</style>
