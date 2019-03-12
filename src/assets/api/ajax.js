const axios = require('axios');
export default {
  get(url,params,resolve,reject){
    axios.get(url, {
      params: params
    })
    .then(function (response) {
      resolve && resolve(response);
    })
    .catch(function (error) {
      reject && reject(error);
    });
  },
  post(url,params,resolve,reject){
    axios.post(url, params)
    .then(function (response) {
      resolve && resolve(response);
    })
    .catch(function (error) {
      reject && reject(error);
    });
  }
}