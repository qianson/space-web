import React, { Component } from 'react';
import './CommonRight.css'
import {getLeaveMessageList, basicData, getArticles} from "../apis/api";
import { HashRouter, withRouter } from 'react-router-dom';
class CommonRight extends Component {
    constructor (props) {
        super(props)
        this.state = {
            newestEvaList: [],
            basicData: {},
            likestList: []
        }
    }
    componentWillMount () {
        this.getNewestMessage()
        this.getBasicData()
        this.getLikest()
    }
    getNewestMessage = () => {
        getLeaveMessageList({newestCode:1}).then(res => {
            console.log(res.data,'123333333333333')
            this.setState({
                newestEvaList: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    getLikest = () => {
        getArticles({typeCode:2}).then(res => { // code 1 最赞
            this.setState({
                likestList: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    };
    goDetail = (id) => {

        // withRouter(Home)
    };
    getBasicData = () => {
        basicData().then(res => {
            this.setState({
                basicData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render () {
        const {newestEvaList,basicData,likestList} = this.state;
        const evaElem = newestEvaList.map((item) => {
            return <li className="newest-eva" key={item.id}><span>{item.userName}</span>评论说：<span dangerouslySetInnerHTML={{__html: item.leaveMessage}}>

            </span></li>
        });
        const likeElem =likestList.map((item,index) => {
            return <li className="like-item">
                <div onClick={() => {
                    this.goDetail(item.id)
                }}><span className="like-num">{index+1}</span>{item.title}</div>
                <div dangerouslySetInnerHTML={{__html:item.summary}}>

                </div>
            </li>
        });
        return (
            <div className="common-right">
                <div className="part">
                    <h5>数据统计</h5>
                    <ul className="data-list">
                        <li>注册人数：{basicData.userNum}</li>
                        <li>点赞数：{basicData.likeNum}</li>
                        <li>收藏数：{basicData.collectNum}</li>
                        <li>评论数：{basicData.messageNum}</li>
                    </ul>
                </div>
                <div className="part">
                    <h5>点赞排行</h5>
                    <ol className="like-list">
                        {likeElem}
                    </ol>
                </div>
                <div className="part">
                    <h5>最新评论</h5>
                    <ul className="eva-list">
                        {evaElem}
                    </ul>
                </div>
                <div className="part">
                    <h5>友情链接</h5>
                    <ul className="f-links">
                        <li><a href="http://www.yangqq.com">杨青的博客</a></li>
                        <li><a href="http://www.yangqq.com">杨青的博客</a></li>
                        <li><a href="http://www.yangqq.com">杨青的博客</a></li>
                        <li><a href="http://www.yangqq.com">杨青的博客</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default CommonRight;