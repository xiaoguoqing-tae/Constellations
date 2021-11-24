<template>
  <div class="cons-item">
    <div class="title">{{ title }}</div>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template >

<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    title:{
      type:String,
      default:"标题"
    },
    content:{
      type:[String , Number],
      default:0
    }
  })
  const {title , content} = toRefs(props)
</script>

<style lang='less'>
.cons-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #888787;
  .title {
    width: 90px;
    height: 44px;
    color: #C71585;
    text-align: center;
    line-height: 44px;
    font-weight: 600;
  }

  .content {
    font-size: 16px;
    color: #666666;
  }
}
</style>
