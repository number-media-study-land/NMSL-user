<template>
  <div class="register">
    <gradation-bg/>
    <div class="registerWrapper">
      <h1>账号注册</h1>
      <div class="formBox">
        <el-form :model="register" status-icon :rules="rules" ref="register">
          <el-form-item prop="email">
            <el-input placeholder="邮箱" v-model="register.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              placeholder="请输入验证码"
              v-model="register.code"
              autocomplete="off"
              :disabled="isEmailReady"
            >
              <el-button
                slot="append"
                @click.prevent="getCode()"
                :disabled="isEmailReady || isSendEmail"
              >{{btnWord}}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              type="password"
              v-model="register.password"
              autocomplete="off"
              :disabled="isEmailReady"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPassword">
            <el-input
              placeholder="确认密码"
              type="password"
              v-model="register.checkPassword"
              autocomplete="off"
              :disabled="isEmailReady"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              placeholder="昵称 (不可修改)"
              v-model="register.name"
              autocomplete="off"
              :disabled="isEmailReady"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :disabled="isEmailReady"
              type="primary"
              class="registerBtn"
              @click="submitForm('register')"
            >注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "md5";
import GradationBg from "../../components/GradationBg";
import axios from "@/utils/axios";
import { users } from "@/utils/api";
import $salt from "@/utils/salt";

export default {
  name: "register",
  components: {
    GradationBg
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.register.checkPassword !== "") {
          this.$refs.register.validateField("checkPassword");
        }
        callback();
      }
    };
    const validateCheckPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.register.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      register: {
        email: "",
        code: null,
        password: "",
        checkPassword: "",
        name: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        code: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPassword: [{ validator: validateCheckPassword, trigger: "blur" }],
        name: [{ required: true, message: "昵称不能为空", trigger: "blur" }]
      },
      isSendEmail: false,
      btnWord: "获取验证码"
    };
  },
  computed: {
    isEmailReady() {
      let result = true;
      if (this.register.email !== "") {
        this.$refs.register.validateField("email", message => {
          result = message === "" ? false : true;
        });
      }
      return result;
    }
  },
  methods: {
    async getCode() {
      this.isSendEmail = true;
      this.btnWord = 60;
      let timeLoop = setInterval(() => {
        this.btnWord -= 1;
        if (this.btnWord === 0) {
          clearInterval(timeLoop);
          this.isSendEmail = false;
          this.btnWord = "获取验证码";
        }
      }, 1000);
      let data = await axios.post(users.verify, {
        email: this.register.email
      });
      data = data.data;
      if (data.code === 0) {
        this.$message.success(data.msg);
      } else {
        this.$message.error(`错误：${data.msg}`);
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let params = JSON.parse(JSON.stringify(this.register));
          delete params.checkPassword;
          params.password = md5(params.password + $salt);
          let data = await axios.post(users.register, params);
          data = data.data;
          if (data.code === 0) {
            this.$message.success({
              message: data.msg,
              duration: 3000
            });
            this.$router.push("/login");
          } else {
            this.$message.error(`错误：${data.msg}`);
          }
        } else {
          this.$message.error("错误：请确认每一项都填写正确");
          return false;
        }
      });
    }
  }
};
</script>x

<style lang="less" scoped>
.register {
  display: flex;
  width: 100%;
  height: 88vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .registerWrapper {
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

      .registerBtn {
        margin-top: 20px;
        width: 100%;
        font-size: 20px;
      }
      .el-form-item {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
