<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', display: 'flex',alignItems: 'center',justifyContent: 'space-between'}">
        <div style="width: 120px;height: 64px;background: rgba(255, 255, 255, 0.2);">
            <span>Xixiking's Blog</span>
        </div>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="light"
            mode="horizontal"
            :style="{ lineHeight: '64px', margin: 'auto' }"
        >
            <a-menu-item key="1"><router-link to="/">主页</router-link></a-menu-item>
            <a-menu-item key="2">文章</a-menu-item>
            <a-menu-item key="3"><router-link to="/friend">友链</router-link></a-menu-item>
            <a-menu-item key="4">个人</a-menu-item>
            <a-menu-item key="5">全站搜索</a-menu-item>
        </a-menu>
        <div style="margin-left:auto;"> <!-- 使用margin-left: auto将头像框推至最右 -->  
             <a-avatar style="color: #f56a00; background-color: #fde3cf">U</a-avatar>
        </div>  
    </a-layout-header>  
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{padding: '24px', minHeight: '450px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Xixiking's Blog ©2024 Created by Xixiking
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
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
