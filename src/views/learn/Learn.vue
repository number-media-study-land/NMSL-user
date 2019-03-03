<template>
  <div class="learn">
    <div class="layout-two">
      <div class="left">
        <div class="leftBox" :class="{ hideLeft: isHidden }">
          <div class="leftTitle">课程目录</div>
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <span slot="title">第一章 课程简介</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">1-1 课程简介</el-menu-item>
                <el-menu-item index="1-2">1-2 课程导学</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span slot="title">第二章 课程简介</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">2-1 课程简介</el-menu-item>
                <el-menu-item index="2-2">2-2 课程导学</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span slot="title">第二章 课程简介</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">2-1 课程简介</el-menu-item>
                <el-menu-item index="2-2">2-2 课程导学</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span slot="title">第二章 课程简介</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">2-1 课程简介</el-menu-item>
                <el-menu-item index="2-2">2-2 课程导学</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span slot="title">第二章 课程简介</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">2-1 课程简介</el-menu-item>
                <el-menu-item index="2-2">2-2 课程导学</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span slot="title">第二章 课程简介</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">2-1 课程简介</el-menu-item>
                <el-menu-item index="2-2">2-2 课程导学</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <div class="right">
        <main class="mainBox">
          <section class="videoWrapper">
            <header class="videoHead">
              <i class="el-icon-menu" @click="foldMenu"></i>
              <h2 class="videoHeadTitle">课程简介</h2>
            </header>
            <video-box/>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import VideoBox from "./components/VideoBox";

export default {
  name: "learn",
  components: {
    VideoBox
  },
  data() {
    return {
      isHidden: false
    };
  },
  methods: {
    foldMenu() {
      this.isHidden = !this.isHidden;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 320px;
  min-height: 400px;
  background-color: #2e3d47;
}

.learn {
  .leftBox {
    width: 320px;
    height: 88.7vh;
    background-color: #2e3d47;
    overflow: auto;
    transition: all 0.3s ease-in-out;

    .leftTitle {
      height: 42px;
      padding: 14px;
      color: #fff;
      font-size: 18px;
      line-height: 42px;
    }

    ul,
    li {
      border: 0;
    }
  }
  .hideLeft {
    width: 0;
  }

  .mainBox {
    width: 100%;
    height: 88.7vh;
    overflow: auto;

    .videoWrapper {
      background: #1c262e;

      .videoHead {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 60px;
        padding: 0 15px;
        line-height: 60px;
        text-align: center;
        box-sizing: border-box;

        i {
          position: absolute;
          top: 50%;
          left: 15px;
          margin-top: -16px;
          font-size: 32px;
          color: #628eeb;
          transition: all 0.3s;
          cursor: pointer;
        }
        i:hover {
          color: #358cf8;
        }

        .videoHeadTitle {
          display: inline-block;
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
