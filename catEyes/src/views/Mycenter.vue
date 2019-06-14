<template>
  <div class="my-center">
    <div class="my-center-box" v-show="!showCenter">
      <userimg />
      <mycontainer />
    </div>
    <router-view v-show="showCenter" />
  </div>
</template>

<script>
import userimg from "../components/Myuserimg";
import mycontainer from "../components/Mycontainer";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  created() {
    this.setAcut();
  },
  methods: {
    ...mapMutations(["setAcut"])
  },
  computed: {
    ...mapState({
      showCenter: "showCenter"
    })
  },
  components: { userimg, mycontainer }
};
</script>

<style lang="scss" scoped>
.my-center {
  flex: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(243, 243, 243);
  .my-center-box {
    flex: 1;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
