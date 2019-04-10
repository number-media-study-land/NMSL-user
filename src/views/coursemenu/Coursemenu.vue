<template>
  <div class="coursemenu">
    <div class="courseChoseMenu">
      <search-menu @search="search"/>
    </div>
    <div class="coursesContainer">
      <courses-box :courseList="courseList" v-if="courseList.length !== 0"/>
      <div v-else>暂无相关课程</div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :total="total"
      ></el-pagination>
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
      pageInfo: {
        page: 1,
        pageItem: 30
      },
      total: 10,
      searchInfo: {},
      courseList: []
    };
  },
  methods: {
    async getCourseList(params) {
      let data = await axios.get(course.courseList, {
        params: {
          ...this.pageInfo,
          ...params
        }
      });
      this.total = data.data.data.totalPage * 10;
      this.courseList = data.data.data.list;
    },
    search(value) {
      this.pageInfo = {
        page: 1,
        pageItem: 30
      };
      this.searchInfo = value;
      this.getCourseList(value);
    },
    // 分页
    changePage(nowPage) {
      this.pageInfo.page = nowPage;
      this.getCourseList(this.searchInfo);
    }
  },
  mounted() {
    this.getCourseList(this.searchInfo);
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
