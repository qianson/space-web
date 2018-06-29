import React, { Component } from 'react';
import './Detail.css';
import banner2 from '../../common/image/banner2.jpg';
import banner3 from '../../common/image/banner3.jpg';
import {articleDetail,isLike,isCollect} from '../../apis/api';
import {dateFormat} from "../../utils/utils";
import {Icon,message} from 'antd';
class Detail extends Component {
    constructor () {
        super(...arguments)
        console.log(this.props)
        this.state={
            articleId: this.props.location.state.id,
            detailData: {}
        }
    }
    componentWillMount () {
        this.getDetail()
    }
    getDetail = () => {
        let userId = JSON.parse(sessionStorage.getItem('webUserInfo')).userId;
        articleDetail({id:this.state.articleId,userId:userId}).then(res => {
            this.setState({
                detailData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    artLike = (like) => {
        console.log(like)
        if (like === 1){
            message.warning('您已点赞过!')
        } else {
            let userId = JSON.parse(sessionStorage.getItem('webUserInfo')).userId;
            let articleId = this.state.articleId;
            let isLiked = 1;
            let param = {
                userId: userId,
                articleId: articleId,
                isLiked: isLiked
            }
            isLike(param).then(res => {
                this.getDetail()
            }).catch(err => {
                console.log(err)
            })
        }
    }
    artCollect = (collect) => {
        if (collect === 1) {
            message.warning('您已收藏!')
        } else {
            let userId = JSON.parse(sessionStorage.getItem('webUserInfo')).userId;
            let articleId = this.state.articleId;
            let isCollected = 1;
            let param = {
                userId: userId,
                articleId: articleId,
                isCollected: isCollected
            }
            isCollect(param).then(res => {
                this.getDetail()
            }).catch(err => {
                console.log(err)
            })
        }
    }
    render () {
        const {detailData} = this.state;
        return (
            <div className="detail">
                <h3>{detailData.title}</h3>
                <p className="author-info">
                    <span className="author">作者：{detailData.creater}</span>
                    <span>{dateFormat(Number(detailData.pubTime))}</span>
                </p>
                <div className="content" dangerouslySetInnerHTML={{__html: detailData.content}}>

                </div>
                <div className="operate">
                    <div className="like o-item" onClick={() => {this.artLike(detailData.isLiked)}}>
                        <Icon type="like-o" title="喜欢" className={`isLiked ${detailData.isLiked ===1?'likeActive': ''}`}/>
                        <span className="diss-num">{detailData.isLikedNum}</span>
                    </div>
                    <div className="collect o-item" onClick={() => {this.artCollect(detailData.isCollected)}}>
                        <Icon type="heart-o" title="收藏" className={`isCollected ${detailData.isCollected ===1?'collectActive': ''}`}/>
                        <span className="diss-num">{detailData.isCollectedNum}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;