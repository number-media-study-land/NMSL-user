<template>
  <div class="coursedetail">
    <div class="whiteBG"></div>
    <section class="courseInfoBox" v-if="courseInfo">
      <div class="courseInfo">
        <h6 class="courseType">{{courseInfo.type}}</h6>
        <h1 class="courseTitle">{{courseInfo.name}}</h1>
        <p class="courseIntro">{{courseInfo.intro}}</p>
        <router-link :to="{ path: `/learn/${courseInfo._id}` }">
          <div class="startStudyBtn">开始学习</div>
        </router-link>
      </div>
    </section>
    <section class="courseAboutBox" v-if="courseInfo">
      <div class="courseAbout">
        <h4 class="courseAboutTitle">关于此课程</h4>
        <p class="courseDesc">{{courseInfo.detail}}</p>
      </div>
      <div class="courseAbout">
        <div class="courseAboutMessage">
          <h5 class="messageTitle">学习时间</h5>
          <h6 class="messageContent">大约 {{courseInfo.time}} 小时</h6>
        </div>
        <div class="courseAboutMessage">
          <h5 class="messageTitle">学习难度</h5>
          <h6 class="messageContent">{{courseInfo.level}}</h6>
        </div>
      </div>
    </section>
    <section class="courseList" v-if="courseInfo">
      <course-list-box :courseVideoMenu="courseVideoMenu"/>
    </section>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { course } from "@/utils/api";
import CourseListBox from "./components/CourseListBox";

export default {
  name: "coursedetail",
  components: {
    CourseListBox
  },
  data() {
    return {
      courseInfo: null,
      courseVideoMenu: []
    };
  },
  methods: {
    async getCourseInfo() {
      let data = await axios.get(course.courseDetail, {
        params: { _id: this.$route.params.courseId }
      });
      data = data.data;
      if (data.code === 0) {
        this.courseInfo = data.data;
        this.getCourseVideoInfo(data.data.name)
      } else {
        this.$message.error(`错误：${data.msg}，已返回课程目录`, 3000);
        setTimeout(() => {
          this.$router.push("/coursemenu");
        }, 1000);
      }
    },
    async getCourseVideoInfo(name) {
      let data = await axios.get(course.courseDetailVideoMenu, {
        params: { name }
      });
      data = data.data;
      if (data.code === 0) {
        this.courseVideoMenu = data.data.videoList;
      } else {
        this.$message.error({
          message: `错误：${data.msg}，已返回课程目录`,
          duration: 7000
        });
        setTimeout(() => {
          this.$router.push("/coursemenu");
        }, 1000);
      }
    }
  },
  mounted() {
    this.getCourseInfo();
  }
};
</script>

<style lang="less" scoped>
.coursedetail {
  .whiteBG {
    position: absolute;
    top: 0;
    width: 100%;
    height: 11.3vh;
    min-height: 64px;
    background: #fff;
  }

  .courseInfoBox {
    width: 100%;
    padding-left: 14.4vw;
    background-color: #f3f5f7;
    box-sizing: border-box;
    cursor: default;

    .courseInfo {
      padding: 100px 0;
      padding-right: 13vw;

      .courseType {
        position: relative;
        margin-bottom: 24px;
        font-size: 15px;
        font-weight: 600;
        line-height: 24px;
        color: #525c65;
      }
      .courseType::before {
        content: "";
        position: absolute;
        left: 0;
        width: 60px;
        height: 4px;
        bottom: -13px;
        background: #15c26b;
      }

      .courseTitle {
        color: #2e3d49;
        font-size: 40px;
        font-weight: 300;
        line-height: 48px;
        margin-bottom: 24px;
      }

      .courseIntro {
        margin-bottom: 36px;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        color: #2e3d49;
      }

      .startStudyBtn {
        display: inline-block;
        width: 5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        box-shadow: 8px 10px 20px 0px rgba(46, 61, 73, 0.15);
        border-radius: 0.25rem;
        color: #f5f5f5;
        background-color: #2f89fc;
        user-select: none;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        transition: 0.3s;
      }
      .startStudyBtn:hover {
        background-color: #2c7ce6;
        box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
      }
    }
  }

  .courseAboutBox {
    width: 100%;
    padding-left: 14.4vw;
    margin: 100px 0;
    box-sizing: border-box;
    cursor: default;

    .courseAbout {
      display: inline-block;
      width: 36%;
      vertical-align: top;

      .courseAboutTitle {
        margin-bottom: 24px;
        line-height: 36px;
        font-size: 32px;
        font-weight: 300;
        color: #2e3d49;
      }

      .courseDesc {
        line-height: 28px;
        font-size: 16px;
        font-weight: 400;
        color: #525c65;
      }

      .courseAboutMessage {
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #dbe2e8;
        padding-bottom: 30px;

        .messageTitle {
          margin-bottom: 6px;
          line-height: 24px;
          letter-spacing: 2px;
          font-size: 15px;
          font-weight: 600;
          color: #7d97ad;
        }

        .messageContent {
          color: #2e3d49;
          font-size: 18px;
          font-weight: 600;
          line-height: 32px;
        }
      }
      .courseAboutMessage:last-child {
        border: none;
        padding: 0;
        margin-top: 20px;
      }
    }

    .courseAbout:last-child {
      margin-left: 10%;
    }
  }

  .courseList {
    width: 100%;
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: #f3f8ff;
    box-sizing: border-box;
    cursor: default;
  }
}
</style>
