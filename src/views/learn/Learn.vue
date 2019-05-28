<template>
  <div class="learn">
    <div class="layout-two" v-if="studyVideo">
      <div class="left">
        <div class="leftBox" :class="{ hideLeft: isHidden }">
          <div class="leftTitle">课程目录</div>
          <el-menu
            :default-active="`${studyProgress[0]}-${studyProgress[1]}`"
            class="el-menu-vertical-demo"
          >
            <el-submenu v-for="(item, index) in videoList" :key="item.title" :index="`${index+1}`">
              <template slot="title">
                <span slot="title">第{{index+1}}章 {{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(video, vindex) in item.list"
                  :key="video.title"
                  :index="`${index+1}-${vindex+1}`"
                  @click="choseVideo(video, [index+1, vindex+1])"
                >
                  <img
                    src="@/assets/ok.svg"
                    alt
                    class="okSVG"
                    v-if="!handleProgress([index+1, vindex+1])"
                  >
                  {{index+1}}-{{vindex+1}} {{video.title}}
                </el-menu-item>
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
            <div class="commentArea">
              <div class="commentWrapper">
                <h3 class="title">问答区</h3>
                <div class="commentQaArea">
                  <div class="qaTitle">本节问题：</div>
                  <div class="qaContent" v-if="studyVideo.qa" v-html="studyVideo.qa"></div>
                  <div class="qaContent" v-else >本节老师没有布置问题</div>
                </div>
                <div>
                  <div class="asTitle">你的回答：</div>
                  <div class="newCommentBox">
                    <div class="inputArea">
                      <el-input type="textarea" :autosize="{ minRows: 3 }" placeholder="写出你的回答" v-model="newComment"></el-input>
                    </div>
                    <div class="subBtnBox">
                      <el-button type="success" plain class="subBtn" @click="pushAn">提交</el-button>
                      <el-button plain @click="newComment=''">清空</el-button>
                    </div>
                  </div>
                </div>
                <div class="commentContentArea">
                  <comment-box v-for="item in commentList" :key="item._id" :item="item"/>
                </div>
                <!-- <div class="responseInputArea">
                  <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="newResponse"></el-input>
                  <el-button size="small" round>取消</el-button>
                  <el-button size="small" type="primary" round>回复</el-button>
                </div> -->
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { mapState } from "vuex";
import { course, userStudy, comment } from "@/utils/api";
import VideoBox from "./components/VideoBox";
import CommentBox from "./components/CommentBox";

export default {
  name: "learn",
  components: {
    VideoBox,
    CommentBox
  },
  computed: {
    ...mapState(["Xuser"])
  },
  data() {
    return {
      isHidden: false,
      videoList: [],
      studyVideo: null,
      studyProgress: null,
      qaContent: "",
      newComment: "",
      commentList: []
      // newResponse: ""
    };
  },
  methods: {
    // 折叠左侧菜单
    foldMenu() {
      this.isHidden = !this.isHidden;
    },
    // 点击左侧菜单
    async choseVideo(videoData, progress) {
      this.studyVideo = videoData;

      if (this.handleProgress(progress)) {
        // 更新学习进度
        await axios.post(userStudy.updateProgress, {
          courseId: this.$route.params.courseId,
          userId: this.Xuser._id,
          progress,
          progressName: videoData.title
        });
      }

      this.getComments(this.studyVideo._id);
    },
    // 判断是否学习到了新的一节
    handleProgress(progress) {
      if (progress[0] > this.studyProgress[0]) {
        return true;
      } else if (
        progress[0] >= this.studyProgress[0] &&
        progress[1] > this.studyProgress[1]
      ) {
        return true;
      } else {
        return false;
      }
    },
    // 获取视频目录
    async getVideoList(id) {
      let courseList = await axios.get(course.courseVideoList, {
        params: {
          _id: id
        }
      });
      let data = courseList.data;
      if (data.code === 0) {
        this.videoList = data.data.videoList;
        this.studyVideo =
          data.data.videoList[this.studyProgress[0] - 1].list[
            this.studyProgress[1] - 1
          ];
        if (this.studyVideo.qa) {
          this.studyVideo.qa = this.studyVideo.qa.replace(/\n/g, "<br/><br/>");
        }

        this.getComments(this.studyVideo._id);
      } else {
        this.$message.error({
          message: `错误：${data.msg}，已返回课程目录`,
          duration: 7000
        });
        setTimeout(() => {
          this.$router.push("/coursemenu");
        }, 1000);
      }
    },
    // 获取评论
    async getComments(videoId) {
      let data = await axios.get(comment.getComment, { params: { videoId } });
      data = data.data;
      if (data.code === 0) {
        this.commentList = data.data.comments;
      } else {
        this.$message.error(data.msg);
      }
    },
    // 判断用户是否学习过，学过则获取进度，没学则添加
    async courseInUser(courseId) {
      let data = await axios.post(userStudy.courseInUser, {
        courseId,
        userId: this.Xuser._id
      });
      data = data.data.data;
      if (data !== null) {
        this.studyProgress = data.studyList[0].progress;
      } else {
        this.studyProgress = [1, 1];
      }
      this.getVideoList(courseId);
    },
    // 提交评论
    async pushAn() {
      let params = {
        progressName: this.studyVideo.title,
        videoId: this.studyVideo._id,
        commentUser: this.Xuser.name,
        commentContent: this.newComment,
        createTime: Math.round(new Date() / 1000)
      };
      let data = await axios.post(comment.addComment, { params });
      data = data.data;
      if (data.code === 0) {
        this.$message.success(data.msg);
        this.newComment = "";
        this.getComments(this.studyVideo._id);
      } else {
        this.$message.error(data.msg);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.Xuser) {
        this.$message.error("请登录账号", 3000);
        this.$router.push("/login");
      } else {
        let { courseId } = this.$route.params;
        this.courseInUser(courseId);
      }
    }, 0);
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

    .okSVG {
      position: absolute;
      top: 15px;
      left: 5px;
      width: 35px;
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
      .commentArea {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        background-color: #fff;

        .commentWrapper {
          position: relative;
          width: 90%;

          .title {
            padding: 10px 0;
            border-bottom: 1px solid #4e4e4e;
            margin: 10px 0;
            font-weight: 400;
            color: #4e4e4e;
          }
          .asTitle {
            margin: 15px 0;
            font-size: 17px;
          }
          .newCommentBox {
            display: flex;

            .inputArea {
              display: inline-block;
              width: 70%;
            }
            .subBtnBox {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 29%;

              button {
                width: 30%;
              }

              .subBtn {
                margin-right: 6%;
              }
            }
          }
          .commentContentArea {
            width: 70%;
            margin-top: 20px;
          }
          .commentQaArea {
            width: 70%;
            margin: 15px 0 20px 0;
            padding-bottom: 10px;
            border-bottom: 1px dashed #454d66;
            box-sizing: border-box;

            .qaTitle {
              font-size: 17px;
              margin-bottom: 10px;
            }
            .qaContent {
              padding-left: 30px;
              margin-bottom: 10px;
            }
          }
          .responseInputArea {
            position: fixed;
            right: 3%;
            bottom: 50px;
            width: 20%;
            height: 130px;
            padding: 10px;
            border: 1px solid #e4e2e2;
            border-radius: 10px;
            background: #f6f5f5;
            box-sizing: border-box;

            button {
              float: right;
              margin-top: 5px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
