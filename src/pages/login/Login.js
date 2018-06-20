import React, { Component } from 'react';
import './Login.css'
import {Icon, Input, Button} from 'antd';
import {register,login} from '../../apis/api';
import CryptoJS from 'crypto-js';
class Login extends Component {
    constructor (props) {
        super(props);
        this.state= {
            userName: '',
            password: '',
            checkPassword:'',
            tabIndex: 1
        }
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    onChangeCheckPassword = (e) => {
        this.setState({ checkPassword: e.target.value });
    }
    tabLogin = (index) => {
        this.setState({
            tabIndex: index,
            userName: '',
            password: '',
            checkPassword:'',
        })
    }
    goReg = () => {
        let words = CryptoJS.enc.Utf8.parse(this.state.password);
        let paramBase64 = CryptoJS.enc.Base64.stringify(words);
        let params = {
            userName: this.state.userName,
            password: paramBase64,
            checkPassword: paramBase64
        };
        register(params).then(res => {
            setTimeout(()=>{
                this.setState({
                    tabIndex: 1
                })
            },1000)
        }).catch(err => {
            console.log(err)
        });
    }
    goLogin = () => {
        let words = CryptoJS.enc.Utf8.parse(this.state.password);
        let paramBase64 = CryptoJS.enc.Base64.stringify(words);
        let params = {
            userName: this.state.userName,
            password: paramBase64,
        };
        login(params).then(res => {
            sessionStorage.setItem('webUserInfo',JSON.stringify(res.data));
            this.props.history.push({
                pathname: 'home'
            });
        }).catch(err => {
            console.log(err)
        })
    }
    render () {
       // const { getFieldDecorator } = this.props.form;
        const { userName,checkPassword,password,tabIndex} = this.state;
        const loginForm = <div className="login-from">
                     <div className="username-wrapper">
                         <Input
                             placeholder="Enter your username"
                             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                             value={userName}
                             size="large"
                             onChange={this.onChangeUserName}
                             ref={node => this.userNameInput = node}
                         />
                     </div>
                     <div className="password-wrapper">
                         <Input
                             placeholder="Enter your password"
                             prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                             value={password}
                             size="large"
                             onChange={this.onChangePassword}
                             ref={node => this.passwordInput = node}
                             type="password"
                         />
                     </div>
                     <div className="no-account">
                         <Button type="primary" size="large" onClick={this.goLogin}>登录</Button>
                     </div>
                     <div className="login-others">
                         <a href="##" className="qq">
                             <i></i>
                             <span>QQ登录</span>
                         </a>
                         <a href="##" className="wx">
                             <i></i>
                             <span>微信登录</span>
                         </a>
                         <a href="##" className="wb">
                             <i></i>
                             <span>微博登录</span>
                         </a>
                     </div>
                 </div>
        const regForm = <div className="regForm">
            <div className="username-wrapper">
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={userName}
                    size="large"
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}
                />
            </div>
            <div className="password-wrapper">
                <Input
                    placeholder="Enter your password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={password}
                    size="large"
                    onChange={this.onChangePassword}
                    ref={node => this.passwordInput = node}
                    type="password"
                />
            </div>
            <div className="password-wrapper">
                <Input
                    placeholder="Enter your password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={checkPassword}
                    size="large"
                    onChange={this.onChangeCheckPassword}
                    ref={node => this.checkPasswordInput = node}
                    type="password"
                />
            </div>
            <div className="no-account">
                <Button type="primary" size="large" onClick={this.goReg}>注册</Button>
            </div>
        </div>
       return(
         <div className="login-page">
             <div className="login-wrapper">
                 <div className="welcome">欢迎访问！</div>
                 <div className="login-reg">
                     <span className="login-tab"><span className={`login ${tabIndex===1?'tabActive':''}`} onClick={() => this.tabLogin(1)}>登录</span></span>
                     <span className="reg-tab"><span className={`reg ${tabIndex===2?'tabActive':''}`} onClick={() => this.tabLogin(2)}>注册</span></span>
                 </div>
                 {tabIndex===1?loginForm:regForm}
             </div>
         </div>
   )}
}
// const Login = Form.create()(LoginForm);
export default Login;