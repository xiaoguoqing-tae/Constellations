<template>
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item v-for="(item,index) in tabData" :key="index">
            <template #icon="props">
                <tabIcon :iconText = "item.iconText" :path = "item.path" :active="props.active">
                    {{ item.tabText }}
                </tabIcon>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import tabData from '@/datas/tab'
import tabIcon from "./icon.vue"
import { ref } from 'vue';
const active = ref(0);
const onChange = (index) => {

}
</script>

<style scoped lang="less">

</style>
