import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Coursemenu from "./views/coursemenu/Coursemenu.vue";
import CourseDetail from "./views/coursedetail/CourseDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/coursemenu",
      name: "coursemenu",
      component: Coursemenu
    },
    {
      path: "/coursedetail",
      name: "coursedetail",
      component: CourseDetail
    }
  ]
});
