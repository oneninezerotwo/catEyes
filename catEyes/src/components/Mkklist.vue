<template>
  <section class="movie singleton page active" style="height: 37.6rem;">
    <div class="page-wrap">
      <div class="swiper-header movie-ad"></div>
      <div class="tab-block">
        <div class="tab-content">
          <div class="page n-hot active">
            <div class="list-wrap" style="margin-top: 0px;">
              <router-link
                to="movie"
                v-for="(item, index) in movieList"
                :key="index"
                class="item"
                data-id="344328"
                data-bid="dp_wx_home_movie_list"
              >
                <div class="main-block">
                  <div class="avatar" sort-flag>
                    <div class="default-img-bg">
                      <img
                        :src="item.img"
                        onerror="this.style.visibility='hidden'"
                      />
                    </div>
                  </div>
                  <div class="mb-outline-b content-wrapper">
                    <div class="column content">
                      <div class="box-flex movie-title">
                        <div
                          class="title line-ellipsis v3dimax_title"
                          v-text="item.nm"
                        ></div>
                        <span class="version v3d imax"></span>
                      </div>
                      <div class="detail column">
                        <div class="score line-ellipsis">
                          <span class="score-suffix">观众评</span>
                          <span class="grade" v-text="item.sc"></span>
                        </div>
                        <div
                          class="actor line-ellipsis"
                          v-text="item.star"
                        ></div>
                        <div
                          class="show-info line-ellipsis"
                          v-text="item.showInfo"
                        ></div>
                      </div>
                    </div>
                    <div class="button-block" data-id="344328">
                      <div class="btn normal">
                        <span class="fix" data-bid="dp_wx_home_movie_btn"
                          >购票</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      movieList: []
    };
  },
  created() {
    this.getShopList(() => {});
  },
  mounted() {
    window.onscroll = e => {
      if (window.scrollY === 52.79999923706055) {
        this.getShopList();
      }
    };
  },
  methods: {
    async getShopList() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf8e3ec5f6a0303145d426f/example/movie"
      );
      this.movieList = [...this.movieList, ...data.data.data.movieList];
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.page.singleton,
.page.singleton-notab {
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.page.singleton .page-wrap,
.page.singleton-notab .page-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.page,
nav {
  width: 100%;
}
.page {
  position: absolute;
  display: none;
}
.body .page,
.fixed .movie-detail {
  display: none;
}
.page.active {
  display: block;
}
.tab-content .list-wrap {
  background-color: #f5f5f5;
}
.tab-content .list-wrap .item {
  padding-left: 15px;
  background-color: #fff;
}
.tab-content .list-wrap .item .main-block {
  position: relative;
  width: 100%;
}
.tab-content .list-wrap .item .avatar {
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  float: left;
}
.tab-content .list-wrap .item .content-wrapper {
  padding: 12px 14px 12px 0;
  margin-left: 74px;
  height: 90px;
  max-height: 90px;
  position: relative;
}
.tab-content .list-wrap .item .avatar:before,
.tab-wrap .tab:after,
nav .tab:after {
  content: "";
}
.tab-content .list-wrap .item .avatar:before {
  display: block;
  position: absolute;
  width: 46px;
  height: 46px;
  background-repeat: no-repeat;
  background-size: contain;
}
.default-img-bg {
  background-color: #e1e1e1;
  background-size: 100% 100%;
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
.tab-content .list-wrap .item .avatar img {
  background-color: transparent;
  height: 90px;
}
.tab-content .list-wrap .item .content {
  padding-right: 5px;
  margin-right: 48px;
  overflow: hidden;
  text-align: left;
}
.tab-content .list-wrap .item .button-block {
  font-size: 12px;
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  height: 27px;
  margin: auto;
}
.box-flex {
  display: -webkit-box;
  display: flex;
}
.tab-content .list-wrap .item .movie-title {
  max-height: 24px;
  margin-bottom: 7px;
  line-height: 24px;
  overflow: hidden;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.tab-content .list-wrap .item .name,
.tab-content .list-wrap .item .title {
  font-size: 17px;
  color: #333;
  font-weight: 700;
  padding-right: 5px;
  flex-shrink: 1;
}
.pre-show,
.version {
  background-size: contain;
  background-repeat: no-repeat;
  height: 14px;
  width: 17px;
  display: inline-block;
  margin-top: 5px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  margin-right: 3px;
}
.version.v3d.imax {
  width: 43px;
  background-image: url(data:image/png;base64,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);
}
.tab-content .list-wrap .item .detail {
  box-sizing: border-box;
  line-height: 1;
  overflow: hidden;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.tab-content .list-wrap .item .detail .actor,
.tab-content .list-wrap .item .detail .score,
.tab-content .list-wrap .item .detail .show-date,
.tab-content .list-wrap .item .detail .show-info {
  font-size: 13px;
  color: #666;
}
.tab-content .list-wrap .item .detail > div + div {
  margin-top: 6px;
  line-height: 15px;
}
.tab-content .list-wrap .item .detail .score .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
  font-weight: 900;
}
.tab-content .list-wrap .item .button-block .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
}
.tab-content .list-wrap .most-expected {
  padding: 12px 0 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
.tab-content .list-wrap .coming-list {
  background-color: #fff;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.tab-content .list-wrap .most-expected .title {
  margin: 0 0 12px;
  font-size: 14px;
  color: #333;
  text-align: left;
}
.tab-content .list-wrap .most-expected-list {
  overflow: scroll;
  white-space: nowrap;
}
.tab-content .list-wrap .expected-item {
  display: inline-block;
  width: 85px;
  overflow: hidden;
  margin-right: 10px;
}
.tab-content .list-wrap .expected-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}
h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.tab-content .list-wrap .expected-item .name {
  margin: 0 0 3px;
  font-size: 13px;
  color: #222;
}
.tab-content .list-wrap .expected-item .date {
  margin: 0;
  font-size: 12px;
  color: #999;
}
.tab-content .list-wrap .expected-item .poster img {
  height: 100%;
}
.tab-content .list-wrap .expected-item .poster .wish-bg {
  display: inline-block;
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  background-image: -webkit-linear-gradient(top, rgba(77, 77, 77, 0), #000);
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}
.tab-content .list-wrap .expected-item .poster .wish {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
.tab-content .list-wrap .expected-item .poster .toggle-wish {
  width: 28px;
  line-height: 28px;
  background: rgba(61, 63, 71, 0.6);
  text-align: center;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
.tab-content .list-wrap .expected-item .poster .toggle-wish span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.tab-content
  .list-wrap
  .expected-item
  .poster
  .toggle-wish[data-wishst="0"]
  span {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);
}
.more {
  line-height: 40px;
  height: 40px;
  text-align: center;
}
.tab-content .list-wrap .coming-list .group-date {
  padding: 12px 15px 0;
  margin: 0;
  font-size: 14px;
  color: #333;
  text-align: left;
}
.tab-content .list-wrap .item .button-block .btn.pre {
  background-color: #3c9fe6;
}
.pre-show {
  width: 23px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAcCAMAAAAtIK2eAAAAjVBMVEX/tQD/tQD/tgD/tQAAAAD/tAD///7/2Hz/y07/7MD/6rj/7sX/vBv/z17/35X/zVb/twn/8tX/xDf/uRD//fv/9uP/0mj/wS//viL/+u//78r/5qv/4Zn/tQT//PX/9d3/5KP/yEb/8dD/24T/z1z/xj//wSz/3pD/1nP/1G3/0WT/x0L/vyX/+Of/6LMvfBa2AAAABXRSTlPmphztAPMTpaIAAAEcSURBVDjLtdTdboIwAIbhgn5tKQgFBAXGv+Dvdv+XN7owjBADZNl70KMn5EsaSra6RrAgoulbom+wsI1ONCxOI2Q5XmOBP2A5BfItdvkE749vccFUDWCbprmbweJDxQGjLr8YhBDUEMKfmWE4sBnojdOQU2uM/V1XcFbn44ktNWOKD1T0ReE8zoYFPzhwo+WYeQnzqNPQU0OdCd7zvmqYkcRxToM4juUIP8whPmwGiqQCMPnyQZ2pBZTyib1AGqcJTt0rkhA8B4StMKWUwa+uuAfWGF/cFCyBjDwcs3uHd74v27xIATtoX7GVlUD5CRRn4JJLeBbgRQyqOmpfMDgAv+6QWnjrL/X38p20x//3p5AVdtVTsOqRWfV8fQPHkSVDHb7HRAAAAABJRU5ErkJggg==);
}
.tab-content .list-wrap .item .detail .wantsee .person {
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
}
</style>
