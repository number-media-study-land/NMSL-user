<template>
  <div class="learnBox">
    <div class="userLearnTitle">
      <span class="userLearnActive">学习课程</span>
    </div>
    <div class="courseContent" v-if="learnList.length !== 0">
      <course-box v-for="item in learnList" :key="item.title" :courseInfo="item"/>
    </div>
    <div v-else class="noClass">还没有学习的课程</div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { userStudy } from "@/utils/api";
import CourseBox from "./CourseBox.vue";

export default {
  name: "learnBox",
  props: ["userInfo"],
  components: {
    CourseBox
  },
  data() {
    return {
      page: 1,
      pageItem: 20,
      learnList: []
    };
  },
  methods: {
    async getLearnList() {
      let data = await axios.get(userStudy.userStudyList, {
        params: {
          userId: this.userInfo._id
        }
      });
      data = data.data;
      if (data.code === 0) {
        this.learnList = data.data || [];
      }
    }
  },
  mounted() {
    this.getLearnList();
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

  .noClass {
    margin: 50px 0;
    text-align: center;
    font-size: 20px;
  }
}
</style>
