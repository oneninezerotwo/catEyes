<template>
  <div class="discount-box">
    <div class="list" version="4" v-show="showDiscount">
      <div class="no-card">
        <img
          class="img"
          src="//s0.meituan.net/bs/?f=myfe/canary:/img/card.png"
          alt="暂无会员卡"
        />
        <div>暂无影院会员卡</div>
        <div>
          <a @click.stop="card" class="link icon icon-add2 btn">
            <span>查看本城市全部会员卡</span>
          </a>
        </div>
      </div>
    </div>
    <router-view v-show="!showDiscount" />
  </div>
</template>
<style lang="scss" scoped>
.discount-box {
  flex: 1;
  .list {
    flex: 1;
    padding: 0 0.3rem 0.6rem;
    background: #f5f5f5;
    .no-card {
      text-align: center;
      padding-top: 7.56rem;
      img {
        width: 5.86rem;
      }
      div {
        text-align: center;
        font-size: 0.88rem;
        color: #999;
      }
      .btn {
        margin-top: 1.58rem;
        padding: 0.76rem;
        font-size: 0.88rem;
        color: #f34d41;
        background: #fff;
        border: 1px solid #f34d41;

        span {
          margin-left: 0.1rem;
          vertical-align: middle;
        }
      }
    }
  }
}

.img {
  border: 0;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAAEGkgCiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjU0MTZBNTg2RTU5MTFFNTgzMEI5N0ZEMTEyOUJEREEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjU0MTZBNTk2RTU5MTFFNTgzMEI5N0ZEMTEyOUJEREEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzlGRTg4RDZFNTYxMUU1ODMwQjk3RkQxMTI5QkREQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzlGRTg4RTZFNTYxMUU1ODMwQjk3RkQxMTI5QkREQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiE4FskAABE7SURBVHja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)
    50% no-repeat #f5f5f5;
  background-size: 50%;
}

.btn {
  cursor: pointer;
  font-size: 16px;
  padding: 0.13rem 0.24rem;
  display: inline-block;
  border-radius: 4px;
  line-height: 1;
  background: #e54847;
  color: #fff;
  text-decoration: none;
}
</style>
<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  created() {
    this.showA();
    this.hiddenC();
    this.showD();
    // console.log(this.$store.state);
  },
  computed: {
    ...mapState({
      showDiscount: "showDiscount"
    })
  },
  methods: {
    card() {
      this.$router.push({ name: "card" });
    },
    ...mapMutations(["showA", "hiddenC", "showD"])
  }
};
</script>
