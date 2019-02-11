<template>
  <div class="home">
    <gradation-bg/>
    <div class="introduceBox">
      <div class="logoBox">
        <img class="logoImg" src="@/assets/logo.svg" alt="logo">
        <span class="logFont">树莓学</span>
      </div>
      <div class="introduce">专注于数字媒体在线学习</div>
    </div>
    <div class="courseBanner">
      <div class="levelTitle">最新课程</div>
      <div class="newestCourseBox">
        <div class="CourseBox">
          <img src="https://img3.mukewang.com/5c176d7800018a3106000338-240-135.jpg" alt>
          <div class="imgShadow">
            <h3 class="courseTitle">灰度值学习</h3>
          </div>
          <div class="courseInfoBox">
            <p class="info">学习图像处理中的基础：灰度值</p>
          </div>
        </div>
        <div class="CourseBox">
          <img src="https://img3.mukewang.com/5c176d7800018a3106000338-240-135.jpg" alt>
          <div class="imgShadow">
            <h3 class="courseTitle">灰度值学习</h3>
          </div>
          <div class="courseInfoBox">
            <p class="info">学习图像处理中的基础：灰度值</p>
          </div>
        </div>
        <div class="CourseBox">
          <img src="https://img3.mukewang.com/5c176d7800018a3106000338-240-135.jpg" alt>
          <div class="imgShadow">
            <h3 class="courseTitle">灰度值学习</h3>
          </div>
          <div class="courseInfoBox">
            <p class="info">学习图像处理中的基础：灰度值</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GradationBg from "../components/GradationBg";

export default {
  name: "home",
  components: {
    GradationBg
  }
};
</script>

<style lang="less" scoped>
.home {
  display: inline-block;
  width: 100%;
  height: 88vh;
  overflow: hidden;

  .introduceBox {
    margin-top: 7vh;

    .logoBox {
      width: 50vw;
      margin: 0 auto;
      text-align: center;
      user-select: none;
      animation: LogofadeIn;
      animation-duration: 1s;

      .logoImg {
        height: 86px;
      }

      .logFont {
        line-height: 13vh;
        vertical-align: top;
        font-size: 50px;
        color: #444444;
        letter-spacing: 3px;
      }
    }

    .introduce {
      width: 50vw;
      margin: 0 auto;
      margin-top: 10px;
      text-align: center;
      font-size: 20px;
      animation: infoFadeIn;
      animation-duration: 1.5s;
    }
  }

  .courseBanner {
    margin-top: 10vh;
    animation: fadeIn;
    animation-duration: 2s;

    .levelTitle {
      font-size: 38px;
      font-weight: 300;
      text-align: center;
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
          max-height: 167px;
          vertical-align: middle;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .imgShadow {
          position: absolute;
          top: 0;
          width: 100%;
          height: 31vh;
          max-height: 167px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background: rgba(43, 43, 40, 0.5);

          .courseTitle {
            padding: 22% 5% 0 10%;
            margin: 0;
            color: #fff;
            font-size: 1.8vw;
            font-weight: normal;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .courseInfoBox {
          height: 15vh;
          padding: 1.25rem 2rem 1.5rem;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          font-size: 1rem;
          background: #fff;
        }
      }

      .CourseBox:hover {
        transform: translate(0, -15px);
      }
    }
  }

  @keyframes LogofadeIn {
    0% {
      opacity: 0;
      transform: translate(0, 10vh);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes infoFadeIn {
    0% {
      opacity: 0;
      transform: translate(0, 10vh);
    }
    50% {
      opacity: 0;
      transform: translate(0, 10vh);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(0, 10vh);
    }
    33% {
      opacity: 0;
      transform: translate(0, 10vh);
    }
    66% {
      opacity: 0;
      transform: translate(0, 10vh);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
}

@media screen and (max-height: 700px) {
  .home {
    height: auto;
  }

  .courseBanner {
    margin-bottom: 50px;
  }
}
</style>
