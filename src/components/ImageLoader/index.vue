<template>
  <div class="image-loader-container">
    <img
      :src="src"
      @load="handleLoad"
      :style="{
      opacity: originOpacity,
      transition: `${duration}ms`
    }"
    />
    <img
      v-if="!everythingDone"
      :src="placeholder"
      class="img-small"
    />
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  data() {
    return {
      imgLoaded: false,
      everythingDone: false
    };
  },
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      requied: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  computed: {
    originOpacity() {
      return this.imgLoaded ? 1 : 0;
    }
  },
  methods: {
    handleLoad() {
      this.imgLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    .self-fill();
    object-fit: cover;
    &.img-small {
      filter: blur(2vw);
    }
  }
}
</style>