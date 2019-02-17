<template>
  <div class="user">
    <div class="userInfoBox">
      <div class="BgImg">
        <img
          src="https://smx-1253369066.cos.ap-chengdu.myqcloud.com/userBG.jpg?q-sign-algorithm=sha1&q-ak=AKIDrNJRU2h9C468fEK2WhHpwPQoVFrhtU4i&q-sign-time=1550390886;1550392686&q-key-time=1550390886;1550392686&q-header-list=&q-url-param-list=&q-signature=368b2d1f75938edc7d83045223844b966b64d9aa&x-cos-security-token=247de2a053700f6811fab2204ad7b8d77c66ac6510001"
          alt
        >
      </div>
      <div class="userInfo">
        <div class="userName">夜鸦同学</div>
      </div>
    </div>
    <div class="userLearnBox">
      <learn-box/>
    </div>
  </div>
</template>

<script>
import LearnBox from "./components/LearnBox";

export default {
  name: "user",
  components: {
    LearnBox
  }
};
</script>

<style lang="less" scoped>
.user {
  .userInfoBox {
    position: relative;
    width: 100%;
    height: 150px;

    .BgImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;

      img {
        width: 100vmax;
      }
    }

    .userInfo {
      margin-left: 13vw;

      .userName {
        padding-top: 48px;
        line-height: 30px;
        font-size: 24px;
        font-weight: 300;
      }
    }
  }

  .userLearnBox {
    position: relative;
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
