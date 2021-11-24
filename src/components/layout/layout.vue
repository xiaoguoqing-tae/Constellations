<template>
    <div class="layout">
        <headbar title="星座物语"></headbar>
        <navbar></navbar>
        <ErrorTip />
        <div class="content-box">
            <router-view v-slot="{ Component }" v-if="!errorCode">
                <keep-alive>
                    <component :is='Component'></component>
                </keep-alive>
            </router-view>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script setup>
    import {computed , watch} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import headbar from "../head/head.vue"
    import tabbar from "../tabbar/tabbar.vue"
    import navbar from "../navbar/navbar.vue"
    import ErrorTip from '@/components/ErrorTip'

    const router = useRouter()
    const store = useStore()
    const state = store.state
    store.commit('setFiled', 'today')

    router.push('/Today')
    watch(() => router.currentRoute.value.name,(value)=>{
        store.commit('setFiled', value)
    })
    const errorCode = computed(() => store.state.errorCode)
    console.log(errorCode)

</script>

<style scoped lang="less">
.layout{
    display: flex;
    flex-direction: column;
    .content-box{
        flex: 1;
        padding-bottom: 50px;
    }
}
</style>
