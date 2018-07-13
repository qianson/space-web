import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
// import enterTainment from '../pages/enterTainment/enterTainment'
const Home = asyncComponent(() => import('../pages/home/Home'));
const EnterTainment = asyncComponent(() => import('../pages/enterTainment/EnterTainment'));
const Study = asyncComponent(() => import('../pages/study/Study'));
const AboutMe = asyncComponent(() => import('../pages/aboutMe/AboutMe'));
const ChatRoom = asyncComponent(() => import('../pages/chatRoom/ChatRoom'));
const MessageBoard = asyncComponent(() => import('../pages/messageBoard/MessageBoard'));
const PersonalSpace = asyncComponent(() => import('../pages/personalSpace/PersonalSpace'));
const Detail = asyncComponent(() => import('../pages/detail/Detail'));
const Login = asyncComponent(() => import('../pages/login/Login'));
const Index = asyncComponent(() => import('../pages/index/Index'));
export default class RouteConfig extends Component {
    render () {
        return(
            <Switch>
                <Route path='/' exact render={()=>(<Redirect to='/home'/>)}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/entertainment' exact component={EnterTainment}/>
                <Route path='/study' exact component={Study}/>
                <Route path='/aboutme' exact component={AboutMe}/>
                <Route path='/messageboard' exact component={MessageBoard}/>
                <Route path='/chatroom' exact component={ChatRoom}/>
                <Route path='/personalspace' exact component={PersonalSpace}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/login' component={Login}/>
            </Switch>
    )}
}