import React, { Component } from 'react';
import './Home.css';
import CommonRight from '../../components/CommonRight'
import banner1 from '../../common/image/banner1.jpg';
import banner2 from '../../common/image/banner2.jpg';
import banner3 from '../../common/image/banner3.jpg';
import thumbnail from '../../common/image/thumbnail.jpg';
import thumbnail2 from '../../common/image/thumbnail2.jpg';
import {recommand, getArticles, isCollect} from "../../apis/api";
import { Carousel } from 'antd';
import {dateFormat} from "../../utils/utils";
import {Icon} from 'antd';
import { HashRouter, withRouter } from 'react-router-dom';
class Home extends Component {
    constructor (props,context) {
        console.log(props)
        console.log(context)
        super(props,context)
        this.state={
            recommandList: [],
            newestList: []
        }
        this.goRead = this.goRead.bind(this)
    }
    // public contextTypes = {
    //     router: React.PropTypes.object
    // }
    componentWillMount = () => {
        this.getRecommand()
        this.getNewest()
    };
    getRecommand = () => {
        recommand({}).then(res => {
            this.setState({
                recommandList: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    };
    getNewest = () => {
        getArticles({typeCode:1}).then(res => { // code 1 最新
            this.setState({
                newestList: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    };
    goRead (id) {
        console.log(this.props)
        // console.log(this.props)
        // this.props.history.push({
        //     pathname:'/detail',
        //     query: {
        //         name: 'xiaohe'
        //     }
        // })
        this.props.history.push({
            pathname: 'detail',
            query: {
                id: id
            }
        })
        // this.context.router.push('detail')
    };
    render () {
        const {recommandList,newestList} = this.state
        const numbers = [banner1,banner2,banner3]
        const listItems = numbers.map((pic) =>
            <div key={pic.toString()}>
                <img src={pic} alt=""/>
            </div>
        );
        const recommandElem = recommandList.map((item) => {
           return <li onClick={() => this.goRead(item.id)} key={item.id}>
                <div className="avatar"><img src={thumbnail} alt=""/></div>
                <h5>{item.title}</h5>
                <p className="intro">{item.summary}</p>
            </li>
        })
        const newestElem = newestList.map((item) => {
            return  <li key={item.id}>
                <h5>{item.title}</h5>
                <div className="cont-wrapper clearfix">
                    <div className="avatar">
                        <img src={thumbnail2} alt=""/>
                    </div>
                    <div className="cont-intro">
                        {item.summary}
                    </div>
                </div>
                <div>
                    <div className="operate">
                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> {dateFormat(Number(item.pubTime))}</span>
                        <span><Icon type="like-o" title="喜欢"/>({item.isLikedNum})</span>
                        <span><Icon type="heart-o" title="收藏"/>({item.isCollectedNum})</span>
                        <span className="go-read" onClick={() => this.goRead(item.id)}>去阅读原文>></span>
                    </div>
                </div>
            </li>
        })
        return (
            <div className="main-home">
                <div className="banner-wrapper">
                    <Carousel autoplay={true}>
                        {listItems}
                    </Carousel>
                </div>
                <div className="content clearfix">
                    <div className="left fl">
                        <div className="reccomend">
                            <h3>个人推荐</h3>
                            <ul className="reccomend-list clearfix">
                                {recommandElem}
                            </ul>
                        </div>
                        <div className="newest">
                            <h3>最新文章</h3>
                            <ul className="newest-list">
                                {newestElem}
                            </ul>
                        </div>
                    </div>
                    <div className="right fr"><CommonRight></CommonRight></div>
                </div>

            </div>
        )
    }
}
export default withRouter(Home);