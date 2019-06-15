<template>
  <section class="price-section">
    <div class="price-block mb-outline-t">
      <div class="box-flex" style="margin-bottom:10px;justify-content: space-between;">
        <div id="refundmigrateDetail" class="refundmigrateDetail support">
          <span style="color: #FF9900;">退改签须知</span>
          <span class="arrow up"></span>
        </div>
        <div class="refundmigrateDetail nosupport" style="display:none;">
          <span style="color: #999;">不支持退票、改签</span>
          <span class="arrow up"></span>
        </div>
        <div
          id="priceDetail"
          class="price tips-money"
          style="padding: 12px 0 6px 0;line-height: 0;"
        >
          <span class="also">应付:</span>
          <span class="d">¥</span>
          <span class="last-amount">{{amount.toFixed(2)}}</span>
          <span class="arrow up"></span>
        </div>
      </div>
      <div class="price-btn" data-bid="dp_wx_order_pay_btn">确认支付</div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      amount: "totalPrice"
    })
  }
};
</script>


<style lang="scss" scoped>
.price-section {
  color: #333;
  padding-bottom: 57px;
  .price-block {
    padding: 10px 15px;
    background-color: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 10;
    box-sizing: border-box;
  }

  .refundmigrateDetail {
    -webkit-box-flex: 1;
    flex: 1;
    padding: 12px 0 6px;
    line-height: 0;
  }
  .price-btn {
    line-height: 45px;
    width: 100%;
    background-color: #ff9e05;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .price {
    font-size: 21px;
    color: #ef4238;
    .also {
      font-weight: 400;
      color: #333;
      font-size: 14px;
    }
    .d {
      font-size: 13px;
    }
  }
  .arrow {
    width: 8px;
    height: 8px;
  }
}
</style>
