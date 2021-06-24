<template>
  <div class="pages-container">
    <span :class="{disabled: current <= 1}" @click="changePage(1)">|&lt;&lt;</span>
    <span :class="{disabled: current <= 1}" @click="changePage(current - 1)">|&lt;</span>
    <span v-for="(item, i) in pageList" :key="i" :class="{current: item === current}"
        @click="changePage(item)"
    >{{item}}</span>
    <span :class="{disabled: current >= maxNum}" @click="changePage(current + 1)">&gt;|</span>
    <span :class="{disabled: current >= maxNum}" @click="changePage(lastNum)">&gt;&gt;|</span>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNum: {
      type: Number,
      default: 6
    }
  },
  computed: {
    lastNum() {
      return Math.ceil(this.total / this.limit);
    },
    minNum() {
      let min = this.current - Math.floor(this.visibleNum / 2);
      if (this.lastNum - min < this.visibleNum) {
        return this.lastNum - this.visibleNum;
      }
      return min <= 0 ? 1 : min;
    },
    maxNum() {
      let max = this.minNum + this.visibleNum;
      return max >= this.lastNum ? this.lastNum : max;
    },
    pageList() {
      let list = [];
      for (let i = this.minNum; i <= this.maxNum; i++) {
        list.push(i);
      }
      return list;
    }
  },
  methods: {
    changePage(newPage) {
      this.$emit("handlePage", newPage);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.pages-container {
  margin: 0 auto 15px;
  display: flex;
  justify-content: center;
  span {
    padding: 5px;
    color: @primary;
    cursor: pointer;
  }
  span.current {
    color: @words;
    cursor: initial;
  }
  span.disabled {
    color: @gray;
    cursor: not-allowed;
  }
}
</style>