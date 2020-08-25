import axios from 'axios'
import storageService from '../service/storageService'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 1000 * 5,
  headers: {
    Authorization: `Berear ${storageService.get(storageService.USER_TOKEN)}`
  }
})

// Add a request interceptor
request.interceptors.request.use(
  config => {
    // Do something before request is sent
    Object.assign(config.headers, {
      Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`
    })
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default request
