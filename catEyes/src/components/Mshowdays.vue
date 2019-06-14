<template>
    <div id="showDays" :class="{'one':isFixedMenu,'ten':exSiting}">
        <ul id="timeline" class="mb-line-b">

            <li data-day="2019-06-13" :key="k" v-for="(t,k) in timeData" :class="{'showDay':true,'chosen': index==k}" @click="fn(k)">
                {{t}}
            </li>

        </ul>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      index: 0,
      timeData:['今天06月14日','明天06月15日','后天06月16日','周日06月17日','周一06月18日','周五06月19日'],
      cinemaD:[
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu2",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu3",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu4",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu5",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu3",
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/qu2"
        ]
    };
  },
  computed: {
    isFixedMenu() {
      return this.$store.state.isFixedMenu;
    },
    exSiting() {
      return this.$store.state.exSiting;
    }
  },
  methods: {
    async axi(url) {
      const lists = await this.$axios(url);
      this.$store.state.cinameData1 = lists.data.cinemas;
    },
    fn(index) {
      this.index = index;
      this.axi(this.cinemaD[index])
    },
     
  }
});
</script>
<style lang="scss" scoped>
.ten{
  position: relative;
  z-index: 100;
}
#showDays,
#showDays #timeline {
  overflow-x: scroll;
  height: 45px;
}
#showDays {
  width: 100%;
  background-color: #fff;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.mb-line-b {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
}
.mb-line-all,
.mb-line-b,
.mb-line-l,
.mb-line-lr,
.mb-line-r,
.mb-line-t,
.mb-line-tb,
.mb-outline-b,
.mb-outline-t,
.mb-outline-tb {
  background-size: 1px 1px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
#showDays #timeline .showDay {
  position: relative;
  display: inline-block;
  width: 115px;
  line-height: 43px;
  margin-left: 4.5px;
  font-size: 14px;
  text-align: center;
  list-style: none;
  color: #666;
}
#showDays #timeline .showDay.chosen {
  border-bottom: 2px solid #f03d37;
  color: #f03d37;
}
#showDays #timeline {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}
.fixedNav #showDays, .fixedNav .nav-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    padding-top: env(safe-area-inset-top);
}
.one, 
.tow {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    padding-top: env(safe-area-inset-top);
}
</style>
