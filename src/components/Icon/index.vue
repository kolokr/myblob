<template>
  <i class="iconfont icon-container" :class="iconType"></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-tips",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-wo",
  weixin: "icon-weixin",
  mail: "icon-email",
  github: "icon-github",
  qq: "icon-qq",
  arrowUp: "icon-arrowup",
  arrowDown: "icon-arrowdown",
  empty: "icon-empty",
  chat: "icon-liuyan",
};
export { classMap };

export default {
    props: ["type"],
    computed: {
        iconType(){
            return classMap[this.type];
        }
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2454360_i7osc97zakf.css";
.iconfont{
  color: inherit;
  font-size: inherit;
}
</style>