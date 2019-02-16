<template>
  <div class="ChapterBox">
    <div class="chapterTitleBox">
      <h6 class="chapterNumber">第1章</h6>
      <h2 class="chapterTitle">课程简介</h2>
    </div>
    <div class="chapterContentBox">
      <ul>
        <li>
          <img class="playIcon" src="@/assets/play.svg" alt="播放">
          <span>1-1</span>
          课程简介
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterBox",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.ChapterBox {
  border-radius: 6px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  transition: 0.3s;
  overflow: hidden;

  .chapterTitleBox {
    position: relative;
    padding: 36px 36px 24px 36px;

    .chapterNumber {
      margin-bottom: 12px;
      line-height: 24px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #7d97ad;
    }
    .chapterNumber::before {
      content: "";
      position: absolute;
      top: 30px;
      left: -2px;
      width: 3px;
      height: 36px;
      background: #02b3e4;
    }

    .chapterTitle {
      line-height: 36px;
      font-size: 24px;
      font-weight: 400;
      color: #2e3d49;
    }
  }

  .chapterContentBox {
    padding: 24px 36px;
    line-height: 24px;
    font-size: 15px;
    background: #fafbfc;
    color: #525c65;

    li {
      display: flex;
      align-items: center;

      .playIcon {
        height: 24px;
        margin-right: 10px;
      }
    }
  }
}
</style>
