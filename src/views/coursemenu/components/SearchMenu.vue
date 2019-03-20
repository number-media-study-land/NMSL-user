<template>
  <div class="SearchMenu">
    <div class="menuHead">
      <img class="coursesImg" src="@/assets/courses.svg" alt="courses">
      <h2 class="title">所有课程</h2>
      <div class="inputBox">
        <el-input v-model="searchInput" placeholder="搜索感兴趣的课程">
          <el-button slot="append" icon="el-icon-search" @click="inputSearch"></el-button>
        </el-input>
      </div>
    </div>
    <div class="menuBody">
      <div class="coursesType clear-float">
        <span class="typeTitle">分类：</span>
        <div class="typeButtonBox">
          <ul @click="typeSearch($event)">
            <li class="typeButton" :class="typeSelect==='全部' && 'menuActive'">全部</li>
            <li class="typeButton" :class="typeSelect==='图像处理' && 'menuActive'">图像处理</li>
            <li class="typeButton" :class="typeSelect==='音频处理' && 'menuActive'">音频处理</li>
          </ul>
        </div>
      </div>
      <div class="coursesType border-none clear-float">
        <span class="typeTitle">难度：</span>
        <div class="typeButtonBox">
          <ul @click="levelSearch($event)">
            <li class="typeButton" :class="levelSelect==='全部' && 'menuActive'">全部</li>
            <li class="typeButton" :class="levelSelect==='入门' && 'menuActive'">入门</li>
            <li class="typeButton" :class="levelSelect==='初级' && 'menuActive'">初级</li>
            <li class="typeButton" :class="levelSelect==='中级' && 'menuActive'">中级</li>
            <li class="typeButton" :class="levelSelect==='高级' && 'menuActive'">高级</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMenu",
  components: {},
  data() {
    return {
      typeSelect: "全部",
      levelSelect: "全部",
      searchInput: ""
    };
  },
  methods: {
    async typeSearch(event) {
      if (event.target.nodeName === "LI") {
        let typeValue = event.target.innerText;
        if (typeValue !== this.typeSelect) {
          this.typeSelect = typeValue;
          let params = {};
          if (typeValue !== "全部") {
            params.type = typeValue;
          }
          if (this.levelSelect !== "全部") {
            params.level = this.levelSelect;
          }
          this.searchInput = "";
          this.$emit("btnSearch", params);
        }
      }
    },
    async levelSearch(event) {
      if (event.target.nodeName === "LI") {
        let levelSelect = event.target.innerText;
        if (levelSelect !== this.levelSelect) {
          this.levelSelect = levelSelect;
          let params = {};
          if (this.typeSelect !== "全部") {
            params.type = this.typeSelect;
          }
          if (levelSelect !== "全部") {
            params.level = levelSelect;
          }
          this.searchInput = "";
          this.$emit("btnSearch", params);
        }
      }
    },
    async inputSearch() {
      if (this.searchInput !== "") {
        let params = {};
        params.name = this.searchInput;
        this.typeSelect = "全部";
        this.levelSelect = "全部";
        this.$emit("inpurSearch", params);
      } else {
        this.$message.error({
          message: "搜索内容不能为空",
          duration: 3000
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.menuHead {
  max-width: 1386px;
  // min-width: 1200px;
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
  // min-width: 1200px;
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
      width: calc(100%-50px);

      .typeButton {
        display: inline-block;
        margin: 0 4px;
        font: 14px/1.5 "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
          "Helvetica Neue", Tahoma, Arial, sans-serif;
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
</style>
