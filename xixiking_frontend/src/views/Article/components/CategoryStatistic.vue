<template>
    <div>
        生活<a-progress :stroke-color="{'0%': '#108ee9', '100%': '#87d068',}" :percent="10" />
    </div>
    <div>
        笔记<a-progress :stroke-color="{'0%': 'rgb(144, 243, 243)', '100%': 'rgb(156, 243, 144)',}" :percent="33" />
    </div>
    <div>
        运动<a-progress :stroke-color="{'0%': 'rgb(241, 243, 144)', '100%': 'rgb(240, 158, 98)',}" :percent="50" />
    </div>
    <div>
        美食<a-progress :stroke-color="{'0%': 'rgb(227, 23, 16)', '100%': 'rgb(227, 16, 143)',}" :percent="7" />
    </div>
</template>

<style scoped>
div{
    margin-top: 15px;
}
</style>