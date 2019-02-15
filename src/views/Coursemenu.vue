<template>
  <div class="coursemenu">
    <div class="couseChoseMenu">
      <div class="menuHead">
        <img class="coursesImg" src="@/assets/courses.svg" alt="courses">
        <h2 class="title">所有课程</h2>
        <div class="inputBox">
          <el-input v-model="searchInput" placeholder="搜索感兴趣的课程">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="menuBody">
        <div class="coursesType clear-float">
          <span class="typeTitle">分类：</span>
          <div class="typeButtonBox">
            <ul>
              <li class="typeButton menuActive">全部</li>
              <li class="typeButton">图像处理</li>
              <li class="typeButton">音频处理</li>
            </ul>
          </div>
        </div>
        <div class="coursesType border-none clear-float">
          <span class="typeTitle">难度：</span>
          <div class="typeButtonBox">
            <ul>
              <li class="typeButton menuActive">全部</li>
              <li class="typeButton">入门</li>
              <li class="typeButton">初级</li>
              <li class="typeButton">中级</li>
              <li class="typeButton">高级</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coursemenu",
  components: {},
  data() {
    return {
      searchInput: ""
    };
  }
};
</script>

<style lang="less" scoped>
.coursemenu {
  margin-top: 50px;
  background: #f3f5f7;
  min-height: calc(88.7vh - 50px);

  .couseChoseMenu {
    width: 100%;
    padding-bottom: 12px;
    box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.1);
    background: #fff;

    .menuHead {
      max-width: 1386px;
      min-width: 1200px;
      border-bottom: 1px solid rgba(28, 31, 33, 0.2);
      padding-bottom: 20px;
      margin: 0 auto;
      background-color: #fff;

      .coursesImg {
        display: inline-block;
        height: 40px;
        margin-right: 10px;
      }
      .title {
        display: inline-block;
        font-weight: 300;
        vertical-align: top;
      }
      .inputBox {
        float: right;
        width: 30%;
      }
    }

    .menuBody {
      max-width: 1386px;
      min-width: 1200px;
      margin: 0 auto;

      .coursesType {
        position: relative;
        padding: 16px 0 5px;
        border-bottom: 1px solid #edf1f2;

        .typeTitle {
          float: left;
          width: 52px;
          line-height: 30px;
          font-weight: 700;
          font-size: 14px;
          color: #07111b;
          text-align: left;
        }

        .typeButtonBox {
          margin-left: 50px;
          width: 100%;

          .typeButton {
            display: inline-block;
            margin: 0 4px;
            font: 14px/1.5 "PingFang SC", "微软雅黑", "Microsoft YaHei",
              Helvetica, "Helvetica Neue", Tahoma, Arial, sans-serif;
            line-height: 14px;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 14px;
            color: #1c1f21;
            cursor: pointer;
          }
          .typeButton:hover {
            color: #358cf8;
          }

          .menuActive {
            background: rgba(98, 142, 235, 0.3);
            border-radius: 6px;
            font-weight: 700;
            color: #358cf8;
          }
        }
      }
    }
  }
}
</style>
