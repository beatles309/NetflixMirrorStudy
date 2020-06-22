import axios from 'axios'

const HTTP_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put'
}

const axiosInstance = axios.create({
    baseUrl: '',
    timeout: 4000
})

const call = (axiosInstance, methodType) => (url, ...params) => {
    const config = params.pop()
    return axiosInstance[methodType](url, params, config)   
}

const partGet = call(axiosInstance, HTTP_METHODS.GET)
const partPost = call(axiosInstance, HTTP_METHODS.POST)
const partPut = call(axiosInstance, HTTP_METHODS.PUT)

export const get = (url, config) => partGet(url, config)
export const post = (url, payload, config) => partGet(url, payload, config)
export const put = (url, payload, config) => partGet(url, payload, config)