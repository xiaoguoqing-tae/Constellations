<template>
  <div class="num-item" :style="`background-color: ${item.bgColor}`">
    <span>{{ item.title }}</span>
    <p>{{ data[item.filed] || 0 }}</p>
  </div>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
    item:{
      type:Object,
    },
    data:{
      type:Object,
    }
})
const {item , data} = toRefs(props)
</script>

<style lang='less'>
.num-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  color: #666666;

  span {
    font-size: 16px;
  }

  p {
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
  }
}
</style>
