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
  props: ["studyVideo"],
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        fill: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: ""
          }
        ]
      }
    };
  },
  watch: {
    studyVideo(newVal) {
      this.playerOptions.sources[0].src = newVal.src;
    }
  },
  mounted() {
    this.playerOptions.sources[0].src = this.studyVideo.src;
  }
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
