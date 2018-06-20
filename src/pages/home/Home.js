import React, { Component } from 'react';
import './Home.css';
import CommonRight from '../../components/CommonRight'
import banner1 from '../../common/image/banner1.jpg';
import banner2 from '../../common/image/banner2.jpg';
import banner3 from '../../common/image/banner3.jpg';
import { Carousel } from 'antd';
class Home extends Component {
    constructor (props,context) {
        console.log(props)
        console.log(context)
        super(props,context)
        this.goRead = this.goRead.bind(this)
    }
    // public contextTypes = {
    //     router: React.PropTypes.object
    // }
    goRead () {
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
            state: {
                name: 'xiaohe'
            }
        })
        // this.context.router.push('detail')
    };
    render () {
        const numbers = [banner1,banner2,banner3]
        const listItems = numbers.map((pic) =>
            <div key={pic.toString()}>
                <img src={pic} alt=""/>
            </div>
        );
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
                                <li>
                                    <div className="avatar"><img src={banner2} alt=""/></div>
                                    <h5>田园风光</h5>
                                    <p className="intro">风景很美好很美好很美风风景很美好很美好很美风景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好</p>
                                </li>
                                <li>
                                    <div className="avatar"><img src={banner2} alt=""/></div>
                                    <h5>田园风光</h5>
                                    <p className="intro">风景很美好很美好很美风风景很美好很美好很美风景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好</p>
                                </li>
                                <li>
                                    <div className="avatar"><img src={banner2} alt=""/></div>
                                    <h5>田园风光</h5>
                                    <p className="intro">风景很美好很美好很美风风景很美好很美好很美风景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好</p>
                                </li>
                                <li>
                                    <div className="avatar"><img src={banner2} alt=""/></div>
                                    <h5>田园风光</h5>
                                    <p className="intro">风景很美好很美好很美风风景很美好很美好很美风景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好</p>
                                </li>
                                <li>
                                    <div className="avatar"><img src={banner2} alt=""/></div>
                                    <h5>田园风光</h5>
                                    <p className="intro">风景很美好很美好很美风风景很美好很美好很美风景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好</p>
                                </li>
                                <li>
                                    <div className="avatar"><img src={banner2} alt=""/></div>
                                    <h5>田园风光</h5>
                                    <p className="intro">风景很美好很美好很美风风景很美好很美好很美风景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好景很美好很美好很美好很美好风景很美好很美好很美好很美好好很美好</p>
                                </li>
                            </ul>
                        </div>
                        <div className="newest">
                            <h3>最新文章</h3>
                            <ul className="newest-list">
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                    <div className="operate">
                                        <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                        <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                        <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                        <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                        <span className="go-read" onClick={this.goRead}>去阅读原文>></span>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                        <div className="operate">
                                            <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                            <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                            <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                            <span><i className="icon iconfont icon-shoucang" title="收藏"></i>(0)</span>
                                            <span className="go-read" onClick={this.goRead}>去阅读原文>></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                        <div className="operate">
                                            <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                            <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                            <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                            <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                            <span className="go-read">去阅读原文>></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                        <div className="operate">
                                            <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                            <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                            <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                            <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                            <span className="go-read">去阅读原文>></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                        <div className="operate">
                                            <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                            <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                            <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                            <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                            <span className="go-read">去阅读原文>></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                        <div className="operate">
                                            <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                            <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                            <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                            <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                            <span className="go-read">去阅读原文>></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h5>关于react-router的一些心得</h5>
                                    <div className="cont-wrapper clearfix">
                                        <div className="avatar">
                                            <img src={banner3} alt=""/>
                                        </div>
                                        <div className="cont-intro">
                                            这嘎嘎时间格拉斯见过啥这嘎嘎时间格拉斯见过啥价过来佳乐国际垃圾蛋糕拉萨寄过来过来加了个家电连接公司垃圾管理时间啊拉杆价格了就是了几个拉萨的价格拉萨寄过来佳乐国际垃圾蛋糕拉萨寄过来加了个家电连接公司垃圾管理时间啊拉杆夹国家国家
                                        </div>
                                    </div>
                                    <div>
                                        <div className="operate">
                                            <span><i className="icon iconfont icon-techreport-" title="时间"></i> 2018-04-21</span>
                                            <span><i className="icon iconfont icon-pinglun" title="评论"></i>(0)</span>
                                            <span><i className="icon iconfont icon-zan1" title="赞"></i>(0)</span>
                                            <span><i className="icon iconfont icon-shoucang"></i>(0)</span>
                                            <span className="go-read">去阅读原文>></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right fr"><CommonRight></CommonRight></div>
                </div>

            </div>
        )
    }
}
export default Home;