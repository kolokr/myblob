<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading="isLoading">
    <ul
      class="carousel-container"
      :style="{marginTop: marginTop}"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down" v-show="index < data.length - 1" @click="switchTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indercator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: i === index
        }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import getBanner from "@/api/banner";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData";

export default {
  mixins:[fetchData([])],
  data() {
    return {
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器高度
      switching: false, // 是否正在翻页中
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    }
  },
  components: {
    Carouselitem,
    Icon
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleWindowResize)
  },
  destroyed(){
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    // 切换到指定轮播图
    switchTo(index) {
      this.index = index;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      
      if (e.deltaY <= -5 && this.index > 0) {
        this.index--;
        this.switching = true;
      } else if (e.deltaY >= 5 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
      }
    },
    handleTransitionend() {
      this.switching = false;
    },
    handleWindowResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getBanner();
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    transition: 0.3s;
  }
}

.carousel-container {
  height: 100%;
  li {
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(50%);

  &.icon-up {
    top: 25px;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: 25px;
    animation: jump-down 2s infinite;
  }
}
@jump: 5px;
@keyframes jump-up {
  0% {
    transform: translate(50%, @jump);
  }
  50% {
    transform: translate(50%, -@jump);
  }
  100% {
    transform: translate(50%, @jump);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(50%, -@jump);
  }
  50% {
    transform: translate(50%, @jump);
  }
  100% {
    transform: translate(50%, -@jump);
  }
}

.indercator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    &.active {
      background-color: #fff;
      z-index: 2;
    }
  }
}
</style>