# 目录结构
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffb6252e31ce49b296858e25084127f8~tplv-k3u1fbpfcp-watermark.image?)
# 开始
## 安装vant  （---官网有---）
### 配置vant按需加载
- 在babel.config配置如下代码

```js
plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
```
- 在src>utils>vant.js下配置按需加载组件

```js
import { Button , NavBar , Icon , Tabbar, TabbarItem , Tab , Tabs} from 'vant';

const vant = {
    install:function(Vue){
        Vue.use(Button)
        Vue.use(NavBar)
        Vue.use(Icon)
        Vue.use(Tabbar)
        Vue.use(TabbarItem)
        Vue.use(Tab)
        Vue.use(Tabs)
    }
}
export default vant
```
- 在main.js中引入并use()
## 配置rem适配 按照官网
- 下载安装

```js
npm install lib-flexible -S 
npm install postcss-pxtorem -D
```
- main.js引入

```js
import 'lib-flexible/flexible'
```
- 在postcssrc中配置适配

```js
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
```
## 关闭一些语法检查

```js
.eslintrc.js
module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module',
      parser: "babel-eslint"
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars':'off',//意思就是不让eslint校验我定义有没有用了。
      'vue/no-v-model-argument':'off'
    },
    extends: [      
      "plugin:vue/essential",
    ],
  }
```
## 下载配置vueRouter4.x
- router>index.js

```js
import {createRouter , createWebHashHistory} from 'vue-router'
import TodayPage from '../pages/Today'

const routes = [
  {
    path: '/',
    name: 'today',
    component: TodayPage
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import('../pages/Tomorrow')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import('../pages/Week')
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../pages/Month')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import('../pages/Year')
  }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
```
- 在main.js中挂载。
## 下载配置vuex4.x
- store>index.js

```js
import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})
```
- main.js中挂载
## 封装axios
`看项目需要封装  utils>request.js`

```js
import axios from 'axios'
import qs from "qs"
import { JUHE_APPKEY } from '../configs/keys'
const request = axios.create({
    timeout:20000
})

request.interceptors.request.use(
    config=>{
        if(config.method == 'get'){
            config.params = {
                ...config.params,
                key:JUHE_APPKEY //把key进行一次性加入
            }
        }else{ //此项目没有用的post
            config.data = qs.stringify({
                ...config.data,
                key:JUHE_APPKEY
            })
        }
        return config
    }, 
    error=>{
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    res=>{
        console.log(res)
        return res.data
    },
    error=>{
        return Promise.reject(error)
    }
)

export default request
```
## 封装api
- 使用axios获取数据

```js
api.js
import request from "../utils/request";

export const getdata = (consName , type) => {
    return request({
        url:`/api/constellation/getAll`,
        method:'get',
        params:{
            consName:consName,
            type:type
        }
    })
}
```
- 封装该项目获取数据后的后续操作

```js
index.js
import { getdata } from './apis'

export default async (store) => {
  const consName = store.state.consName,
        filed = store.state.filed,
        data = await getdata(consName, filed)
  if (data.error_code) {
    store.commit('setErrorCode', data.error_code)
    return
  }
  store.commit('setdata', data)
}
```
## components存放封装组件
- 例：tabbar的

```js
<template>
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item v-for="(item,index) in tabData" :key="index">
            <template #icon="props">
                <tabIcon :iconText = "item.iconText" :path = "item.path" :active="props.active">
                    {{ item.tabText }}
                </tabIcon>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import tabData from '@/datas/tab'
import tabIcon from "./icon.vue"
import { ref } from 'vue';
const active = ref(0);
</script>

<style scoped lang="less">

</style>

```
## pages存放页面
- 例：today页面

```js
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
```
## 将页面重复使用的方法数据封装成hooks使用

```js
import { computed, ref} from 'vue'
import { useStore } from 'vuex'
import getdata from '../apis/index'

const useInitPage = function(type){
    const store = useStore(),
          state = store.state,
          status = ref(''),
          pageData = computed(() => state[type])

    const getData = () => {
        getdata(store)
    }

    const onActivatedFunc = () => {
        if (status.value !== state.consName) {
            getdata(store)
            status.value = state.consName
        }
    } 
    return {
        pageData,
        getData,
        onActivatedFunc
    }
}
export default useInitPage
```
# 学习视频
[Vue 3.0 实战星座物语 H5 项目](https://www.bilibili.com/video/BV1Q64y1F7mm?from=search&seid=15048255084253288459)
# 实现效果

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f336db58952748d9a2a662dbf6ee55eb~tplv-k3u1fbpfcp-watermark.image?)
# 总结
vue3练手小项目

