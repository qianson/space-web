import axios from '../utils/axios';
import qs from 'qs';
// 注册
export const register = (params) => {
    return axios.post('http://127.0.0.1:9999/web/register', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
 // 登录
export const login = (params) => {
    return axios.post('http://127.0.0.1:9999/admin/login', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 退出
export const loginOut = (params) => {
    return axios.post('http://127.0.0.1:9999/admin/loginOut', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 提交留言
export const leaveMessage = (params) => {
    return axios.post('http://127.0.0.1:9999/web/leaveMessage', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 留言列表
export const getLeaveMessageList = (params) => {
    return axios.post('http://127.0.0.1:9999/web/leaveMessageList',params,{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 提交回复
export const submitReplyMessage = (params) => {
    return axios.post('http://127.0.0.1:9999/web/replyMessage',params,{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 查看回复
export const lookReply = (params) => {
    return axios.post('http://127.0.0.1:9999/web/lookReply',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}