<template>
  <div class="coursedetail">
    <div class="whiteBG"></div>
    <section class="courseInfoBox">
      <div class="courseInfo">
        <h6 class="courseType">图像处理</h6>
        <h1 class="courseTitle">学习灰度化处理</h1>
        <p class="courseIntro">一门课让你学懂图像灰度化处理的课程</p>
        <router-link :to="{ path: '/learn' }">
          <div class="startStudyBtn">开始学习</div>
        </router-link>
      </div>
    </section>
    <section class="courseAboutBox">
      <div class="courseAbout">
        <h4 class="courseAboutTitle">关于此课程</h4>
        <p
          class="courseDesc"
        >对于中等和较长开发周期，尤其是涉及多名开发人员参与的项目，开发人员能够有效地进行版本控制是非常重要和有益的。本课程由优达学城与 GitHub 共同制作，介绍进行版本控制的基础知识，重点讲解 Git 版本控制系统以及 GitHub 协作平台。</p>
      </div>
      <div class="courseAbout">
        <div class="courseAboutMessage">
          <h5 class="messageTitle">学习时间</h5>
          <h6 class="messageContent">大约 10 小时</h6>
        </div>
        <div class="courseAboutMessage">
          <h5 class="messageTitle">学习难度</h5>
          <h6 class="messageContent">初级</h6>
        </div>
      </div>
    </section>
    <section class="courseList">
      <course-list-box/>
    </section>
  </div>
</template>

<script>
import CourseListBox from "./components/CourseListBox";

export default {
  name: "coursedetail",
  components: {
    CourseListBox
  },
  data() {
    return {};
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
