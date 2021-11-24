<template>
  <div class="error-tip" v-if="errorCode">
      <img src="../../assets/img/error.png">
      <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>

import errorData from '@/datas/error'

import { useStore } from 'vuex'
import { computed } from 'vue'


export default {
  name: 'ErrorTip',
  setup () {
    const store = useStore()
    return {
      errorCode: computed(() => store.state.errorCode),
      errorData
    }
  }
}
</script>

<style lang='less'>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;

  img {
    width: 100px;
    vertical-align: bottom;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    color: #999999;
  }
}
</style>
