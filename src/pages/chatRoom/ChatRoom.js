import React, { Component } from 'react';
import './ChatRoom.css';
import {Icon, Button} from 'antd';
import io from 'socket.io-client';
let socket = io.connect('ws://localhost:9999');
// import PropTypes from "prop-types";
// import emitter from '../../utils/event'
class ChatRoom extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            onlineNum: 0,
            chatMessage: '',
            chatData: [],
            userId: '12313212313123131231'
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.keySend = this.keySend.bind(this)
    }
    sendMessage () {
        let data = {
            name: 'xiaohe',
            userId: '12313212313123131231',
            info: this.refs.input.innerHTML
        }
        if(data){
            socket.emit('sendMsg',data)
            this.refs.input.innerHTML = ''
        }
    }
    keySend (event) {
        if (event.keyCode ===13&&event.ctrlKey){
            this.sendMessage()
        }
    }
    componentWillMount () {
        socket.open()
    }
    componentDidMount () {
        socket.on('setUser', (data) => {
            this.setState({
                onlineNum: data
            })
        })
        socket.on('userLeave', (data) => {
            this.setState({
                onlineNum: data
            })
        })
        socket.on('backMsg', (data) => {
            this.state.chatData.push(data)
            let arr = this.state.chatData
            this.setState({
                chatData: arr
            })
        })
    }
    componentWillUnmount () {
        socket.close()
    }
     render () {
        const element = this.state.chatData.map((item,index)=>{
                if(item.userId !== this.state.userId){
                    return <li className="clearfix" key={index}>
                        <div className="fl message-item">
                            <span className="avatar"><Icon type="user" style={{ fontSize: 30, color: '#08c' }} /></span>
                            <span className="name">{item.name}</span>
                            <div className="item-info">
                                {item.info}
                            </div>
                        </div>
                    </li>
                } else{
                    return <li className="clearfix" key={index}>
                        <div className="fr message-item">
                            <div className="clearfix">
                                <span className="avatar fr"><Icon type="user" style={{ fontSize: 30, color: '#08c' }} /></span>
                                <span className="name fr">{item.name}</span>
                            </div>
                            <div className="item-info right-info">
                                {item.info}
                            </div>
                        </div>
                    </li>
                }
        })
        return (
            <div className="clearfix">
                <div className="fl">
                    <div className="current-online">目前在线人数：{this.state.onlineNum}</div>
                    <div className="chat-message">
                        <ul>
                            {element}
                        </ul>

                    </div>
                    <div className="chat-input">
                        <div className="chat-operate">
                            <Icon type="smile-o" style={{ fontSize: 30, color: '#08c' }} title="表情"/>
                            <Icon type="picture" style={{ fontSize: 30, color: '#08c' }} title="图片"/>
                        </div>
                        <p className="message-input" contentEditable={true} ref="input" onKeyDown={this.keySend}></p>
                        <div className="message-send">
                            <span className="send-tip">按ctrl+Enter发送</span>
                            <Button type="primary" onClick={this.sendMessage}>发送</Button>
                        </div>
                    </div>
                </div>
                <div className="fr">
                    sdfskadfsadfsadfsdfafdsdfsfds
                </div>
            </div>
        )
    }
}
export default ChatRoom;