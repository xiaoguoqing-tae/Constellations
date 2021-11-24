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
                key:JUHE_APPKEY
            }
        }else{
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