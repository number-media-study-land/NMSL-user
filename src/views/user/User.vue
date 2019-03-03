<template>
  <div class="user">
    <div class="userInfoBox">
      <div class="BgImg">
        <img
          src="https://smx-1253369066.cos.ap-chengdu.myqcloud.com/userBG.jpg?q-sign-algorithm=sha1&q-ak=AKID2k1BFPRAKYnYrXit25l9drwEnQSEfnzu&q-sign-time=1551355407;1551357207&q-key-time=1551355407;1551357207&q-header-list=&q-url-param-list=&q-signature=e3bd787f41e350ec04ab31f1e1089ec08efb4810&x-cos-security-token=8b71376bedabf2c1bf57bf2edb5aaefe29de1f9f10001"
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
