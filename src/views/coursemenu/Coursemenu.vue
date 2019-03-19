<template>
  <div class="coursemenu">
    <div class="courseChoseMenu">
      <search-menu/>
    </div>
    <div class="coursesContainer">
      <courses-box :courseList="courseList" v-if="courseList.length !== 0"/>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { course } from "@/utils/api";
import SearchMenu from "./components/SearchMenu";
import CoursesBox from "./components/CoursesBox";

export default {
  name: "coursemenu",
  components: {
    SearchMenu,
    CoursesBox
  },
  data() {
    return {
      page: 1,
      pageItem: 30,
      total: 1,
      searchInput: "",
      courseList: []
    };
  },
  methods: {
    async getCourseList(state) {
      let data = await axios.get(course.courseList, {
        page: this.page,
        pageItem: this.pageItem,
        ...state
      });
      this.total = data.data.data.totalPage;
      delete data.data.data.totalPage;
      this.courseList = data.data.data;
    }
  },
  mounted() {
    this.getCourseList({});
  }
};
</script>

<style lang="less" scoped>
.coursemenu {
  margin-top: 40px;
  background: #f3f5f7;
  min-height: calc(88.7vh - 50px);

  .courseChoseMenu {
    width: 100%;
    padding-bottom: 12px;
    box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.1);
    background: #fff;
  }

  .coursesContainer {
    max-width: 1404px;
    // min-width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .pagination {
    padding-bottom: 50px;
    text-align: center;
  }
}
</style>
