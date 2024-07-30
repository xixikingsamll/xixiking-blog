<template>
    <div>
        <TitleView />
        <div class="homeBody" style="margin-top: 20px;">
            <div class="boxLeft">
                <CarouselView />
            </div>
            <div class="boxRight">
                <AvatarView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TitleView from '@/views/Home/components/TitleView.vue'
import CarouselView from '@/views/Home/components/CarouselView.vue'
import AvatarView from './components/AvatarView.vue';
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
    width: 900px;
    margin-top: 20px;
}

.boxRight {
    width: 25%;
    margin-top: 20px;
}
</style>