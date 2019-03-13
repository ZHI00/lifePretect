const axios = require('axios');
export default {
  httpMethod(method,data,succeed,fail){
    axios({
      method: method,
      url: '/user/12345',
      data: data,
    }).then(response=>{
      console.log(response);
      succeed && succeed(response);
    }).catch(err=>{
      console.log(err)
      fail && fail(err)
    });
  }
}