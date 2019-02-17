<template>
  <div class="courseBox">
    <div class="courseContent">
      <img src="https://img.mukewang.com/5c60f2e80984689c05400300-240-135.jpg" alt>
      <div class="learnInfo">
        <h3>学习灰度化处理</h3>
        <p>学习至1-1 课程简介</p>
        <div class="studyBtn">继续学习</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseBox",
  components: {}
};
</script>

<style lang="less" scoped>
.courseBox {
  position: relative;
  padding-left: 37px;

  .courseContent {
    padding: 30px 0;
    position: relative;
    border-bottom: 1px solid #eff1f0;
    overflow: hidden;

    img {
      float: left;
      width: 200px;
      height: 113px;
    }

    .learnInfo {
      padding-left: 230px;

      h3 {
        font-size: 18px;
        color: #12171b;
        height: 29px;
        line-height: 29px;
      }

      p {
        font-size: 14px;
        color: #787d82;
      }

      .studyBtn {
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 30px;
        font-size: 14px;
        border: 1px solid #2f89fc;
        color: #2f89fc;
        width: 90px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        background-color: #fff;
        transition: all 0.3s;
        cursor: pointer;
      }
      .studyBtn:hover {
        color: #fff;
        background-color: #2f89fc;
      }
    }
  }
}
</style>
