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
// 个人推荐
export const recommand = (params) => {
    return axios.get('http://127.0.0.1:9999/web/recommand',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 最新文章
export const newestArticles = (params) => {
    return axios.get('http://127.0.0.1:9999/web/newestArticles',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 文章详情
export const articleDetail = (params) => {
    return axios.get('http://127.0.0.1:9999/web/articleDetail',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 喜欢
export const isLike = (params) => {
    return axios.get('http://127.0.0.1:9999/web/articleLike',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 收藏
export const isCollect = (params) => {
    return axios.get('http://127.0.0.1:9999/web/articleCollect',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}



