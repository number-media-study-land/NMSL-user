<template>
  <div class="login">
    <gradation-bg/>
    <div class="loginWrapper">
      <h1>账号登录</h1>
      <div class="formBox">
        <el-input v-model="email" placeholder="邮箱" class="inputBox"></el-input>
        <el-input type="password" v-model="password" placeholder="密码"></el-input>
        <el-button :disabled="!isCanEnter" type="primary" class="loginBtn">登录</el-button>
        <p class="forget">
          <router-link :to="{ path: '/forget' }">忘记密码?</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GradationBg from "../../components/GradationBg";

export default {
  name: "login",
  components: {
    GradationBg
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isCanEnter() {
      if (this.isMailbox() && this.password !== "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    isMailbox() {
      const reg = /\S+@\S+(\.\S)+/;
      return this.email.match(reg);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  width: 100%;
  height: 88vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .loginWrapper {
    margin-bottom: 30px;

    h1 {
      margin-bottom: 15px;
      color: #666;
      font-size: 24px;
      font-weight: 300;
      text-align: center;
    }

    .formBox {
      width: 432px;
      max-width: 100%;
      border: 1px solid #e3e7f1;
      padding: 30px 40px;
      background-color: #fff;
      border-radius: 2px;
      box-sizing: border-box;

      .inputBox {
        margin-bottom: 20px;
      }
      .loginBtn {
        margin-top: 20px;
        width: 100%;
        font-size: 20px;
      }
      .forget {
        text-align: right;

        a {
          color: #999;
          transition: color 0.2s;
        }
        a:hover {
          color: #747272;
        }
      }
    }
  }
}
</style>
