<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="Number(pageData.all)"
      />
      <ConsList 
        :data="pageData"
      />
  </div>
</template>

<script setup>

import { onMounted,onActivated } from 'vue'

import ConsList from '@/components/List/Month'

import useInitPage from '../hooks/useInitPage'
const {pageData , getData , onActivatedFunc} = useInitPage('month')

    onMounted (() => {
        getData()
    })

    onActivated(()=>{
      onActivatedFunc()
    })
</script>

<style lang="scss">
  
</style>
