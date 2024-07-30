<template>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff   ', display: 'flex',alignItems: 'center',justifyContent: 'space-between'}">
        <div style="width: 120px;height: 64px;background: rgba(255, 255, 255, 0.2);">
            <span style="font-size: 20px;">Xixiking</span>
        </div>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="light"
            mode="horizontal"   
            :style="{ lineHeight: '64px', margin: 'auto', width: '1000px'}"
        >
            <a-menu-item key="1"><router-link to="/"><HomeOutlined /> 主页</router-link></a-menu-item>
            <a-menu-item key="2"><router-link to="/article"><ReadOutlined /> 文章</router-link></a-menu-item>
            <a-menu-item key="3"><router-link to="/friend"><LinkOutlined /> 友链</router-link></a-menu-item>
            <a-menu-item key="4"><UserOutlined /> 个人</a-menu-item>    
            <a-menu-item key="5"><SearchOutlined /> 全站搜索</a-menu-item>
            <a-menu-item key="6"><StarOutlined /> 站长精选</a-menu-item>
            <a-menu-item key="7"><router-link to="/AdminLogin"><VerifiedOutlined /> 站长登录</router-link></a-menu-item>
            <a-menu-item key="8"><LineChartOutlined /> 网站数据</a-menu-item>
            <a-menu-item key="9"><SettingOutlined /> 设置</a-menu-item>
        </a-menu>
        <div style="margin-left:auto;"> <!-- 使用margin-left: auto将头像框推至最右 -->  
             <a-avatar style="color: #f56a00; background-color: #fde3cf">U</a-avatar>
        </div>  
    </a-layout-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { HomeOutlined, ReadOutlined, LinkOutlined, UserOutlined, SearchOutlined, StarOutlined, VerifiedOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['1']);
</script>