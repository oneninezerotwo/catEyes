<template>
  <div class="orderlist">
    <div class="pay-section">
      <OrderDetail/>
      <MovieFood/>
    </div>
    <Pricebox/>
  </div>
</template>

<style lang="scss" scoped>
.orderlist {
  flex: 1;
  background: #f0f0f0;
}
.pay-section {
  color: #333;
  padding-bottom: 57px;
}
</style>

<script>
import OrderDetail from "../components/Orderdetail";
import MovieFood from "../components/MovieFood";
import Pricebox from "../components/Pricebox";
import { mapMutations } from "vuex";
export default {
  components: {
    OrderDetail,
    MovieFood,
    Pricebox
  },
  methods: { ...mapMutations(["showF", "hiddenF", "showA"]) },
  created() {
    this.showA();
  },
  mounted() {
    this.hiddenF();
  },
  destroyed() {
    this.showF();
  }
};
</script>


