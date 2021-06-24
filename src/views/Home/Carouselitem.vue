<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imagePosition" ref="image">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="this.showWords" />
    </div>
    <div class="title" ref="title">{{carousel.title}}</div>
    <div class="description" ref="description">{{carousel.description}}</div>
  </div>
</template>

<script>
import getBanner from "@/api/banner";
import ImageLoader from "@/components/ImageLoader";

export default {
  props: ["carousel"],
  components: {
    ImageLoader
  },
  data() {
    return {
      titleWid: 0,
      descWid: 0,
      containerSize: null, // 外层尺寸（放大图片尺寸）
      innerSize: null, // 内层尺寸
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0 // 鼠标的纵坐标
    };
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      };
    }
  },
  mounted() {
    this.titleWid = this.$refs.title.offsetWidth;
    this.descWid = this.$refs.description.offsetWidth;

    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed(){
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth; // 强制渲染
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWid + "px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      this.$refs.description.clientWidth; // 强制渲染
      this.$refs.description.style.transition = "2s 1s";
      this.$refs.description.style.width = this.descWid + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      };

      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
@import "~@/style/mixin.less";
.carousel-item-container {
  position: relative;
  height: 100%;
  color: #fff;
  overflow: hidden;
  .carousel-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 110%;
    height: 110%;
    transition: .3s;
  }
  .title,
  .description {
    position: absolute;
    left: 40px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5);
    text-shadow: -1px 0 0 rgba(0, 0, 0, 0.5);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    top: calc(50% - 30px);
    font-size: 2em;
  }
  .description {
    top: calc(50% + 30px);
    font-size: 1.2em;
    color: lighten(@gray, 10%);
  }
}
</style>