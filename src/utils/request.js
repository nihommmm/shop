import { resolve } from "path";


// 封装请求函数
function request(url,method="GET"){
   return new Promise((resolve,reject) =>{
        wx.request({
            url,
            method,
            success: res =>{
                resolve(res)
            }
        })
    })
}

// 导出request
export default request