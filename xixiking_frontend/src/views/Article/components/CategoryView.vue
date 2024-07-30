<template>
    <div style="display: flex; margin-bottom: 20px;" class="box">
        <div><a-button type="dashed" @click="() => {getCategoryID(0), selectButton(0)}" class="categoryButton color">全部</a-button></div>
        <div v-for="item in category" :key="item.id"><a-button type="dashed" @click="() => {getCategoryID(item.id), selectButton(item.id)}" class="categoryButton">{{ item.name }}</a-button></div>
    </div>
    <ArticleList :value="article" style="margin-bottom: 15px;"/>
</template>
<script lang="ts" setup>
import { getCategory, getArticle } from '@/apis/article';
import ArticleList from './ArticleList.vue';
import { ref, onMounted } from 'vue';

// 获取所有分类
const category:any = ref([])
onMounted(async () => {
    const data:any = await getCategory()
    category.value = data.data.data 

    // 刚进入页面时获取全部文章获取全部文章
    const data2:any = await getArticle(0)
    article.value = data2.data.data 
})

// 根据分类获取文章
const article:any = ref([])
const getCategoryID = async (id:number) => {
    const data:any = await getArticle(id)
    article.value = data.data.data 
}

// 按钮的点击样式
const selectButton = function(index:number) {
    const buttons = document.querySelectorAll('.categoryButton');
    buttons.forEach(btn => btn.classList.remove('color'));

    // Add the 'selected' class to the clicked button
    buttons[index].classList.add('color');
}
</script>

<style scoped>
.box div {
    margin-right: 10px;
}
.color {
    color: #df5ce1;
    border-color: #df5ce1;
}
</style>