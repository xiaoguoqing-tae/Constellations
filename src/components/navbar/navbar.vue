<template>
    <van-tabs class="navbar" v-model:active="active" title-active-color="#DB7093" line-width="0" line-height="0" @change="change">
        <van-tab v-for="(item,index) in navData" :title="item" :key="index"></van-tab>
    </van-tabs>
</template>
  
<script setup> 
import {ref , reactive} from 'vue'
import {useStore} from 'vuex'
import navData from '@/datas/nav'
import getdata from '../../apis/index'
const store = useStore()
const active = ref(0)
const state = reactive(navData)
const change = (e) => {
    const consName = state[e]
    store.commit('setConsName', consName)
    getdata(store)
}
</script> 

<style scoped lang="less">
.navbar{
    border-bottom: 1px solid #dddddd;
}
</style>
 