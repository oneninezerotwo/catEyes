<template>
  <div class="order-content">
    <div v-for="(item, index) in orderlist" :key="index" class="order-list">
      <div class="order-item mb-line-tb">
        <div class="order-title mb-line-b">
          <a class="cinema-name line-ellipsis" v-text="item.cinema.name"></a>
        </div>
        <a
          data-link="/order/3371935076?$from=canary&amp;_v_=yes"
          class="order-detail-link"
        >
          <div class="order-info">
            <img :src="item.movie.img" alt />
            <div class="order-desc">
              <div class="movie-name line-ellipsis">
                {{ item.movie.name + "&nbsp;&nbsp;" }}
                <span>{{ item.seats.count + "张" }}</span>
              </div>
              <div
                class="showTime line-ellipsis"
                v-text="item.show.showTime"
              ></div>
              <div class="position line-ellipsis">
                {{ item.seats.hallName }}
                <span v-for="(i, index2) in item.seats.list" :key="index2">
                  {{ i.rowId + "排" + i.columnId + "座&nbsp;" }}
                </span>
              </div>
            </div>
          </div>
        </a>
        <div class="order-more mb-line-t">
          <div class="price">
            总价：
            <span v-text="item.order.sellMoney + '元'"></span>
          </div>
          <div class="status" v-text="item.otherStatus"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-content {
  flex: 1;
  background: rgb(243, 243, 243);
  overflow: hidden;

  .order-list {
    .order-item {
      background-color: #fff;
      margin-bottom: 10px;

      .order-title {
        display: -webkit-box;
        display: flex;
        padding: 0 15px;
        .cinema-name {
          display: inline-block;
          text-align: left;
          -webkit-box-flex: 1;
          flex: 1 1 auto;
          line-height: 38px;
          height: 38px;
          font-size: 13px;
          color: #666;
          margin-right: 6px;
          &:after {
            display: inline-block;
            content: "";
            width: 7px;
            height: 7px;
            border-left: 1px solid #777;
            border-top: 1px solid #777;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
          }
        }
      }

      .order-info {
        margin: 12px 15px;
        overflow: hidden;
        position: relative;
        display: -webkit-box;
        display: flex;
        img {
          -webkit-box-flex: 0;
          flex: 0 0 auto;
          width: 57px;
          height: 80px;
          display: block;
        }

        .order-desc {
          -webkit-box-flex: 1;
          flex: 1 1 auto;
          margin-left: 12px;
          margin-top: 4px;
          overflow: hidden;
          .movie-name {
            font-size: 15px;
            color: #000;
            line-height: 21px;
            height: 21px;
          }

          .showTime {
            font-size: 12px;
            color: #888;
            line-height: 18px;
            height: 18px;
            margin-top: 5px;
          }
          .position {
            font-size: 12px;
            color: #888;
            line-height: 18px;
            height: 18px;
          }
        }
      }

      .order-more {
        margin-left: 15px;
        padding: 0 15px 0 0;
        .price {
          line-height: 42px;
          height: 42px;
          font-size: 13px;
          color: #888;
          display: inline-block;
        }

        .status {
          color: #333;
          float: right;
          line-height: 42px;
          height: 42px;
          font-size: 13px;
          // color: #888;
          display: inline-block;
        }
      }
    }
  }
}

.mb-line-b {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
}

.mb-line-t {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==)
    0 top repeat-x;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      orderlist: []
    };
  },
  created() {
    this.getData();
    //运行VueX对应的这些函数
    this.showA();
    this.hiddenC();
    // console.log(this.$store.state);
  },
  methods: {
    async getData() {
      const url =
        "https://www.easy-mock.com/mock/5cfba291e5e7b850d846cdbe/example/proxy_copy_4#!method=get";
      let { data } = await this.$axios.get(url);
      this.orderlist = data.orderlist;
    },

    ...mapMutations(["showA", "hiddenC"]) //调出VueX对应的这些函数
  }
};
</script>
