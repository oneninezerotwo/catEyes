import Vue from "vue";
import Router from "vue-router";
import Cookies from "js-cookie";
import Home from "./views/Home.vue";
import Cinema from "./views/Cinema.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/hot",
      children: [
        {
          path: "hot",
          name: "hot",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Mkklist.vue"),
          meta: { title: "猫眼电影", requireAuth: false }
        },
        {
          path: "aa",
          name: "aa",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Maalist.vue"),
          meta: { title: "猫眼电影", requireAuth: false }
        }
      ]
    },
    {
      path: "/movie",
      name: "movie",
      meta: { title: "X战警：黑凤凰", requireAuth: false },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Movie.vue")
    },
    {
      path: "/canary",
      name: "canary",
      meta: { title: "X战警：黑凤凰", requireAuth: false },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Canary.vue")
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cinema",
      name: "cinema",
      component: Cinema,
      meta: { title: "影院", requireAuth: false }
    },
    {
      path: "/mseach",
      name: "mseach",
      component: () =>
      import(/* webpackChunkName: "about" */ "./components/Mseach.vue"),
      meta: { title: "猫眼电影", requireAuth: false }
    },
    {
      path: "/detail",
      name: "detail",
      meta: { title: "龙洞巨幕影城", requireAuth: false },
      component: () => import("./components/CinemaDetail.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: { title: "猫眼电影", requireAuth: false },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Mlogin.vue")
    },
    {
      path: "/select",
      name: "select",
      meta: { title: "龙洞巨幕影城", requireAuth: true },
      component: () =>
        import( "./components/CinemaSelect.vue")
    },
    {
      path: "/eat",
      name: "eat",
      meta: { title: "确认订单", requireAuth: true },
      component: () =>
        import( "./components/EatBuy.vue")
    },
    {
      path: "/createorder",
      name: "createorder",
      meta: { title: "支付订单" },
      component: () => import("./views/Createorder.vue")
    },
    {
      path: "/center/",
      name: "center",
      meta: { title: "我的", requireAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Mycenter.vue"),
      children: [
        {
          path: "orderList",
          name: "orderList",
          meta: { title: "我的电影订单" },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Myorder.vue")
        },
        {
          path: "periphery",
          name: "periphery",
          meta: { title: "我的周边商品" },
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Mperiphery.vue")
        },
        {
          path: "mcanary",
          name: "mcanary",
          meta: { title: "猫眼电影" },
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Mperiphery.vue")
        },
        {
          path: "coupon",
          name: "coupon",
          meta: { title: "我的优惠券" },
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Mcoupon.vue")
        },
        {
          path: "discount",
          name: "discount",
          meta: { title: "我的折扣卡" },
          children: [
            {
              path: "/card",
              name: "card",
              meta: { title: "影院会员卡" },
              component: () =>
                import(/* webpackChunkName: "about" */ "./components/Mcard.vue")
            }
          ],
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Mdiscount.vue")
        }
      ]
    }
  ]
});

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let userName = Cookies.get("userName");
    if (userName) {
      next();
    } else {
      next({
        path: "/login"
        // query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
