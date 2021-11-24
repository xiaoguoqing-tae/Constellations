import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from "./router"
import vant from "./utils/vant"
import store from './store/index'
import MyPlugin from '@/components/common'

const app = createApp(App)
app.use(vant)
app.use(store)
app.use(router)
app.use(MyPlugin)

app.mount('#app')
