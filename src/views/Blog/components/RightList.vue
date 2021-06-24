<template>
    <ul class="right-list-container">
      <li v-for="item in list" :key="item.target">
        <span :class="{active: item.isSelect}" @click="handClick(item)">{{item.name}}</span>
        <RightList :list="item.children" @select="handClick" />
      </li>
    </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    handClick(item){
      this.$emit("select", item);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.right-list-container{
  list-style: none;
  padding-left: 10px;
  .right-list-container{
    padding-left: 1em;
  }
  li{
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active{
      color: @warn;
    }
  }
}
</style>