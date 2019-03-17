<template>
  <div class="forget">
    <gradation-bg/>
    <div class="forgetWrapper">
      <h1>找回密码</h1>
      <div class="formBox">
        <el-form :model="forget" status-icon :rules="rules" ref="forget">
          <el-form-item prop="email">
            <el-input placeholder="邮箱" v-model="forget.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              placeholder="请输入验证码"
              v-model="forget.code"
              autocomplete="off"
              :disabled="isEmailReady"
            >
              <el-button slot="append" @click.prevent="getCode()" :disabled="isEmailReady">获取验证码</el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
              placeholder="新密码"
              type="password"
              v-model="forget.pass"
              autocomplete="off"
              :disabled="isEmailReady"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              placeholder="确认新密码"
              type="password"
              v-model="forget.checkPass"
              autocomplete="off"
              :disabled="isEmailReady"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :disabled="isEmailReady"
              type="primary"
              class="forgetBtn"
              @click="register('forget')"
            >注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import GradationBg from "../../components/GradationBg";
import axios from "@/utils/axios";
import { users } from "@/utils/api";

export default {
  name: "forget",
  components: {
    GradationBg
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.forget.checkPass !== "") {
          this.$refs.forget.validateField("checkPass");
        }
        callback();
      }
    };
    const validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.forget.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      forget: {
        email: "",
        code: null,
        pass: "",
        checkPass: ""
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
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }]
      }
    };
  },
  computed: {
    isEmailReady() {
      let result = true;
      if (this.forget.email !== "") {
        this.$refs.forget.validateField("email", message => {
          result = message === "" ? false : true;
        });
      }
      return result;
    }
  },
  methods: {
    getCode() {
      // alert("code:1234");
    },
    register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.forget {
  display: flex;
  width: 100%;
  height: 88vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .forgetWrapper {
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

      .forgetBtn {
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
