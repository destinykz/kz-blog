import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("@/components/Index.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/components/Index.vue")
    }
  ]
});
