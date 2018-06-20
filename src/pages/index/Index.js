import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { BackTop } from 'antd';
import Router from '../../router/index';
import logo from '../../common/image/logo.png';
import './index.css';

class Index extends Component {
    render () {
        let activeStyle = {
            fontSize: 20+'px',
            background: '#e15671'
        }
        return (
            <div>
                <header className="App-header">
                    <div className="w-1200">
                        <div className="left fl">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="right fr"><span><NavLink to="/login">登录</NavLink></span>|<span>退出</span></div>
                    </div>
                </header>
                <nav className="App-nav">
                    <div className="w-1200">
                        <ul>
                            <li><NavLink to="/home" activeStyle={activeStyle}>首页</NavLink></li>
                            <li><NavLink to="/entertainment" activeStyle={activeStyle}>娱乐空间</NavLink></li>
                            <li><NavLink to="/study" activeStyle={activeStyle}>乐学空间</NavLink></li>
                            <li><NavLink to="/chatroom" activeStyle={activeStyle}>畅聊室</NavLink></li>
                            <li><NavLink to="/personalspace" activeStyle={activeStyle}>个人空间</NavLink></li>
                            <li><NavLink to="/messageboard" activeStyle={activeStyle}>留言板</NavLink></li>
                            <li><NavLink to="/aboutme" activeStyle={activeStyle}>关于我</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <section>
                    <div className="w-1200">
                        <div className="main-left">
                            {/*<Router />*/}
                        </div>
                        <div className="main-right"></div>
                    </div>
                </section>
                <footer>
                    Design by 何育骞
                </footer>
                <BackTop></BackTop>
            </div>
        )
    }
}
export default Index;