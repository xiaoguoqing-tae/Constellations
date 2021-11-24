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