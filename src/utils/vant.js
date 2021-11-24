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