<template>
  <div class="user">
    <div class="userInfoBox">
      <div class="BgImg">
        <img
          src="https://smx-1253369066.cos.ap-chengdu.myqcloud.com/userBG.jpg?q-sign-algorithm=sha1&q-ak=AKIDoBy5hyu2GzMu7jvP2GPRiUO0RAmBxqxW&q-sign-time=1552908852;1552910652&q-key-time=1552908852;1552910652&q-header-list=&q-url-param-list=&q-signature=4fc85bde18ce17a4dca074251a20e52100e10122&x-cos-security-token=b825c3aea7ce97671b808757e184ad493c5452ff10001"
          alt
        >
      </div>
      <div class="userInfo">
        <div class="userName">{{Xuser.name || '未登录'}}</div>
        <el-button type="info" plain class="logOutBtn" @click="logOut">退出登录</el-button>
      </div>
    </div>
    <div class="userLearnBox">
      <learn-box/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LearnBox from "./components/LearnBox";
import axios from "@/utils/axios";
import { users } from "@/utils/api";

export default {
  name: "user",
  components: {
    LearnBox
  },
  computed: {
    ...mapState(["Xuser"])
  },
  methods: {
    ...mapActions(["changeXuser"]),
    async logOut() {
      let data = await axios.get(users.exit);
      data = data.data;
      if (data.code === 0) {
        this.$message.success({
          message: data.msg,
          duration: 3000
        });
        this.changeXuser({});
        this.$router.push("/login");
      } else {
        this.$message.error(`错误：${data.msg}`);
      }
    }
  },
  mounted() {
    if (JSON.stringify(this.Xuser) === "{}") {
      this.$router.push("/login");
    }
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
      position: relative;
      margin-left: 13vw;

      .userName {
        padding-top: 48px;
        line-height: 30px;
        font-size: 24px;
        font-weight: 300;
      }
      .logOutBtn {
        position: absolute;
        right: 10vw;
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
