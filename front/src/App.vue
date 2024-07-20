<script setup lang="ts">
import { RouterView } from 'vue-router'
import theme from '@/styles/Ant Design Vue Theme.json'
import { ref } from 'vue';

const Theme = ref(theme)

</script>

<template>
  <a-config-provider :theme = "Theme">
  <RouterView />
  </a-config-provider>
</template>
