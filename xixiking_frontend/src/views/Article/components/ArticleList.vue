<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <span v-for="{ icon } in actions" :key="icon">
            <component :is="icon" style="margin-right: 8px" />
            {{ item.likes }}   
          </span>
        </template>
        <!-- <template #extra>
          <img
            width="272"
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </template> -->
        <a-list-item-meta :description="item.description">
          <template #title>
            <RouterLink :to="{ name:'ArticleDetail', params: {id: item.id} }">{{ item.title }}</RouterLink>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        <!-- {{ item.content }} -->
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { getArticle } from '@/apis/article';
import { watch, ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import dayjs from 'dayjs'
const listData = ref<Record<string, string>[]>([]);

const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: 2,
};
const actions = ref<Record<string, any>[]>([]) 
actions.value = [
  { icon: StarOutlined, text: '156' },
  { icon: LikeOutlined, text: '156' },
  { icon: MessageOutlined, text: '2' },
];

const props = defineProps<{ value: any }>();
// 使用 watch 监听 props 的变化
watch(() => props.value, (newValue) => { 
    listData.value.length = 0; // 清空数组
    // 遍历 props.value 并将数据添加到 listData 中
    for (const item of newValue) {
      listData.value.push({
        id: `${item.id}`,
        title: `${item.title}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description: `作者：${item.author} 
                      创建时间：${dayjs(item.create_time).format('YYYY-MM-DD')} 
                      修改时间：${dayjs(item.update_time).format('YYYY-MM-DD')} 
                      点赞：${item.likes}`,
        // content: `${item.content}`,
        likes: `${item.likes}`
      });
    }
});

onMounted(async () => {
    // 刚进入页面时获取全部文章获取全部文章
    const data2:any = await getArticle(0)
      listData.value.push({
        id: `${data2.id}`,
        title: `${data2.title}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description: `作者：${data2.author} 创建时间：${dayjs(data2.create_time).format('YYYY-MM-DD')} 修改时间：${dayjs(data2.update_time).format('YYYY-MM-DD')} 点赞：${data2.likes}`,
        // content: `${data2.content}`,
        likes: `${data2.likes}`
    })
})
</script>

