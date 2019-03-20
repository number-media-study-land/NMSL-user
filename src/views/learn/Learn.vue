<template>
  <div class="learn">
    <div class="layout-two">
      <div class="left">
        <div class="leftBox" :class="{ hideLeft: isHidden }">
          <div class="leftTitle">课程目录</div>
          <el-menu default-active="1-1" class="el-menu-vertical-demo">
            <el-submenu v-for="(item, index) in videoList" :key="item.title" :index="`${index+1}`">
              <template slot="title">
                <span slot="title">第{{index+1}}章 {{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(video, vindex) in item.list"
                  :key="video.title"
                  :index="`${index+1}-${vindex+1}`"
                  @click="choseVideo(video)"
                >{{index+1}}-{{vindex+1}} {{video.title}}</el-menu-item>
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
              <h2 class="videoHeadTitle">{{studyVideo.title || null}}</h2>
            </header>
            <video-box :studyVideo="studyVideo"/>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { course } from "@/utils/api";
import VideoBox from "./components/VideoBox";

export default {
  name: "learn",
  components: {
    VideoBox
  },
  data() {
    return {
      isHidden: false,
      videoList: [],
      studyVideo: {}
    };
  },
  methods: {
    foldMenu() {
      this.isHidden = !this.isHidden;
    },
    choseVideo(videoData) {
      this.studyVideo = videoData;
    },
    async getVideoList(id) {
      let courseList = await axios.get(course.courseVideoList, {
        params: {
          _id: id
        }
      });
      let data = courseList.data;
      if (data.code === 0) {
        this.videoList = data.data.videoList;
        this.studyVideo = data.data.videoList[0].list[0];
      } else {
        this.$message.error({
          message: data.msg,
          duration: 7000
        });
        this.$router.push("/coursemenu");
      }
    }
  },
  mounted() {
    let { courseId } = this.$route.params;
    this.getVideoList(courseId);
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
