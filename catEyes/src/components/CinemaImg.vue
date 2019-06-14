<template>
  <div class="cinemaimg">
    <div class="cinema-wrap">
      <div class="cinema-block">
        <div class="cinema-info">
          <div class="title line-ellipsis" v-text="shopName"></div>
          <div class="location line-ellipsis" v-text="shopaddr"></div>
          <div class="location-icon" data-bid="dp_wx_cinema_map">
            <img
              src="data:image/png;base64,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"
            />
          </div>
        </div>
        <div>
          <div>
            <div
              class="cinema-nav swiper-container swiper-container-horizontal"
            >
              <div
                class="post-bg"
                :style="{ 'background-image': 'url(' + bgImg + ')' }"
              ></div>
              <div class="post-bg-filter"></div>
              <div
                class="swiper-wrapper"
                :style="{
                  transform: 'translate3d(' + num_left + 'px, 0px, 0px) ',
                  'transition-duration': '0.9ms'
                }"
              >
                <div
                  :class="{
                    'swiper-slide': true,
                    'swiper-slide-active': num == index
                  }"
                  v-for="(k, index) in filmData.movies"
                  :key="index"
                  @click.stop="active(index)"
                >
                  <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                    <img :src="k.img" />
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-info">
              <div class="movie-title line-ellipsis">
                <span class="title" v-text="activeFilm.nm"></span>
                <span class="grade">
                  {{ activeFilm.wish }}
                  <span class="small">人想看</span>
                </span>
              </div>
              <div
                class="movie-desc line-ellipsis"
                v-text="activeFilm.desc"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-wrap">
      <div class="nav-block mb-line-t">
        <div class="nav-bar mb-line-b">
          <div class="nav-bar-wrap">
            <div
              :class="{ 'nav-item': true, active: a_show == index }"
              @click.stop="higHlight(index)"
              v-for="(k, index) in activeShowTime"
              :key="index"
            >
              <span class="date-title" v-text="k.dateShow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="seat-wrap">
      <div class="discount-block">
        <div class="vip-tips">
          <a>
            <div class="label">折扣卡</div>
            <div class="label-text line-ellipsis">
              购票享低价，首单2张立减4元
            </div>
            <div class="process">9.9元开卡</div>
          </a>
        </div>
      </div>
      <div class="seat-inner-wrap">
        <div class="seat-list">
          <div class="list-wrap">
            <div
              class="item-outer mb-line-b"
              v-for="(k, index) in showTimeDetail.plist"
              :key="index"
            >
              <div class="item box-flex">
                <div class="time-block">
                  <div class="begin" v-text="k.tm"></div>
                  <div class="end">
                    <span class="tui">散场</span>
                  </div>
                </div>
                <div class="info-block">
                  <div class="lan">{{ k.lang }} {{ k.tp }}</div>
                  <div class="hall" v-text="k.th"></div>
                </div>
                <div class="price">
                  <div class="sellPr">
                    <span class="d">¥</span>
                    <span>
                      <span
                        class="stonefont"
                        v-text="(k.vipPrice * 1 + 10) * 1"
                      ></span>
                    </span>
                  </div>
                  <div class="vipPrice">
                    <span class="icon">折扣卡</span>
                    <span class="num" v-text="k.vipPrice"></span>
                  </div>
                  <div class="extraDesc">折扣卡首单特惠</div>
                </div>
                <div class="button-block">
                  <div class="button" data-bid="dp_wx_cinema_show_btn" @click="selectBuy">
                    购票
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tuan-wrap">
      <div class="gap" style="height: 10px; background-color: #f0f0f0;"></div>
      <div class="tuan-list">
        <div class="tuan-title mb-line-b">影院超值套餐</div>

        <div
          class="tuan-item mb-line-b"
          :key="index"
          v-for="(k, index) in showEat"
        >
          <img data-ui-type="image-viewer" :src="k.imageUrl" />

          <span class="hot-tag" v-text="k.cardTag"></span>

          <div class="item-info">
            <div class="title">
              <span>双人</span>
              {{ k.title }}
            </div>

            <div class="sell-num" v-text="k.curNumberDesc"></div>
            <div class="price">
              <span class="sell-price">
                <span>¥</span>
                <span class="num" v-text="k.price"></span>
              </span>
            </div>
            <div class="buy-btn" @click="selectEatBuy">去购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/cinema2.css";
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      filmData: [],
      num: 0,
      num_left: 160,
      shopName: "",
      shopaddr: "",
      a_show: 0,
      bgImg: "",
      activeFilm: [],
      activeShowTime: [],
      showTimeDetail: [],
      showEat: []
    };
  },
  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/film1#!method=get"
    );
    this.filmData = data.data.showData;
    this.shopName = data.data.showData.cinemaName;
    this.shopaddr = data.data.cinemaData.addr;
    this.activeFilm = this.filmData.movies[this.num];
    this.activeShowTime = this.filmData.movies[this.num].shows;
    this.showTimeDetail = this.filmData.movies[this.num].shows[this.a_show];
    this.showEat = data.data.dealList.dealList;
  },
  methods: {
    //轮播图切换
    active(index) {
      if (index > this.num) {
        this.num_left += -80 * (index - this.num);
      } else {
        this.num_left += 80 * (this.num - index);
      }
      this.num = index;
      this.bgImg = this.filmData.movies[index].img;
      this.activeFilm = this.filmData.movies[index];
      this.activeShowTime = this.filmData.movies[index].shows;
      this.a_show = 0;
      this.higHlight(this.a_show);
    },
    higHlight(index) {
      this.a_show = index;
      this.showTimeDetail = this.filmData.movies[this.num].shows[index];
    },
    selectBuy(){
      this.$router.push({ path: "select" });
    },
    selectEatBuy(){
      this.$router.push({ path: "eat" });
    },
  }
});
</script>
