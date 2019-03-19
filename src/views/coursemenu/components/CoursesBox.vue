<template>
  <div class="coursesBox clear-float">
    <course-card v-for="item in courseList" :key="item._id" :courseIntro="item"/>
  </div>
</template>

<script>
import CourseCard from "./CourseCard";

export default {
  name: "coursesBox",
  components: {
    CourseCard
  },
  props: ["courseList"],
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
</style>
