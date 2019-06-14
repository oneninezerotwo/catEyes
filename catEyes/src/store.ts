import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leftArrow: 0, //左上角返回键
    showCenter: 0, //个人中心页
    showDiscount: 1, //折扣页
    foot_show: true,
    cinameData1: [],
    select_data: [],
    ticketPice: 48.9, //电影单张票价
    foodPrice: 0,
    totalPrice: 0,
    isFixedMenu: false,
    exSiting: false
  },
  mutations: {
    final(state) {
      state.totalPrice =
        state.ticketPice * state.select_data.length + state.foodPrice;
    },
    setAadd(state) {
      state.leftArrow = 1;
    },
    setAcut(state) {
      state.leftArrow = 0;
    },
    showA(state) {
      state.leftArrow++;
    },
    hiddenA(state) {
      state.leftArrow--;
    },
    showC(state) {
      state.showCenter++;
    },
    hiddenC(state) {
      state.showCenter--;
    },
    showD(state) {
      state.showDiscount = 1;
    },
    hiddenD(state) {
      state.showDiscount = 0;
    },
    showF(state) {
      state.foot_show = true;
    },
    hiddenF(state) {
      state.foot_show = false;
    }
  },
  actions: {}
});
