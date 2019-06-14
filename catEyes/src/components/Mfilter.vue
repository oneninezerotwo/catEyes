<template>
    <div class="nav-wrap filter-nav-wrap" :class="{'tow':isFixedMenu,'tow1':exSiting}" :style="{top:isFixedMenu?'45px':'0px'}">
        <div class="tab mb-line-b">
            <div :class="{ item: true, chosenTitle: l_show == index }" v-for="(data, index) in list" :key="index" @click.stop="active(index),Change()">
                {{ data }}
                <span class="drop"></span>
            </div>
        </div>
        <div class="close-tab" v-if="v_show">
            <!-- <div>1234</div> -->
            <div class="tab-content">
                <!--特色-->
                <div class="page special" v-show="l_show == 2">
                    <div id="special-content" style="height: 386.4px;">
                        <div class="item-title">特色功能</div>
                        <div class="item-list">
                            <div :class="{ item: true, chosen: ac5 == index }" @click.stop="a_active_area4(index)" :data-id="k.id" data-type="service" v-for="(k, index) in service" :key="index" v-text="k.name"></div>
                        </div>

                        <div class="item-title">特殊厅</div>
                        <div class="item-list">
                            <div :class="{ item: true, chosen: ac6 == index }" @click.stop="a_active_area5(index)" :data-id="k.id" data-type="hallType" v-for="(k, index) in hallType" :key="index" v-text="k.name">
                                全部
                            </div>
                        </div>
                    </div>
                    <div id="special-btn">
                        <span class="btn" id="cancel-btn" @click.stop="reset">重置</span>
                        <span class="btn" id="confirm-btn" @click.stop="ok">确定</span>
                    </div>
                </div>
                <!--品牌-->
                <div class="page brand" v-show="l_show == 1">
                    <div id="brand-content" style="height: 386.4px;">
                        <div :class="{ item: true, 'brand-list': true, chosen: ac3 == index }" @click.stop="a_active_area3(index, k.name)" v-for="(k, index) in brands" :key="index" :data-id="k.id" data-type="brand">
                            <span class="brand-name" v-text="k.name"></span>
                            <span class="brand-count" v-text="k.count"></span>
                        </div>
                    </div>
                </div>
                <!--全城-->
                <div class="page region" v-show="l_show == 0">
                    <div id="region-tab">
                        <ul class="tab">
                            <li :class="{ item: true, chosen: s_tab_d_is1 }" @click.stop="s_tab_d1">
                                商区
                            </li>
                            <li :class="{ item: true, chosen: s_tab_d_is2 }" @click.stop="s_tab_d2">
                                地铁站
                            </li>
                        </ul>
                    </div>
                    <div id="region-list" style="height: 450.8px;">
                        <div id="region-sidenav">
                            <div id="district" v-show="s_tab_d_is1">
                                <div :class="{
                    'district-li': true,
                    item: true,
                    chosen: ac == index
                  }" @click.stop="a_area(index)" v-for="(k, index) in area" :key="index" data-type="district" :data-id="k.id" v-text="k.name + '(' + k.count + ')'"></div>
                            </div>
                            <div id="subway" v-show="s_tab_d_is2">
                                <div :class="{
                    'district-li': true,
                    item: true,
                    chosen: ac == index
                  }" @click.stop="a_area(index)" v-for="(k, index) in subNum" :key="index" data-type="district" :data-id="k.id" v-text="k.name + '(' + k.count + ')'"></div>
                            </div>
                        </div>
                        <div id="region-list-item">
                            <div id="filter-list">
                                <div :class="{ item: true, chosen: ac3 == index }" @click.stop="a_active_area2(index, k.name)" v-for="(k, index) in subContent['subItems']" :key="index" data-type="area" :data-id="k.id">
                                    <span class="item-name" v-text="k.name"></span>
                                    <span class="item-count" v-text="k.count"></span>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blacker" :class="{'tow2':exSiting}"></div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isok:0,
      list: ["全城", "品牌", "特色"],
      area: [],
      subNum: [],
      alldata: [],
      subContent: [],
      brands: [],
      ac: 0,
      ac2: 0,
      ac3: 0,
      ac4: 0,
      ac5: 0,
      ac6: 0,
      s_tab_d_is1: false,
      s_tab_d_is2: true,
      l_show: 3,
      v_show: false,
      service: [],
      hallType: [],
      cinameUrls: [
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/cin3",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/cin1",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/cin2",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/cin3"
      ],
      areaUrls: [
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu1",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu2",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu3",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu4",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu5"
      ],
      subUrls: [
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/di1",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu2",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu3",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/di1"
      ]
    };
  },
  async created() {
    const lists = await this.$axios(
      "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/list"
    );

    this.alldata = lists;
    this.area = lists.data.district.subItems;
    this.subNum = lists.data.subway.subItems;
    this.brands = lists.data.brand.subItems;
    this.service = lists.data.service.subItems;
    this.hallType = lists.data.hallType.subItems;
  },
  mounted() {
    document.onclick = function() {
      this.v_show = false;
      this.l_show = 3;
      this.$store.state.exSiting = false;
      this.isok=0
    }.bind(this);
  },
  destroyed() {
    document.body.style.overflow = 'scroll';
  },
  methods: {
    // 收起来

    // 请求ajax
    async axi(url) {
      const lists = await this.$axios(url);
      this.$store.state.cinameData1 = lists.data.cinemas;
    },
    // 商区和 地铁切换
    s_tab_d1() {
      this.s_tab_d_is1 = true;
      this.s_tab_d_is2 = false;
    },
    s_tab_d2() {
      this.s_tab_d_is1 = false;
      this.s_tab_d_is2 = true;
    },
    active(index) {
      this.v_show = true;
      this.l_show = index;
    },

    // 点击地区
    a_area(index) {
      this.ac = index;
      if (this.s_tab_d_is1) {
        this.subContent = this.area[index];
      }
      if (this.s_tab_d_is2) {
        this.subContent = this.subNum[index];
      }
    },
    a_active_area(index) {
      this.ac2 = index;
    },
    a_active_area2(index, text) {
      this.ac3 = index;
      this.list[0] = text;
      this.v_show = false;
      this.isok=0
      if (this.s_tab_d_is1) {
        this.axi(this.areaUrls[index]);
      } else {
        this.axi(this.subUrls[index]);
      }
        this.$store.state.exSiting = false;
      
    },

    a_active_area3(index, text) {
      this.ac4 = index;
      this.list[1] = text;
      this.v_show = false;
        this.isok=0
      // this.$store.state.cinameData1=this.cinameUrls[index]
      this.axi(this.cinameUrls[index]);
        this.$store.state.exSiting = false;

    },
    a_active_area4(index) {
      this.ac5 = index;
    },
     a_active_area5(index) {
      this.ac6 = index;
    },
    reset() {
      this.axi(
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/cinemaList2"
      );
      this.list = ["全城", "品牌", "特色"];
      this.v_show = false;
        this.$store.state.exSiting = false;

    },
    ok() {
      this.v_show = false;
        this.$store.state.exSiting = false;

    },
    Change(){
      document.body.style.overflow = 'hidden';
      
      this.isok = !this.isok
      if(this.isok){
        this.$store.state.exSiting = true;
      }else{
        this.$store.state.exSiting = false;
      }
    }
  },
  computed: {
    isFixedMenu() {
      return this.$store.state.isFixedMenu;
    },
    exSiting() {
      return this.$store.state.exSiting;
    }
  }
});
</script>

<style lang="scss" scoped>
.tow2{
  z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);
}
.tow1{
  z-index: 100;
}
.tow {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    padding-top: env(safe-area-inset-top);
}
@import "../assets/cinema2.css";
</style>

