<template>
  <div class="courseCard">
    <router-link :to="{ path: `/courseDetail/${courseIntro._id}` }">
      <div class="cardImg">
        <img :src="courseIntro.cover" alt>
        <span class="courseTig">{{courseIntro.type}}</span>
      </div>
      <div class="cardInfo">
        <h3 class="cardTitle">{{courseIntro.name}}</h3>
        <span class="cardLevel">{{courseIntro.level}}</span>
        <p class="cardDesc">{{courseIntro.intro}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "courseCard",
  props: ["courseIntro"]
};
</script>

<style lang="less" scoped>
.courseCard {
  float: left;
  height: 270px;
  width: 216px;
  margin: 0 0 18px 18px;
  background: #f8f8f8;
  transition: 0.3s all linear;
  cursor: pointer;

  .cardImg {
    position: relative;
    width: 100%;

    img {
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      vertical-align: top;
    }

    .courseTig {
      position: absolute;
      bottom: 6px;
      left: 8px;
      font-size: 12px;
      color: #fff;
      line-height: 16px;
      background: rgba(7, 17, 27, 0.4);
      border-radius: 12px;
      padding: 4px 8px;
    }
  }

  .cardInfo {
    padding: 12px 8px;

    .cardTitle {
      font-size: 16px;
      font-weight: 400;
      color: #07111b;
      line-height: 24px;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 46px;
      transition: all 0.3s;
    }

    .cardLevel {
      display: inline-block;
      margin-top: 2px;
      margin-right: 12px;
      line-height: 24px;
      font-size: 12px;
      font-weight: 500;
      color: #93999f;
    }

    .cardDesc {
      height: 44px;
      margin-top: 10px;
      line-height: 22px;
      font-size: 12px;
      font-weight: 400;
      color: #93999f;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

.courseCard:hover {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.1);
  transform: translate(0, -10px);

  .cardTitle {
    color: #358cf8;
  }
}
</style>
