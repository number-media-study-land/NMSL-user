<template>
  <div class="user">
    <div class="userInfoBox">
      <div class="BgImg">
        <img src="https://smx-1253369066.cos.ap-chengdu.myqcloud.com/userBG.jpg" alt>
      </div>
      <div class="userInfo" v-if="Xuser">
        <div class="userName">{{Xuser.name}}</div>
        <el-button type="info" plain class="logOutBtn" @click="logOut">退出登录</el-button>
      </div>
    </div>
    <div class="userLearnBox">
      <learn-box v-if="Xuser" :userInfo="Xuser"/>
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
        this.changeXuser(null);
        this.$router.push("/login");
      } else {
        this.$message.error(`错误：${data.msg}`);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.Xuser) {
        this.$message.error(`请登录账号`, 3000);
        this.$router.push("/login");
      }
    }, 0);
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
