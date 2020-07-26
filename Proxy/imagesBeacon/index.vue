<template>
    <div>
        <!-- 页面行为埋点（track-view为v-track全局注册的组件） -->
        <track-view v-track:18015></track-view>
        <track-view v-track:18015.watch="{ rest }"></track-view>
        <track-view v-track:18015.watch.delay="{ rest }"></track-view>
        <track-view v-if="rest" v-track:18015></track-view>
        
        <!-- 事件行为埋点（DOM） -->
        <div v-track:18015.click="handleClick"></div>
        <div v-track:18015.click="{ handleClick, item, index }"></div>
        <div v-track:18015.click.async="{ handleSearch, rest }"></div>
        <div v-track:18015.click.delay="handleClick"></div>
        
        <!-- 事件行为埋点（组件） -->
        <cmp v-track:18015.click="handleClick"></cmp>
        <cmp v-track:18015.[自定义事件名]="handleSearch"></cmp>
        <cmp v-track:18015.[自定义事件名].delay="handleSearch"></cmp>
        <cmp v-track:18015.[自定义事件名].async="{ handleSearch, rest }"></cmp>
        
        <!-- 区域展现埋点（block 可以是 DOM 或者组件） -->
        <block v-track:18015.show></block>
        <block v-track:18015.show.once></block>
        <block v-track:18015.show.custom="{ ref: 'scroll' }"></block>
        <block v-track:18015.show.custom.once="{ ref: 'scroll' }"></block>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>