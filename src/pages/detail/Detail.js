import React, { Component } from 'react';
import './Detail.css';
import banner2 from '../../common/image/banner2.jpg';
import banner3 from '../../common/image/banner3.jpg';
class Detail extends Component {
    constructor () {
        super(...arguments)
        console.log(this.props.params)
    }
    render () {
        return (
            <div className="detail">
                <h3>这是测试css的</h3>
                <p className="author-info">
                    <span className="author">作者：何育骞</span>
                    <span>2018年5月4日</span>
                </p>
                <div className="content">
                    csssadgksaglsgjsagj; sagj;sag sgj;gj;sajg;adgj sgjasjgsajgjskjgsajgjsagjsgjjgljhlajh jhajd hdajh lkadjhj djah jda hdjh adjh j j
                    sdgasgjaskgjksjglsajgsljglsdjgklsjgjlsagjsgjskgjksjgsj a奥斯卡大家感受是结果来看撒娇拉杆夹估价师老顾客介绍卡了解过傻了艾灸哥拉斯几个撒就
                    水果沙拉感觉丧假官商勾结啥结果拉萨讲故事进公司国家讲故事啦空间干啥就
                    送给大家关键时刻国家公私兼顾公私兼顾算了经过两三件工商局干撒寄过来撒吉林省爱就敢送几个撒加上就够了啊数据库 a
                    时发生纠纷交手机费搜几个事见过啥感觉萨拉关键是垃圾干撒够了卡萨丁几个撒个娇杀了开工建设了看过十几个时间客观上
                    撒旦法撒个娇雷克萨关键是离开就快睡觉赶紧睡了开关机估价师留个加上
                    阿水哥施工队
                    <img src={banner2} alt=""/>
                    sfsafj slajg这是撒干撒就赶快沮丧就拉萨的价格阿济格拉深加工加上撒个娇死垃圾蛋糕卡手机关机按时国家是爱干净撒个娇时间干啥就十大歌手垃圾啊施工记录
                    闪光点撒垃圾拉萨寄过来沮丧刷卡机公司进口高级杀了驾驶感觉啥结果杀几个了撒个撒个娇是沮丧沮丧进来撒解决升龙国际桑啊十几个
                    撒旦法撒解放路上几个垃圾死了国家科技干啥就过来撒娇刚拉屎公司垃圾干啥类九流三教刚拉屎干啥就噶事
                    士大夫撒拉飞机撒放散阀刘三姐分离设计福利撒酒疯连接撒飞机撒附近杀令肌肤撒酒疯撒浪费就是垃圾费时间分散剂分散剂分散剂是j
                    撒旦法撒结果拉数据过来撒娇观看撒娇过傻了解决撒娇垃圾股啊十几个了就散了赶紧睡了结果拉数据刚拉屎结果拉屎结果拉几个噶江苏省阿几个撒就估价
                    说过来看撒娇过卡死几个傻瓜连接撒了个佳乐国际爱空间索拉卡的感觉刘三姐桂林市科技馆阿山烤鸡过来看撒娇过拉深加工克里斯解决路撒大哥撒
                    沙发司法局萨拉将发生结束啦拉萨加就
                    <img src={banner3} alt=""/>
                    sdflksa jljj sg jsagj agj adjg lajg jagj
                </div>
                <div className="like">
                    <div className="like-left">
                        <span><i className="icon iconfont icon-zan1" title="赞"></i></span>
                        <span>1</span>
                    </div>
                    <div className="like-right">

                    </div>
                </div>
                <div className="collect">
                    <span><i className="icon iconfont icon-shoucang" title="收藏"></i></span>
                    <span>1</span>
                </div>
                <div className="evaluate">
                    <span>评论</span>
                </div>
            </div>
        )
    }
}
export default Detail;