<template>
  <img :src="url" :alt="title" />
</template>

<script>
export default {
  name: "ImageResponsive",
  props: {
    url: String,
    title: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>