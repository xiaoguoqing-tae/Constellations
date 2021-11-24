<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="pageData.all"
      />
      <ConsList 
        :data="pageData"
      />
  </div>
</template>

<script setup>

import { onMounted, onActivated } from 'vue'

import ConsList from '@/components/List/Year'

import useInitPage from '../hooks/useInitPage'
const {pageData , getData , onActivatedFunc} = useInitPage('year')

    onMounted (() => {
        getData()
    })

    onActivated(()=>{
      onActivatedFunc()
    })
</script>

<style lang="scss">
  
</style>

