<template>
  <div class="login-box">
    <loginbox />
  </div>
</template>

<script>
import loginbox from "../components/Mloginbox";
import Cookies from "js-cookie";
import { mapMutations } from "vuex";
export default {
  created() {
    this.setAadd();
    if (Cookies.get("userName")) {
      // console.log("ok");
      this.$router.push("/");
    }
  },
  methods: {
    ...mapMutations(["setAadd"])
  },
  components: { loginbox }
};
</script>
