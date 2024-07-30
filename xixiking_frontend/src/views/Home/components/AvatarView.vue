<template>
  <a-card hoverable style="max-width: 350px; min-width: 340px;">
    <div style="width: 100%;display: flex; justify-content: center; margin-top: 20px; margin-bottom: 20px;">
      <a-avatar :size="112" style="color: #f56a00; background-color: #fde3cf;">xixiking</a-avatar>
    </div>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />  
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Xixiking" description="Introduction yourself">
    </a-card-meta>
  </a-card>
</template>
<script lang="ts" setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
</script>

