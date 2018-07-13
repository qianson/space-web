import axios from '../utils/axios';
import qs from 'qs';
// 注册
export const register = (params) => {
    return axios.post('/web/register', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
 // 登录
export const login = (params) => {
    return axios.post('/admin/login', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 退出
export const loginOut = (params) => {
    return axios.post('/admin/loginOut', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 提交留言
export const leaveMessage = (params) => {
    return axios.post('/web/leaveMessage', params, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 留言列表
export const getLeaveMessageList = (params) => {
    return axios.post('/web/leaveMessageList',params,{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 提交回复
export const submitReplyMessage = (params) => {
    return axios.post('/web/replyMessage',params,{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 查看回复
export const lookReply = (params) => {
    return axios.post('/web/lookReply',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 个人推荐
export const recommand = (params) => {
    return axios.get('/web/recommand',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 最新文章
export const getArticles = (params) => {
    return axios.get('/web/getArticles',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 文章详情
export const articleDetail = (params) => {
    return axios.get('/web/articleDetail',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 喜欢
export const isLike = (params) => {
    return axios.get('/web/articleLike',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 收藏
export const isCollect = (params) => {
    return axios.get('/web/articleCollect',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 基本数据
export const basicData = () => {
    return axios.get('/web/basicData',{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}
// 获取收藏
export const collectList = (params) => {
    return axios.get('/web/collectList',{params:params},{ headers: { 'Content-Type': 'application/json' } }).then(res => {
        return res.data
    })
}



