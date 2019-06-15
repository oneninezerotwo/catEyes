<template>
  <div class="cinema-list" :style="{marginTop:isFixedMenu?'120px':'0px'}" data-cid="c_5ovvtlp2" style="margin-bottom: 55px;">
    <div class="list-wrap" style="margin-top: 0px; min-height: 696px;">
      <div class="item mb-line-b" :key="index" v-for="(k, index) in this.$store.state.cinameData1" :data-id="k.id" data-bid="dp_wx_home_cinema_list" @click="a_detail">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span v-text="k.nm"></span>
            <span class="price-block">
              <span class="price" v-text="k.sellPrice"></span>
              <span class="q">元起</span>
            </span>
          </div>
          <div class="location-block box-flex">
            <div class="flex line-ellipsis" v-text="k.addr"></div>

            <div class="distance" v-text="k.distance"></div>
          </div>
          <div class="flex"></div>

          <div class="label-block">
            <div class="snack">小吃</div>

            <div class="vipTag">折扣卡</div>

            <div class="hallType">IMAX厅</div>

            <div class="hallType">杜比全景声厅</div>

            <div class="hallType">DTS:X 临境音厅</div>
          </div>

          <div class="discount-block">
            <div>
              <div class="discount-label normal card">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt />
              </div>
              <div class="discount-label-text" v-text="k.promotion.cardPromotionTag"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @import "../assets/cinema.css";
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      cinameLists:
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/cinemaList2"
    };
  },
  async created() {
    const list2 = await this.$axios(this.cinameLists);
    this.$store.state.cinameData1 = list2.data.cinemas;
  },
  methods: {
    a_detail() {
      this.$router.push({ path: "detail" });
    }
  },
  mounted() {
    window.onscroll = e => {
      if (window.scrollY > 219) {
        this.$store.state.isFixedMenu = true;
      } else {
        this.$store.state.isFixedMenu = false;
      }
     
    };
  },
  computed: {
    isFixedMenu() {
      return this.$store.state.isFixedMenu;
    }
  }
});
</script>
