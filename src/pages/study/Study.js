import React, { Component } from 'react';
import './Study.css';
import pic from '../../common/image/banner1.jpg';
import { Pagination } from 'antd';
class Study extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            activeIndex: 0,
            order: 0
        }
        this.changeNav = this.changeNav.bind(this)
        this.changeOrder = this.changeOrder.bind(this)
    }
    changeNav (index) {
        this.setState({
            activeIndex: index
        })
    }
    changeOrder (index) {
        this.setState({
            order: index
        })
    }
    render () {
        const navArr = ['html', 'css', 'javascript', 'jquery', 'angular', 'vue', 'react', 'node', '其他'];
        const navElem = navArr.map((item, index) => {
            return <li className={this.state.activeIndex===index?'active':''} onClick={() => this.changeNav(index)} key={index}>{item}</li>
        })
        return (
            <div className="clearfix study-wrapper">
                <div className="fl">
                    <ul className="nav-wrapper">{navElem}</ul>
                </div>
                <div className="nav-content">
                    <div className="order">
                        <span className={`newest ${this.state.order ===0?'orderActive': ''}`} onClick={() => this.changeOrder(0)}>最新</span>
                        <span className={`hotest ${this.state.order ===1?'orderActive': ''}`} onClick={() => this.changeOrder(1)}>最热</span>
                    </div>
                    <ul className="list">
                        <li>
                            <div className="cont-less clearfix">
                                <div className="pic fl">
                                    <img src={pic} alt=""/>
                                </div>
                                <div className="cont-text">
                                    <div className="cont-text-h">
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                    </div>
                                    <div className="operate">
                                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                        <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                        <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                        <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cont-less clearfix">
                                <div className="pic fl">
                                    <img src={pic} alt=""/>
                                </div>
                                <div className="cont-text">
                                    <div className="cont-text-h">
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                    </div>
                                    <div className="operate">
                                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                        <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                        <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                        <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cont-less clearfix">
                                <div className="pic fl">
                                    <img src={pic} alt=""/>
                                </div>
                                <div className="cont-text">
                                    <div className="cont-text-h">
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                    </div>
                                    <div className="operate">
                                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                        <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                        <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                        <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cont-less clearfix">
                                <div className="pic fl">
                                    <img src={pic} alt=""/>
                                </div>
                                <div className="cont-text">
                                    <div className="cont-text-h">
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                    </div>
                                    <div className="operate">
                                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                        <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                        <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                        <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cont-less clearfix">
                                <div className="pic fl">
                                    <img src={pic} alt=""/>
                                </div>
                                <div className="cont-text">
                                    <div className="cont-text-h">
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                        这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容这是react相关内容
                                    </div>
                                    <div className="operate">
                                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                        <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                        <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                        <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="page-wrapper">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Study;