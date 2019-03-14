const axios = require('axios');
export default {
  httpMethod(method,url,data){
    return new Promise((resolve,reject)=>{
      axios({
        method: method,
        url: 'http://192.168.0.203:8080/'+url,
        data: data,
        timeout: 3000
      }).then(response=>{
        console.log(response);
        // 请求结束后成功执行resolve
        resolve(response)
      }).catch(err=>{
        console.log(err)
        // 请求结束后失败执行reject
        reject(err)
      });
    })
    
  }
}