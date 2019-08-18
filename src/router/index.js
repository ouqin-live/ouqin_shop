import Vue from "vue";
import Router from "vue-router";
import firstPage from "@/pages/firstPage/firstPage";
import discover from "@/pages/discover/discover";
import order from "@/pages/order/order";
import my from "@/pages/my/my";
import login from "@/pages/login/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "firstPage",
      component: firstPage,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/discover",
      name: "discover",
      component: discover,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/order",
      name: "order",
      component: order,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/my",
      name: "my",
      component: my,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
