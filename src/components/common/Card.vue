<template>
  <div class="card">
    <div class="wrapper">
      <img 
        :src="require(`../../assets/img/${ name }.jpeg`)"
        :alt="name" 
      />
      <div class="mask">
        <span >{{ name }}</span>
        <p v-if="allIndex">综合指数： {{ allIndex }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
    name:{
      type:String,
      default:"白羊座"
    },
    allIndex:{
      type:[String , Number],
      default:1
    }
})
const {name , allIndex} = toRefs(props)
</script>

<style lang='less'>
.card {
  padding: 10px;
  box-sizing: border-box;

  .wrapper {
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      vertical-align: bottom;
    }

    .mask {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      span {
        color: #FFD7F5;
        font-size: 48px;
        font-weight: none;
        line-height: 2em;
      }

      p {
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
}
</style>
