import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

import router from '@/router'
import { getToken,setToken,removeToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data

      console.log('res')
      console.log(response)
      console.log('res')
      return res
      console.log(res.status)
    // if the custom code is not 20000, it is judged as an error.
    // return res;
    if (res.status != '0') {
      console.log(1)
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      console.log(2)
      return res
    }
  },
  error => {
    var that = this
    console.log(error)
      console.log(3)
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
// 删除token
removeToken('')
console.log('getToken()')
console.log(getToken())
// 刷新当前页面
router.go(0)
// setTimeout(function(){
//   console.log('user')
//     store.dispatch('user/login',{username: 'user',password: 'pass'})
//   console.log('user')
// },3000)
             // that.$router.push({
             //    path: '/login',
             // })
    // store.dispatch('user/logout').then(() => {
    //     // location.reload()
    //   })
    // next(`/login?redirect=${to.path}`)
    return Promise.reject(error)
  }
)

export default service
