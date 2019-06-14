<template>
    <router-link to="canary" class="movie-detail" :class="{'six':exSiting}" data-bid="dp_wx_buy_movie">
        <div class="movie-filter"></div>
        <div class="poster-bg" style="background-image:url(//p0.meituan.net/71.100/movie/47af2656af6cd0110057bc527b862c665484423.jpg)"></div>
        <div class="detail box-flex">
            <div class="poster">
                <img src="//p0.meituan.net/148.208/movie/47af2656af6cd0110057bc527b862c665484423.jpg">
            </div>
            <div class="content flex">
                <div class="title middle line-ellipsis">X战警：黑凤凰</div>
                <div class="title-en-name line-ellipsis">X-Men: Dark Phoenix</div>
                <div class="score line-ellipsis">

                    7.7

                    <span class="snum">(10.0万人评)</span>

                </div>
                <div class="type line-ellipsis">
                    <span>动作,冒险,科幻</span>

                    <div class="type-group">

                        <img style="width: 42px;" class="sd-imax" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=">

                    </div>

                </div>
                <div class="src line-ellipsis">美国/114分钟</div>
                <div class="pubDesc line-ellipsis">2019-06-06大陆上映</div>
            </div>
        </div>

        <div class="arrow-g">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
        </div>

    </router-link>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    exSiting() {
      return this.$store.state.exSiting;
    }
  }
});
</script>
<style lang="scss" scoped>
.six{
  display: none;
}
a{
    text-decoration: none;
}
.body .movie-detail {
  height: 188px;
  position: relative;
  cursor: pointer;
}
.body .movie-detail .movie-filter {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.body .movie-detail .poster-bg {
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  -webkit-filter: blur(1.2rem);
  filter: blur(1.2rem);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.55;
}
.box-flex {
  display: -webkit-box;
  display: flex;
}
.body .movie-detail .detail {
  height: 150px;
  padding: 19px 30px 19px 15px;
}
.body .movie-detail .arrow-g {
  position: absolute;
  width: 10px;
  right: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.flex {
  -webkit-box-flex: 1;
  flex: 1;
}
.body .movie-detail .detail .content {
  overflow-x: hidden;
  margin-left: 12.5px;
  line-height: 1;
  color: #fff;
  text-align: left;
}
img,
legend {
  border: 0;
}
img {
  width: 100%;
}
a,
img {
  display: block;
}
.body .movie-detail .detail .poster img {
  width: 110px;
  height: 150px;
  box-sizing: border-box;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.body .movie-detail .detail .content .title {
  font-size: 20px;
  margin-top: 2px;
  font-weight: 700;
  overflow: hidden;
}
.body .movie-detail .detail .content .pubDesc,
.body .movie-detail .detail .content .snum,
.body .movie-detail .detail .content .src,
.body .movie-detail .detail .content .title-en-name,
.body .movie-detail .detail .content .type {
  margin-top: 10px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}
.body .movie-detail .detail .content .score {
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 11px;
}
.body .movie-detail .detail .content .type > span,
.mew-desc img {
  vertical-align: top;
}
.body .movie-detail .detail .content .type .type-group {
  display: inline-block;
  width: 42px;
  opacity: 0.85;
}
</style>
