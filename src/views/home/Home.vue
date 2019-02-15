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
      <newest-courses/>
    </div>
  </div>
</template>

<script>
import GradationBg from "../../components/GradationBg";
import NewestCourses from "./components/NewestCourses";

export default {
  name: "home",
  components: {
    GradationBg,
    NewestCourses
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
