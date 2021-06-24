<template>
  <div class="empty-container">
    <Icon type="empty" />
    <div>{{text}}</div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
@import "~@/style/mixin.less";
@iconSize: 72px;
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
  .icon-container {
    font-size: @iconSize;
  }
}
</style>