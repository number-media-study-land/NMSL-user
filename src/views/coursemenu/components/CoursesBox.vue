<template>
  <div class="coursesBox clear-float">
    <course-card/>
    <course-card/>
    <course-card/>
    <course-card/>
    <course-card/>
    <course-card/>
    <course-card/>
    <course-card/>
  </div>
</template>

<script>
import CourseCard from "./CourseCard";

export default {
  name: "coursesBox",
  components: {
    CourseCard
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
</style>
