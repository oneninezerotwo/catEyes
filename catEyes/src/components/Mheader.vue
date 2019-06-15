<template>
  <header class="navbar">
    <div class="nav-wrap-left">
      <a
        class="back"
        href="#"
        onclick="javascript: window.history.back();return false;"
      >
        <i class="icon-back"></i>
      </a>
    </div>
    <h1 class="nav-header">猫眼电影</h1>
  </header>
</template>
<style lang="scss" scoped>
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.navbar .nav-wrap-left {
  height: 50.5px;
  line-height: 50.5px;
}
.navbar:not(.icbcback) .nav-wrap-left .back {
  display: none;
}
.nav-wrap-left a.back {
  height: 50px;
  width: 22.5px;
  line-height: 50px;
  padding: 0 15px;
}
.icon-back {
  display: inline-block;
  width: 22.5px;
  height: 22.5px;
  vertical-align: middle;
  position: relative;
}
.navbar .h1.nav-header,
.navbar h1.nav-header {
  display: block;
  -webkit-box-flex: 1;
  // -ms-flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.navbar:not(.icbcback) h1.nav-header {
  margin-right: 0 !important;
}
</style>
