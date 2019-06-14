<template>
  <div class="header">
    <img
      src="https://img.meituan.net/avatar/__74778767__8413289.jpg"
      class="head-icon"
    />
    <div class="name"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #f03d37;
  background-image: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 150px;
  height: 150px;
  overflow: hidden;
  text-align: center;
  img {
    display: inline-block;
    margin-top: 30px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 3px solid #fff;
  }
  .name {
    margin-top: 7px;
    font-size: 16px;
    line-height: 22.5px;
    color: #fff;
  }
}
</style>
