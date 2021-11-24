<template>
  <div class="num-list">
    <NumItem 
      v-for="(item, index) in numData" :key="index"
      :item='item'
      :data='data'
    />
  </div>
</template>

<script setup>
import numData from '@/datas/num'
import NumItem from './Item'
const props = defineProps({
  data:{
    type:Object
  }
})
</script>

<style lang='less'>
.num-list {
  display: flex;
  flex-flow: row;
  margin: 15px 0;
  padding: 10px;
  box-shadow: 2px 2px 5px #999999;
}
</style>