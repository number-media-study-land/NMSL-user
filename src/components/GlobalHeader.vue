<template>
  <div class="GlobalHeader" :class="{blackTheme}">
    <div class="globalHeaderWrapper">
      <router-link :to="{ path: '/' }">
        <img class="logoImg" src="@/assets/logo.svg" alt="logo">
        <span class="logFont">树莓学</span>
      </router-link>
      <div class="headerInfo">
        <div class="infoItem">
          <router-link :to="{ path: 'coursemenu' }">所有课程</router-link>
        </div>
        <div class="headerLine"></div>
        <div class="userPoint">
          <router-link :to="{ path: 'user' }">个人中心</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  components: {},
  data() {
    return {
      blackTheme: false
    };
  },
  mounted() {
    if (this.$route.path.indexOf("/learn") !== -1) {
      this.blackTheme = true;
    } else {
      this.blackTheme = false;
    }
  },
  watch: {
    $route: "getPath"
  },
  methods: {
    getPath() {
      if (this.$route.path.indexOf("/learn") !== -1) {
        this.blackTheme = true;
      } else {
        this.blackTheme = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.GlobalHeader {
  width: 100%;
  height: 11.3vh;
  min-height: 64px;
  transition: all 0.3s ease;
}

.globalHeaderWrapper {
  position: absolute;
  top: 0;
  width: 74vw;
  height: 9.5vh;
  min-height: 54px;
  padding: 0 1.4vw;
  margin-top: 1.8vh;
  margin-left: 13vw;
  font-size: 15px;
  z-index: 10;

  .logoImg {
    height: 2.5rem;
    margin-top: 1vh;
  }
  .logFont {
    display: inline-block;
    vertical-align: top;
    line-height: 4.5rem;
    font-size: 22px;
    font-weight: 500;
    color: #444444;
    letter-spacing: 3px;
    user-select: none;
    transition: all 0.3s ease;
  }

  .headerInfo {
    display: flex;
    align-items: center;
    float: right;
    height: 100%;

    div {
      display: inline-block;
    }

    .infoItem a {
      color: #33313b;
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }

    .headerLine {
      width: 2px;
      height: 1.8rem;
      margin: 0 2.5rem;
      background: #5d5d5a;
    }

    .userPoint {
      width: 7rem;
      height: 2rem;
      line-height: 2rem;
      box-shadow: 8px 10px 20px 0px rgba(46, 61, 73, 0.15);
      border-radius: 0.25rem;
      color: #f5f5f5;
      background-color: #608cee;
      letter-spacing: 1px;
      user-select: none;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      a {
        color: #f5f5f5;
      }
    }
    .userPoint:hover {
      background-color: #2f89fc;
      box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
    }
  }
}

.blackTheme {
  background: #26323c;

  .logFont {
    color: #f5f5f5;
  }
  .headerInfo .infoItem a {
    color: #f5f5f5;
  }
  .headerInfo .userPoint {
    box-shadow: 8px 10px 20px 0px rgba(159, 168, 175, 0.15);
  }
  .headerInfo .userPoint:hover {
    background-color: #2f89fc;
    box-shadow: 2px 4px 8px 0px rgba(209, 223, 235, 0.15);
  }
}
</style>
