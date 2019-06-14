<template>
  <div class="food-block mb-outline-tb has-food">
    <header class="box-flex middle">
      <div>观影标配</div>
      <div class="flex"></div>
      <div class="snacktitle box-flex middle">
        {{ lists.headTitle }}
        <div class="snackicon"></div>
      </div>
    </header>
    <section class="f-list">
      <div
        v-for="(items, ind) in lists.snackList"
        :key="ind"
        class="f-item mb-outline-t"
        :data-id="items.dealId"
        :class="ind > 4 ? change : ''"
      >
        <div class="f-img">
          <img
            data-com="album"
            data-page="0"
            :src="items.imageUrl"
            onerror="this.style.display='none'"
          />
        </div>
        <div class="f-con">
          <div class="f-name">
            <span class="personNum" v-text="items.titleTag"></span>
            {{ items.title }}
          </div>
          <div class="f-recommend-container">
            <div class="f-recommend">
              <div class="recommendicon" v-if="items.recommendTag"></div>
              <span>{{ items.recommendTag }}</span>
            </div>
          </div>
          <div class="f-con-b flex-between">
            <div class="f-price">
              <span class="p-real">
                <span class="icon">¥</span>
                {{ items.price }}
              </span>
              <span class="p-yet">
                ¥
                <span>{{ items.value }}</span>
              </span>
            </div>
            <div class="f-oper">
              <div class="box">
                <span class="minus" @click="subtract(ind)"></span>
                <span class="num" v-text="items.cardTagType"></span>
                <span class="add" @click="add(ind)"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="showallsnack mb-outline-t"
        @click="loadMore"
        :class="change == 'hidden' ? '' : 'hidden'"
      >
        查看全部{{ len }}个套餐
      </div>
    </section>

    <footer class="snack-discount-block mb-outline-t">
      <div class="f-left">抵用券</div>
      <div class="f-right" data-bid="dp_wx_snack_coupon">
        <span class="snack-discount-amount">无可用</span>
        <span class="arrow"></span>
      </div>
    </footer>
    <footer
      class="mb-outline-t count-price-container"
      :class="foodPrice == 0 ? 'hidden' : ''"
    >
      <div class="f-left">小计</div>
      <div class="f-right">
        <span class="icon">¥</span>
        <span class="count-price">{{ foodPrice }}</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [],
      change: "hidden",
      len: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    add(index) {
      this.lists.snackList[index].cardTagType++;
    },
    subtract(index) {
      if (this.lists.snackList[index].cardTagType <= 0) {
        this.lists.snackList[index].cardTagType = 0;
      } else {
        this.lists.snackList[index].cardTagType -= 1;
      }
    },
    async getList() {
      const url =
        "https://www.easy-mock.com/mock/5cfba291e5e7b850d846cdbe/example/proxy_copy_6";
      let { data } = await this.$axios.get(url);
      this.lists = data;
      this.len = data.snackList.length;
      // console.log(this.lists);
    },
    loadMore() {
      this.change = "";
    }
  },
  computed: {
    foodPrice() {
      let num = 0;
      for (let i = 0; i < this.len; i++) {
        num +=
          this.lists.snackList[i].cardTagType * this.lists.snackList[i].price;
      }
      this.$store.state.foodPrice = num;
      this.$store.commit("final"); //调用VueX里面的方法
      if (num) {
        return num.toFixed(2);
      } else {
        return num.toFixed(0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none !important;
}
.food-block.has-food {
  margin-top: 10px;
}
.food-block {
  padding: 0 15px;
  font-size: 15px;
  background-color: #fff;
  header {
    color: #666;
    padding: 12px 0;
    .snacktitle {
      font-size: 12px;
      color: #999;
    }
    .snackicon {
      height: 20px;
      width: 17px;
      margin-left: 4px;
      background-size: cover;
      background-image: url(data:image/png;base64,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);
    }
  }
  .showallsnack {
    line-height: 45px;
    font-size: 13px;
    color: #ef4238;
    text-align: center;
    padding-right: 15px;
    margin-right: -15px;
  }
  footer {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 15px !important;
    margin-right: -15px;
    color: #666;
    padding: 12px 0;
    .f-right {
      font-size: 14px;
      color: #333;
    }
  }
}
.food-block .count-price-container .f-right .icon {
  font-size: 13px;
}
.food-block .count-price-container .f-right {
  color: #ef4238;
  font-size: 18px;
}
.f-item {
  padding: 15px 15px 15px 0;
  margin-bottom: -1px;
  overflow-y: hidden;
  -webkit-transition: height 0.2s linear;
  transition: height 0.2s linear;
  margin-right: -15px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  .f-img {
    width: 95px;
    height: 95px;
    margin-right: 15px;
    background: #f0f0f0;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .f-con {
    -webkit-box-flex: 1;
    flex: 1;
    .f-name {
      height: 40px;
      line-height: 20px;
      margin-bottom: 4px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      .personNum {
        background: #f90;
        color: #fff;
        font-size: 10px;
        line-height: 12px;
        height: 12px;
        padding: 1px 4px;
        border-radius: 2px;
        position: relative;
        top: -1px;
      }
    }
  }
  .f-recommend-container {
    display: inline-block;
    font-size: 10px;
    color: #f90;
    height: 23px;
  }
  .f-recommend {
    background: #fff7ea;
    line-height: 16px;
    padding: 0 5px;
    .recommendicon {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 5px;
      background-size: cover;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAmBJREFUOBGllTtoVFEQhv/Zh8S3Qiy2EYtUgqVPjFj5aEQsFCujwRdYiFhYWFraiJWaGIU0ChY2IiEiBJFtAsHGF6j4wFKTQjS77vGbc+8mu5u7ZNcMzJkzr//OOWeGa+qCwi31yjRKylYFPdAyXbKT+p0FUcgytrWZrgG4P/Wf16x+sb+cFZ/LMra1BSp1Ml1krboMw1odbS1Lx8BhRD3kbon5pkeAvqD6vP5qewtmVDsG5thHyCgC+NpO6yv7zxHBtC7KlqUjYB5tLXnXY27QzRQjuYLAJzNoUeDwkONK9+AS1U4hh2BxDZuilL6nskkYias0rQMEroke41EKmqCNPsV7reg+vqP4fmDfaYN6S85ytBlsBeV0AVlvuRp7v6qyhdt6SmK9hbBH8iR/qMPwDXiGag/aGb1kr3BH/appwvdt6Kr38e7UOUqy39cePtTHvh/OAeDtNVIHjbE1KjYNp3mNIk/uAL5zDjwNr6SZrtgJfeMEI+h9cBFOKBDeQHZWY6jOTcQjlzAMEN3jj+fAoh/95f1RLMr/WfLaHNNM73IA/YxKNe1Ha66uK/yatqXxk/MVK624K6QFwTuiJaic4+BJxW0maEFqG0PwKwzaFd1FB67fcVhixUOxPXvB+2Kn9MGBk4pD9szHCjpZgvbFMNMzl/MVL/2OkyEzBg4qzHWFaX14jv4+fsx9YjiqyUalOMYbVEn1ZvFRG/Hs5ZZntSLpbx/pQ4A/bo5EMx1nfYNvEuknW5xMd5nQQQ/0Ph4H5An7P7BXWEEv4xkjaAp5DP1Vg99jWtlzxpnfud/UP+V0ob2tyHowAAAAAElFTkSuQmCC);
    }
  }
  .f-price {
    font-size: 12px;
    .p-real {
      color: #f03d37;
      font-size: 17px;
      .icon {
        font-size: 13px;
      }
    }
    .p-yet {
      color: #999;
      text-decoration: line-through;
    }
  }
  .f-oper {
    display: -webkit-box;
    display: flex;
    box-sizing: border-box;
    height: 25px;
    width: 82px;
    border-radius: 100px;
    overflow-x: hidden;
    line-height: 25px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    .box {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      box-sizing: border-box;
      -webkit-box-pack: end;
      justify-content: flex-end;
    }
    .num {
      height: 14px;
      line-height: 16px;
      width: 32px;
      text-align: center;
    }
    .minus,
    .add {
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 25px 25px;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
    }
    .minus {
      background-image: url(data:image/png;base64,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);
    }
    .add {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAABUZJREFUaAXdWmtoXEUUPmfu3U23ZG8qSPNDU38E04a2giAmMUk3MamKQlpbUrREa1GCgi8E66Oo+EPQ/lDwlwQf+KCUiqHBP8W+kprmAaLFtGoSCjatYMyf7CY2bXZ3jmdueveVu4+7uTG7uT92HufMN+e7M3N27plBcOmhzk7Pv+Mj22QUWiXJTQhQBYC3ElApIno5neWuZpBwgpBGkcQvXg9+7zs9cNklE4D7zP+htnp/MCgfQqIdbOwjQLDOMRrCeQTs0YQ4Vto7cN5x+4QGeZGh9jpfcFK+xDivM4GyBLwlZZlUPwpxwOgbGMwHyBEZam/XZiavPiWB3gWi2/LpMKc2iN3Co79hnOofy0n/plLOZILbau4kwO+YxFYnHeSry+sswm3fN/oG3+Y85YKTE5npptpWiMJRALolF1A3dRChxxC+DuztVQ4k45OVTDBQ+wKvi4+ISMuItJxCxJESAW2+3qE/M3WTkcx0Y+0HPBoHMgH8XzJ2DlOoa43GmXOj6fpMSyYUqNkvJXyeruFK1LOxY4bmq+EpN23Xv7CrDDXX1pOET+xkK1nHXqAqJK8fVV7Vzo5FZOZaGzZQBLq5odeuwUrX8drdHpq88qGdHYvIzM+Hu/jffL2dcqHUMaEXZwL1zan2JJGZba5rIYIHU5UKsSwpcohJJa35GBkliETpkNuG640B8O7eA2gYrkLzS78nGKjbkwgaY8aCx0nKw4nCpeZLOvbBms7nTJjoxGWY3bcXIBpdKmysPbvrS0b1XdXY1RVWlbGRASkPxrRcyugNjTEkbcMdIG6viJXdyPDargyNXnjMwjLJhFoaqth7bbYq3UpR9yRDed13kCSju6xOFkZmPrrDqijC9AH1SaLsNsnwl9/OIiRhmbx2ZpK2m2RmW2rKeVtfa0mKMeXvK3NmCRnGGl4vcUdQhGzYq91njgwQbixC+5NNJqqkpiZdAMrKZEnxlXhmea5LWSH4U9h5RKUA+UoIr9PZLn8+tq159nnwProb0Gd6xZwg/J99lVaPdx8Q/e0iXHvnTaCpqbR66QQS0M8Ln3c5Dh9tUzWU7O1wRCRbFxxiAn3LVih5Yn82VVs5cdCDyWDWQIFt6wKr1EjOCgSy/QTNZGv0j9/hxuFvgObmMqk5kqlpFrkwAje+/sJRO0tZgGcaQ411r0qQrm/9VSeln34JWlXc8888/STIcUdxPcvWjClv/cMcG1jLrpnSRjsyIhSSEPESBzkiQnhomJnJQrLNqS38KTCg2ojSU8OTgDjkFKCQ9Hl69Zhk1A+fmRwrJOMc2nLNX44nVJuFDaZXM5k5BCkU9R/w20HTrZpk1NEBr5uLhWKdEztQaN2W/sLIqJIQ71mVbqUUMeMMcbj5+XjehZwZ0Ni45YgFFSNj9A4cYUfwsyVwI430/xiDUdEZefVKrOxGhqNmB63IjMLj2RV/VBAwEpEn4zVLz6m4mVhfDuETx4FCoaUD3kTgc5ufjL6hexMPopLIKD0+ITteDFFNTej3+/vOnUl8O7FpZlV6vZ5Onov/WOVCTHk0Pk4louxcRMZ3sn8CddjFQ+buanXprTCRE0Z5xSt2cIummaW0ag6bFCGjb5j34rgsu2nrhTlJeerzMaDelu7UTGGlHRmro1VzQGsRWjVH5xahYrjUsMibWcanpmVnh8fLyivuFiie4Z3CX6lyV8t83QQ9+uays0NvJf4pZusj65qxAzAvAv0NL3MA8bWivQiUSizhitZO/tp7mIk5Dyiu9BWtVFKqrC7PBcd+DQiJLcmX58DP+yjr8lxoOS/P/Qc5asye9h9/awAAAABJRU5ErkJggg==);
    }
  }
}
.flex-between {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.f-con .f-con-b {
  -webkit-box-align: end !important;
  align-items: flex-end !important;
}
.pay-section .arrow {
  width: 8px;
  height: 8px;
  margin-left: -2px;
}
</style>
