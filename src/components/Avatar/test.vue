<template>
  <div>
      <Avatar :url="url" :size="size"/>
  </div>
</template>

<script>
import Avatar from "./"
export default {
    data(){
        return {
            url: "https://img1.baidu.com/it/u=3691324307,704153598&fm=26&fmt=auto&gp=0.jpg",
            size: 200
        }
    },
    components: {
        Avatar
    }
}
</script>

<style>

</style>