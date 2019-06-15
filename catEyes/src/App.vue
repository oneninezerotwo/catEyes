<template>
  <div id="app">
    <heads></heads>
    <router-view />
    <Mfooter/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100%;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
}
body,
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
body {
  margin: 0;
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  -webkit-touch-callout: inherit;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
}
body {
  font-size: 14px;
  color: #777;
}
body,
html {
  height: 100%;
}
body {
  overflow: hidden;
}

html {
  font-family: sans-serif;
}
body,
html {
  height: 100%;
}
</style>
<script>
import heads from "./components/Head";
import Mfooter from "@/components/Mfooter.vue";
import Mheader from "@/components/Mheader.vue";
export default {
  components: {
    heads,
    Mfooter,
    Mheader
  }
};
</script>
