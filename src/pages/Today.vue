<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="pageData.all"
      />
      <NumList 
        :data='pageData'
      />
      <ConsList
        :data='pageData'
      />
  </div>
</template>

<script setup>
import { onMounted , onActivated } from 'vue'
import NumList from '@/components/NumList'
import ConsList from '@/components/List/Today'

import useInitPage from '../hooks/useInitPage'
const {pageData , getData , onActivatedFunc} = useInitPage('today')

    onMounted (() => {
        getData()
    })

    onActivated(()=>{
      onActivatedFunc()
    })
</script>

<style lang="less">
  
</style>
