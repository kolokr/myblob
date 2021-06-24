<template>
  <img
    class="avator-container"
    :src="url"
    :style="{
            width: size + 'px',
            height: size + 'px'
        }"
  />
</template>

<script>
export default {
  // props: ["url", "size"]
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 150
    }
  }
};
</script>

<style>
.avator-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
</style>