<template>
    <div class="titleBox">
        <p>{{ title }}</p>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style scoped>
.titleBox{
    width: 100%;
    height: 50vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    color: #000;
    padding-top: 64px;
}
</style>