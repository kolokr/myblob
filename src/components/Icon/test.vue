<template>
  <div class="container">
      <div class="icon-wrap" v-for="(item, i) in classMap" :key="i" >
          <Icon :type="i" />
          <div>{{i}}</div>
      </div>
  </div>
</template>

<script>
import Icon,{classMap} from "./";

export default {
    data(){
        return {
            classMap
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
    .container{
        width: 300px;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .icon-wrap{
            padding: 5px;
            font-size: 18px;
            text-align: center;
            border: 1px solid #abcdef;
        }
    }
</style>