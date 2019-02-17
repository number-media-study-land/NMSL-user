<template>
  <div class="learnBox">
    <div class="userLearnTitle">
      <span class="userLearnActive">学习课程</span>
    </div>
    <div class="courseContent">
      <course-box/>
      <course-box/>
      <course-box/>
      <course-box/>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1"></el-pagination>
    </div>
  </div>
</template>

<script>
import CourseBox from "./CourseBox.vue";

export default {
  name: "learnBox",
  components: {
    CourseBox
  }
};
</script>

<style lang="less" scoped>
.learnBox {
  margin-left: 240px;
  min-height: 589px;

  .userLearnTitle {
    font-size: 14px;
    color: #787d82;
    height: 58px;
    line-height: 58px;
    margin-top: 10px;
    border-bottom: 1px solid #d0d6d9;

    .userLearnActive {
      display: inline-block;
      border-bottom: 2px solid #2f89fc;
      margin-right: 53px;
      color: #2f89fc;
    }
  }

  .pagination {
    margin-top: 50px;
    margin-bottom: 90px;
    text-align: center;
  }
}
</style>
