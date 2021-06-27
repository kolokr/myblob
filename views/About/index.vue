<template>
  <div class="about-container" v-loading="loading">
    <!-- <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe> -->
    <img :src="jianli" alt="个人简历" title="个人简历" class="self-img">
  </div>
</template>

<script>
import { mapState } from "vuex";
import jianli from "@/assets/jianli.png";
export default {
  data() {
    return {
      jianli
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  })
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
.self-img{
  .self-center();
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}
</style>
