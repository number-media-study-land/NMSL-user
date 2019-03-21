<template>
  <div class="courseListBox">
    <h4 class="ListTitle">你将学到什么</h4>
    <section class="chapter" v-if="courseVideoMenu.length !== 0">
      <chapter-box
        v-for="(item, index) in courseVideoMenu"
        :key="item.title"
        :chapterInfo="item"
        :chapterIndex="index"
      />
    </section>
  </div>
</template>

<script>
import ChapterBox from "./ChapterBox";

export default {
  name: "courseListBox",
  props: ["courseVideoMenu"],
  components: {
    ChapterBox
  }
};
</script>

<style lang="less" scoped>
.courseListBox {
  .ListTitle {
    margin-bottom: 24px;
    line-height: 36px;
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    color: #2e3d49;
  }

  .chapter {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
</style>
