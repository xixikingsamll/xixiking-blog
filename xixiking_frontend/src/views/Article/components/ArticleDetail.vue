<template>
  <PageTitle :title="Title">
    <div style="font-size: 16px;">作者：{{ author }}</div>
    <span style="font-size: 16px;">创建：{{ create_time }} | 修改：{{ update_time }}</span>
  </PageTitle>
  <div class="catalogue">
    <h1><PicLeftOutlined /> 目录</h1>
  </div>
  <a-flex gap="large" vertical class="articleBox" >
    <a-flex class="content">
      <div v-html="tocContent" class="contentChild"></div>
    </a-flex>
  </a-flex>
</template>


<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { getArticleById } from '@/apis/article';
import PageTitle from '@/components/PageTitle.vue';
import dayjs from 'dayjs';
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right';
import { PicLeftOutlined } from '@ant-design/icons-vue';
import hljs from 'highlight.js';
import '@/assets/article.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css';

const route = useRoute();
const tocContent = ref('');
const article = ref();
const Title = ref<string>('');
const author = ref<string>('');
const create_time = ref<string>('');
const update_time = ref<string>('');
const md = new MarkdownIt().use(markdownItAnchor).use(markdownItTocDoneRight, { listType: 'ul' });

onMounted(async () => {
  const data: any = await getArticleById(route.params.id);
  article.value = data.data.data[0];
  
  tocContent.value = md.render(`[[toc]]\n${article.value.content}`);
  Title.value = article.value.title;
  author.value = article.value.author;
  create_time.value = dayjs(article.value.create_time).format('YYYY-MM-DD');
  update_time.value = dayjs(article.value.update_time).format('YYYY-MM-DD');

  nextTick(() => {
    applyStyles();
  });
});

const applyStyles = () => {
  const catalogue = document.querySelector('.catalogue') as HTMLElement;
  const content = document.querySelector('.content') as HTMLElement;
  // const contentChild = document.querySelector('.contentChild') as HTMLElement;
  
  if (catalogue && content) {
    catalogue.style.top = `${content.offsetTop}px`;
    let catalogueH = catalogue.offsetTop;
    document.addEventListener('scroll', () => {
      if (window.scrollY >= catalogueH - 64) {
        catalogue.classList.add('fixed');
        catalogue.style.top = '64px';
      } else {
        catalogue.classList.remove('fixed');
        catalogue.style.top = `${catalogueH}px`;
      }
    });
  }

  putCatalogue();
  smooth();
  changeCatalogueStyle();
  hljs.highlightAll();
};

const putCatalogue = () => {
  const catalogue = document.querySelector('.catalogue') as HTMLElement;
  const contentChild = document.querySelector('.contentChild') as HTMLElement;
  if (catalogue && contentChild && contentChild.firstChild) {
    catalogue.appendChild(contentChild.firstChild);
  }
};

const smooth = () => {
  const anchors = document.querySelectorAll('a');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (event: Event) => {
      event.preventDefault();
      const targetId = (anchor.getAttribute('href') || '').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
};

const changeCatalogueStyle = () => {
  const ul:any = document.querySelectorAll('ul');
  const li:any = document.querySelectorAll('.table-of-contents li');
  ul.forEach((ul: HTMLElement) => {
    ul.style.listStyleType = 'none';
  });
  li.forEach((li: HTMLElement) => {
    li.style.padding = '5px';
  });
};
</script>


<style scoped>
.articleBox {
  min-height: 50vh;
  padding: 64px;
  background-color: rgb(239, 255, 255);
  border-radius: 10px;
}

.catalogue {
  position: absolute;
  right: 32px;
  max-height: 200px;
  width: 280px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(196, 188, 188);
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease-in-out;
}

.catalogue:hover {
  box-shadow: rgba(63, 62, 62, 0.2) 0 0 20px 0;
}

.fixed {
  position: fixed;
  top: 64px;
}

.content {
  width: 75%;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.contentChild{
  width: 100%;
}
</style>
