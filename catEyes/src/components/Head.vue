<template>
  <header class="navbar">
    <div class="nav-wrap-left">
      <a v-show="arrow" class="back" @click="goBack">
        <i class="icon-back"></i>
      </a>
      <a v-show="!arrow">
        <i></i>
      </a>
    </div>
    <h1 class="nav-header" v-text="title"></h1>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  //   border-bottom: 1px solid #e54847;
  border-bottom: none;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  .nav-wrap-left {
    height: 50.5px;
    line-height: 50.5px;
    a {
      height: 50px;
      width: 22.5px;
      line-height: 50px;
      padding: 0 15px;
      i {
        display: inline-block;
        width: 22.5px;
        height: 22.5px;
      }
    }
    a.back {
      .icon-back {
        display: inline-block;
        width: 22.5px;
        height: 22.5px;
        vertical-align: middle;
        position: relative;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          width: 16px;
          height: 16px;
          border-bottom: 2px solid #fff;
          border-left: 2px solid #fff;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  }

  h1.nav-header {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
      this.showC();
      this.hiddenA();
      this.showD();
    },
    ...mapMutations(["hiddenA", "showC", "showD"])
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    ...mapState({
      arrow: "leftArrow"
    })
  }
};
</script>
