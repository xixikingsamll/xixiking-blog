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
            <a :href="item.href">{{ item.title }}</a>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { getArticle } from '@/apis/article';
import { watch, ref, onMounted } from 'vue';
import dayjs from 'dayjs'
const listData = ref<Record<string, string>[]>([]);

const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: 3,
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
    for (let i = 0; i < newValue.length; i++) {
        listData.value.push({
            href: 'https://www.antdv.com/',
            title: `${newValue[i].title}`,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description: `作者：${newValue[i].author} 创建时间：${dayjs(newValue[i].create_time).format('YYYY-MM-DD')} 修改时间：${dayjs(newValue[i].update_time).format('YYYY-MM-DD')} 点赞：${newValue[i].likes}`,
            content: `${newValue[i].content}`,
            likes: `${newValue[i].likes}`
        });
    }
});

onMounted(async () => {
    // 刚进入页面时获取全部文章获取全部文章
    const data2:any = await getArticle(0)
    for (let i = 0; i < data2.length; i++) {
        listData.value.push({
            href: 'https://www.antdv.com/',
            title: `${data2[i].title}`,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description: `${data2[i].author} 创建时间：${dayjs(data2[i].create_time).format('YYYY-MM-DD')} 修改时间：${dayjs(data2[i].update_time).format('YYYY-MM-DD')}`,
            content: `${data2[i].content}`,
        });
    }
})
</script>

