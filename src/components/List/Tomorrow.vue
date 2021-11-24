<template>
  <div class="list">
    <ConsItem 
      title="明日日期"
      :content="data.datetime"
    />
     <ConsItem 
      title="配对星座"
      :content="data.QFriend"
    />
     <ConsItem 
      title="幸运颜色"
      :content="data.color"
    />
     <ConsItem 
      title="幸运数字"
      :content="data.number"
    />
    <Summary 
      filed="明日"
      :contnet="data.summary"
    />
  </div>
</template>

<script>
export default {
  name: 'TomorrowList',
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
