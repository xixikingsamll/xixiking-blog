<script setup lang="ts">
import LayoutHeader from './views/Layout/components/LayoutHeader.vue';
import LayoutFooter from './views/Layout/components/LayoutFooter.vue';
import { RouterView } from 'vue-router'
import theme from '@/styles/Ant Design Vue Theme.json'
import { ref } from 'vue';

const Theme = ref(theme)
</script>

<template>
  <a-config-provider :theme = "Theme">
    <a-layout class="mainLayout">
      <!-- 顶部菜单栏 -->
      <LayoutHeader v-if="!$route.meta.hideLayout"/>

      <!-- 内容主体 -->
      <a-layout-content :style="{ padding: '0', marginTop: '0px' }">
        <div :style="{minHeight: '100vh' }">
          <RouterView /> 
        </div>
      </a-layout-content>

      <!-- 底部 -->
      <LayoutFooter v-if="!$route.meta.hideLayout"/>
    </a-layout>
  </a-config-provider>
</template>
  
<style scoped>
.mainLayout{
  background-image: url('./static/BlogBackground.png'); /* 替换为你的背景图片路径 */
  background-size: cover; /* 让图片覆盖整个屏幕 */
  background-position: center; /* 图片居中显示 */
  background-attachment: fixed; /* 背景图片固定，不随内容滚动 */
  background-repeat: no-repeat; /* 不重复显示图片 */
  margin: 0; /* 去掉默认的页面边距 */ 
  overflow: auto; /* 确保内容可以滚动 */
}

#components-layout-demo-fixed{
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background{
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

</style>
