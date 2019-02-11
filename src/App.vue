<template>
  <div id="app">
    <global-header/>
    <router-view/>
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader";

export default {
  name: "app",
  components: {
    GlobalHeader
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Helvetica Neue", "Microsoft Yahei", Helvetica, Arial, sans-serif,
    "Avenir", \Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
