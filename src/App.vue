<template>
  <div id="app">
    <global-header/>
    <div class="seize-a-seat"></div>
    <router-view/>
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader";

import "./style/globalStyle.less";
import "./style/clear.less";

export default {
  name: "app",
  components: {
    GlobalHeader
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.seize-a-seat {
  height: 11.3vh;
  min-height: 54px;
  /* margin-top: 11.3vh; */
}
</style>
