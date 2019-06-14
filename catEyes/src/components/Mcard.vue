<template>
  <div class="cardlist">
    <div class="header-img">
      <img
        src="http://s0.meituan.net/bs/?f=myfe/canary:/img/mc_banner.jpg"
        alt
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardlist {
  padding: 0 0.3rem 0.6rem;
  background: #f5f5f5;
  .header-img {
    margin: 0 -0.3rem;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>

<script>
import { mapMutations } from "vuex";

export default {
  created() {
    this.hiddenD();
    this.showA();
    this.hiddenC();
  },
  methods: {
    ...mapMutations(["hiddenD", "showA", "hiddenC"])
  }
};
</script>
