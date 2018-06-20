import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { BackTop,Tooltip } from 'antd';
import './common/css/asset.css';
import './common/fonts/iconfont.css';
import logo from './common/image/logo.png';
import './App.css';
import {loginOut} from './apis/api';
// import EnterTainment from './pages/enterTainment/EnterTainment';
// import Home from './pages/home/Home'
import Router from './router/index'
class App extends Component {
  constructor (props) {
      super(props)
      this.state={
        userInfo: null
      }
  }
    componentDidMount () {
      this.setState({
          userInfo: JSON.parse(sessionStorage.getItem('webUserInfo'))
      })
  }
  loginOut = () => {
      let userId = this.state.userInfo.userId
      loginOut({userId: userId}).then(res => {
          sessionStorage.removeItem('webUserInfo')
          window.location.href = '/login'
      }).catch(err => {
          console.log(err)
      });
  }
  render() {
   let activeStyle = {
      fontSize: 20+'px',
      color: '#e15671'
   }
   const {userInfo} = this.state;
   let welWord = userInfo ? userInfo.userName+'，欢迎您！':null
    return (
      <div className="App">
        <header className="App-header">
            <div className="w-1200">
                <div className="left fl">
                    <img src={logo} alt=""/>
                </div>
                <div className="right fr"><span className="head-login">{!userInfo ? <NavLink to="/login">登录</NavLink>:
                    <span className="login-out" onClick={this.loginOut}>{welWord}</span>}
                    </span></div>
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
                   <Router />
               </div>
               <div className="main-right"></div>
           </div>
       </section>
      <footer>
          Design by 何育骞
      </footer>
          <BackTop></BackTop>
      </div>
    );
  }
}
export default App;
