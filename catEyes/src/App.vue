<template>
  <div id="app">
    <heads></heads>
    <router-view></router-view>
    <Mfooter v-show="this.$store.state.foot_show" />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
body {
  overflow: hidden;
  margin: 0;
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  -webkit-touch-callout: inherit;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
}
#app {
  min-height: 100%;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
}
</style>
<script>
import heads from "./components/Head";
import Mfooter from "@/components/Mfooter.vue";
export default {
  components: { heads, Mfooter }
};
</script>
