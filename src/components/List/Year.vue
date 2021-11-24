<template>
  <div class="list">
    <ConsItem 
      title="所在年份"
      :content="data.year"
    />
    <ConsItem 
      title="幸运石头"
      :content="data.luckeyStone"
    />
    <Summary 
      filed="健康"
      :contnet="data.health && data.health[0]"
    />
    <Summary 
      filed="事业"
      :contnet="data.career && data.career[0]"
    />
    <Summary 
      filed="爱情"
      :contnet="data.love && data.love[0]"
    />
    <Summary 
      filed="财运"
      :contnet="data.finance && data.finance[0]"
    />
    <Summary 
      filed="本年"
      :contnet="data.mima && `${data.mima.info}。${data.mima.text[0]}`"
    />
  </div>
</template>

<script>
export default {
  name: 'MonthList',
  props: {
    data: Object
  }
}
</script>

<style lang='less'>
.list {
  padding: 15px 10px;
  box-sizing: borer-box;
}
</style>
