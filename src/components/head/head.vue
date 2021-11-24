<template>
    <van-nav-bar class="head" :title="title" :left-text="leftText" :left-arrow="leftArrow">
        <template #right v-if="right">
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
</template>

<script setup>
    const props = defineProps({
        title:{
            type:String,
            default:"标题"
        },
        leftText:{
            type:String,
            default:""
        },
        leftArrow:{
            type:Boolean,
            default:false
        },
        right:{
            type:Boolean,
            default:false
        }
    })
</script>

<style scoped lang="less">
.head{
    background: #DB7093;
}
/deep/.van-nav-bar__title{
    color: #fff;
}
</style>
