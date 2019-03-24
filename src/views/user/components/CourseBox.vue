<template>
  <div class="courseBox">
    <div class="courseContent">
      <img :src="courseInfo.cover" alt>
      <div class="learnInfo">
        <h3>{{courseInfo.name}}</h3>
        <p>学习至{{courseInfo.progress[0]}}-{{courseInfo.progress[1]}} {{courseInfo.progressName}}</p>
        <router-link
          :to="{ name: 'learn', params: {courseId: courseInfo.courseId}}"
        >
          <div class="studyBtn">继续学习</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseBox",
  props: ["courseInfo"],
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
