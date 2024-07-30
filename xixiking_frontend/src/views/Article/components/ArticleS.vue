<template>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { getArticle } from '@/apis/article';

const props = defineProps({
    category_id: {
        type: String,
        default: '0'
    }
});
onMounted(async () => {
    const res = await getArticle(props.category_id)
    console.log(res);
});
</script>