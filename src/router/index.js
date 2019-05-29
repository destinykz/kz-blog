import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/components/Index.vue")
    }
  ]
});
