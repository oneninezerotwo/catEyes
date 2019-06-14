<template>
  <div id="deal-orderlist">
    <div class="no-data">
      <div class="wrapper">
        <div class="tip-text">您最近还没有新订单，赶快去下一单吧</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#deal-orderlist {
  flex: 1;
  position: relative;
}
.no-data {
  // z-index: -9;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f3f3f3;

  .wrapper {
    // position: absolute;
    // z-index: 10;
    background-image: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/images/order-empty-1.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 7.2rem;
    top: 36%;
    margin-top: -2rem;
    height: 9rem;
    box-sizing: border-box;
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;

    .tip-text {
      display: block;
      padding-top: 1.4rem;
      font-size: 1rem;
      height: 9.56rem;
      line-height: 14.56rem;
      color: #999;
    }
  }
}
</style>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["showA", "hiddenC"])
  },
  created() {
    this.showA();
    this.hiddenC();
    // console.log(this.$store.state);
  }
};
</script>
