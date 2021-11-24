<template>
  <div class="summary-wrapper">
    <div class="inner">
      <header class="header">
        {{ filed }}运势总结
      </header>
      <div class="content">
        {{ contnet }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
    filed:{
      type:String,
      default:"今日"
    },
    contnet:{
      type:String,
      default:"加载中"
    }
})
const {filed , contnet} = toRefs(props)
</script>

<style lang='less'>
.summary-wrapper {
  margin-bottom: 4vw;
  box-sizing: border-box;

  .inner {
    border-radius: 5px;
    border: 1px solid #dddddd;

    .header {
      height: 35px;
      background-color: #C71585;
      color: #ffffff;
      font-size: 16px;
      text-align: center;
      line-height: 35px;
    }

    .content{
      background-color: #ffffff;
      font-size: 14px;
      padding: 10px;
      text-indent: 2em;
      line-height: 20px;
    }
  }
}
</style>
