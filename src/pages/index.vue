<template>
    <div class="index">
        <van-button class="btn" @click="toPage" type="default" size="normal">进入星座物语</van-button>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
const router = useRouter()
const store = useStore()
const toPage = () => {
    store.commit('login')
    router.push('/page')
}
</script>

<style scoped lang="less">
.index{
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/index.jpeg");
    background-size:100% 100%;
    position: relative;
    .btn{
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
