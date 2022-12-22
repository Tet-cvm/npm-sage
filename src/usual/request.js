/**
 * 基于axios请求封装
**/
import axios from "axios"
import qs from "qs"
function Request({
  method, url, params, headers, timeout = 0
}) {
  return new Promise((ret, rej) => {
    const instance = axios.create({
      baseURL: process.env.VUE_APP_DOMAIN,
      timeout,
      headers,
    });

    const config = {
      method,
      url,
      data: qs.stringify({
        ...params
      })
    }

    instance.interceptors.request.use(function(config) {
      return config;
    }, function(err) {
      console.log(err)
    })

    instance.request(config)
    .then((res) => {
      if (res.status == 200) {
        ret(res.data);
      } else {
        rej(res);
      }
    })
    .catch((err) => {
      rej(err);
    })
  })
}
export default Request;