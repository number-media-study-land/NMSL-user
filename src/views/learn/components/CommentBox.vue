<template>
  <div class="commentBox">
    <div class="commentArea clear-float">
      <span class="username">{{item.commentUser}}：</span>
      <p class="content" v-html="item.commentContent"></p>
      <!-- <el-button class="responseBtn" type="text">回复</el-button> -->
    </div>
    <!-- <div class="responseArea">
      <div class="responseBox">
        <span class="username">bbb：</span>
        <p
          class="content"
        >评论内容评论容评论内容评论内论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容内</p>
        <el-button class="responseBtn" type="text">回复</el-button>
      </div>
      <div class="responseBox">
        <span class="username">ccc 回复 bbb：</span>
        <p
          class="content"
        >评论内容评论容评论内容评论内论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容内</p>
        <el-button class="responseBtn" type="text">回复</el-button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "commentBox",
  props: ["item"],
  data() {
    return {
      newComment: ""
    };
  },
  mounted() {
    this.item.commentContent = this.item.commentContent.replace(/\n/g, "<br/>");
  }
};
</script>

<style lang="less" scoped>
.commentBox {
  position: relative;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  background: #f6f5f5;
  box-sizing: border-box;

  .commentArea {
    position: relative;
    padding-bottom: 10px;
  }
  .responseArea {
    margin-top: 5px;
    margin-left: 30px;

    .responseBox {
      position: relative;
      border-left: 1px solid #444;
      padding-left: 5px;
      margin-bottom: 10px;

      span {
        margin-top: 2px;
        margin-right: 5px;
      }
      p {
        margin: 0;
        margin-top: 5px;
      }
    }
  }
  .username {
    margin: 0;
    margin-top: 5px;
  }
  .content {
    padding: 0 20px 0 15px;
    margin: 0;
    margin-top: 5px;
    font-weight: 300;
    word-wrap: break-word;
    box-sizing: border-box;
  }
  .responseBtn {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 5px;
  }
}
</style>
