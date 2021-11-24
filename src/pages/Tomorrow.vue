<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="pageData.all"
      />
      <ConsList 
        :data='pageData'
      />
  </div>
</template>

<script setup>

import { onMounted , onActivated } from 'vue'

import ConsList from '@/components/List/Tomorrow'

import useInitPage from '../hooks/useInitPage'
const {pageData , getData , onActivatedFunc} = useInitPage('tomorrow')

    onMounted (() => {
        getData()
    })

    onActivated(()=>{
      onActivatedFunc()
    })
</script>

<style lang="scss">
  
</style>
