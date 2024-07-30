<template>
  <a-carousel :dot-position="dotPosition">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { CarouselProps } from 'ant-design-vue';
const dotPosition = ref<CarouselProps['dotPosition']>('right');
</script>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 270px;
  line-height: 270px;
  background: #e1d7d7;
  overflow: hidden;
  border-radius: 8px;
}

:deep(.slick-slide h3) {
  color: #ffffff;
}
</style>
