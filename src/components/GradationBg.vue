<template>
  <div class="GradationBg"></div>
</template>

<script>
export default {
  name: "GradationBg",
  components: {}
};
</script>

<style lang="less" scoped>
.GradationBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(150deg, #fdfbfb 0%, #cbebfc 100%);
  transform-origin: left bottom;
  transform: skew(0deg, -10deg);
  z-index: -1;
}
</style>
