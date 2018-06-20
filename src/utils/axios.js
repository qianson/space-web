import Axios from 'axios'
const axios = Axios.create({
    timeout: 6000
})
axios.interceptors.request.use(config => {
        console.log(config)
        let userInfo = JSON.parse(sessionStorage.getItem('webUserInfo'))
        if (userInfo) {
            config.headers['Authorization'] = userInfo.Authorization
        }
        console.log(config) // 配置config
        return config
    }, err => {
        return Promise.reject(err)
    }
)
axios.interceptors.response.use(response => {
    console.log(response)
    if (response.data.code === '1001') {
        window.location.href = '/login'
    }
    return response
}, err => {
    return Promise.reject(err)
})
export default axios
