<template>
  <div class="NewestCourses">
    <div class="levelTitle">最新课程</div>
    <div class="noCourseTip" v-if="courseList.length < 1">没有最新的课程</div>
    <div class="newestCourseBox" v-else>
      <router-link
        class="CourseBox"
        v-for="item in courseList"
        :key="item._id"
        :to="{ path: `/courseDetail/${item._id}` }"
      >
        <div>
          <img :src="item.cover" alt>
          <div class="imgShadow">
            <h3 class="courseTitle">{{item.name}}</h3>
          </div>
          <div class="courseintroBox">
            <p class="intro">{{item.intro}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { home } from "@/utils/api";

export default {
  name: "NewestCourses",
  components: {},
  data() {
    return {
      courseList: []
    };
  },
  methods: {
    async getNewestCourse() {
      let res = await axios.get(home.newestCourse);
      this.courseList = res.data.data;
    }
  },
  mounted() {
    this.getNewestCourse();
  }
};
</script>

<style lang="less" scoped>
.levelTitle {
  font-size: 38px;
  font-weight: 300;
  text-align: center;
}

.noCourseTip {
  margin-top: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
}

.newestCourseBox {
  display: flex;
  justify-content: space-around;
  width: 75vw;
  margin: 0 auto;
  margin-top: 30px;

  .CourseBox {
    position: relative;
    display: inline-block;
    width: 30%;
    border-radius: 8px;
    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      width: 100%;
      height: 31vh;
      max-height: 180px;
      vertical-align: middle;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .imgShadow {
      position: absolute;
      top: 0;
      width: 100%;
      height: 31vh;
      max-height: 180px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      background: rgba(43, 43, 40, 0.5);

      .courseTitle {
        padding: 10vh 5% 0 10%;
        margin: 0;
        color: #fff;
        font-size: 1.8vw;
        font-weight: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .courseintroBox {
      height: 15vh;
      padding: 1.25rem 2rem 1.5rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      font-size: 1rem;
      background: #fff;
      color: #333;
    }
  }
  .CourseBox:hover {
    transform: translate(0, -15px);
  }
}
</style>
