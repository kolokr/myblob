<template>
  <div class="container">
      <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "./";
export default {
    data(){
        return {
            text: "无内容"
        }
    },
    components: {
        Empty
    }
}
</script>

<style>
    .container{
        position: relative;
        width: 600px;
        height: 400px;
        border: 1px solid;
    }
</style>