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

    