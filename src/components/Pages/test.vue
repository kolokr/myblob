<template>
  <div class="app-container">
    <Pages
      :current="current"
      :total="total"
      :limit="10"
      :visibleNum="10"
      @handlePage="handlePage($event)"
    />
  </div>
</template>

<script>
import Pages from "./";
export default {
  name: "App",
  data() {
    return {
      current: 3,
      total: 204
    };
  },
  components: {
    Pages
  },
  methods: {
    handlePage(newPage) {
      this.current = newPage;
    }
  }
};
</script>

<style>
</style>