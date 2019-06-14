<template>
  <div class="coupon-box">
    <div class="coupon">
      <div class="input-wrapper">
        <input type="text" placeholder="请输入优惠券密码" class="coupon-psw" />
      </div>
      <a class="add-coupon">添加</a>
    </div>
    <div class="container">
      <div class="coupon-list">
        <div
          v-for="(item, index) in couponList"
          :key="index"
          class="coupon-item outTime"
        >
          <div class="coupon-left">
            <div class="left-wrapper">
              <div class="desc">
                {{ item.value }}
                <span>元</span>
              </div>

              <div class="type">代金券</div>
            </div>
          </div>
          <div class="coupon-right">
            <div class="title line-ellipsis" v-text="item.title"></div>
            <div class="limitDesc" v-text="item.limitDesc"></div>
            <div class="range-status-container">
              <div
                class="range-status range-has-border"
                v-text="item.rangeTime"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coupon-box {
  flex: 1;
  font-size: 16px;
  background: #f3f3f3;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  .coupon {
    padding: 15px 15px 0 20px;
    .input-wrapper {
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: inline-block;
      box-sizing: border-box;
      input {
        display: block;
        padding: 5px 0 5px 5px;
        width: calc(100% - 5px);
        height: 100%;
        border: none;
        border-radius: 5px;
      }
    }

    a {
      font-size: 14px;
      margin-left: 10px;
      color: #f03d37;
      display: inline-block;
      box-sizing: border-box;
    }
  }
  .container {
    -webkit-box-flex: 1;
    flex: 1;
  }
  .coupon-list {
    padding-bottom: 15px;
    .coupon-item.outTime {
      background-image: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycoupon/img/expired.png);
    }
    .coupon-item {
      background-size: 65px 65px;
      background-position: top 7px right 7px;
      background-repeat: no-repeat;
      background-color: #fff;
      border: 1px solid #d8d8d8;
      border-radius: 8px;
      margin: 15px 15px 0;
      display: -webkit-box;
      display: flex;
      position: relative;
      overflow: hidden;
    }

    .coupon-left {
      background-color: #c3c3c3;
      -webkit-box-flex: 0;
      flex: 0 0 auto;
      min-height: 125px;
      width: 108px;
      // background-color: #ff9d00;
      color: #fff;
      .left-wrapper {
        position: absolute;
        top: 50%;
        margin-top: -33px;
        font-weight: 700;
        text-align: center;
        line-height: 1.2;
        width: 108px;
        .desc {
          font-size: 35px;
          span {
            font-size: 18px;
          }
        }
        .type {
          display: inline-block;
          padding: 6px 12px 0;
          font-size: 14px;
          font-weight: 400;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
      }
    }

    .coupon-right {
      border-left: 1px dashed #c3c3c3;
      -webkit-box-flex: 1;
      flex: 1 1 auto;
      overflow: hidden;
      // border-left: 1px dashed #ff9d00;
      position: relative;
      .title {
        margin-top: 10px;
        padding: 0 16px;
        font-size: 16px;
        line-height: 24px;
        height: 24px;
        color: #333;
      }
      .limitDesc {
        margin-top: 6px;
        padding: 0 16px;
        font-size: 12px;
        line-height: 14px;
        color: #999;
        margin-bottom: 36px;
      }

      .range-status-container {
        position: relative;
        width: 100%;
        border-top: 1px solid #d8d8d8;
      }
      .range-status {
        position: relative;
        line-height: 22px;
        font-size: 12px;
        text-align: right;
        padding: 0 16px;
        white-space: pre-wrap;
      }
    }

    .line-ellipsis {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      couponList: []
    };
  },
  created() {
    this.getCoupon();
    this.showA(); //显示返回键
    this.hiddenC(); //隐藏个人主页
    // console.log(this.$store.state);
  },
  methods: {
    async getCoupon() {
      const url =
        "https://www.easy-mock.com/mock/5cfba291e5e7b850d846cdbe/example/proxy_copy_5";
      let { data } = await this.$axios.get(url);
      this.couponList = data.couponlist;
    },
    ...mapMutations(["showA", "hiddenC"])
  }
};
</script>
