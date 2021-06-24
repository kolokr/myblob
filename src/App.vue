<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="site-aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
  import Layout from "@/components/Layout";
  import SiteAside from "@/components/SiteAside";
  import showMessage from "@/utils/showMessage";

  
  export default {
    components: {
      Layout,SiteAside
    },
  }
  
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.app-container {
  .self-fill();
}
.site-aside {
  width: 250px;
  height: 100%;
}
</style>