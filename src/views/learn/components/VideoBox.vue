<template>
  <div class="videoBox">
    <div class="videoWrapper">
      <video-player
        class="vjs-custom-skin vjs-autoHeight"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
      ></video-player>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "./video-custom-theme.css";

export default {
  name: "videoBox",
  components: {
    videoPlayer
  },
  data() {
    return {
      // videojs options
      playerOptions: {
        // height: '500vh',
        fill: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "https://s3.cn-north-1.amazonaws.com.cn/u-vid-hd/VmqRfdE3Gv0.mp4"
          }
        ]
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.videoBox {
  width: 100%;
  display: flex;
  justify-content: center;

  .videoWrapper {
    width: 90%;
    padding-bottom: 20px;

    .vjs-autoHeight {
      height: calc(88.7vh - 84px);
    }
  }
}
</style>
