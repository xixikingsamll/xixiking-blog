<template>
    <PageTitle title="文章" />
    <div class="homeBody" style="margin-top: 20px;">
        <div class="boxLeft">
            <CategoryView />
        </div>
        <div class="boxRight">
            <CategoryStatistic />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PageTitle from '@/components/PageTitle.vue'
import CategoryStatistic from './components/CategoryStatistic.vue'
import CategoryView from './components/CategoryView.vue';
</script>

<style scoped>
.homeBody {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    overflow: hidden;
    background: rgb(239, 255, 255);
}

.boxLeft {
    display: flex;
    flex-direction: column;
    width: 900px;
    margin-top: 20px;
}

.boxRight {
    width: 25%;
    margin-top: 20px;
}
</style>