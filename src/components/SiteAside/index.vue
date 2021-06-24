<template>
  <div class="site-aside-container">
    <Avatar url="https://img2.baidu.com/it/u=3458857562,1269086464&fm=26&fmt=auto&gp=0.jpg" />
    <h1 class="title">垚式探索</h1>
    <Menu />
    <Contact />
    <p class="footer">
      辽ICP备2020013711号-1
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
