<template>
  <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  :duration="500"
  @load="handleLoad"
/>
</template>

<script>
import ImageLoader from "./";
export default {
    components: {
        ImageLoader
    },
    methods: {
      handleLoad(){
        console.log("全部加载完成");
      }
    }
}
</script>

<style>
    .image-loader-container{
      width: 500px;
      height: 400px;
    }
</style>