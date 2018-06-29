import React, { Component } from 'react';
import './MessageBoard.css';
import {Icon,Avatar, Button,message} from 'antd';
import Emoj from '../../components/emoj';
import {leaveMessage,getLeaveMessageList,submitReplyMessage,lookReply} from '../../apis/api';
import {dateFormat} from "../../utils/utils";
class MessageBoard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            emojShow: false,
            messageList: [],
            selectId: '',
            emoj: false,
            reply:false,
            totalMessage: 0,
            replyToggles: []
        }
    };
    componentWillMount = () => {
        this.getMsgList()
    };
    getMsgList = () => {
        getLeaveMessageList({}).then(res => {
            let arr = [];
            for (let i = 0;i<res.data.length;i++){
                arr.push(false)
            }
            this.setState({
                messageList: res.data,
                totalMessage: res.data.length,
                replyToggles: arr
            })
            }
        ).catch(err => {
            console.log(err)
        })
    };
    emojTable = () => {
        this.setState({
            emojShow: !this.state.emojShow
        })
    };
    getEmoj = (data) => {
        let src = data.icon
        let getImg = `<img src=${src} alt=""/>`;
        const _cont = this.refs.myinput.innerHTML + getImg;
        this.refs.myinput.innerHTML = _cont;
    };
    submitMessage = () => {
        let messageInput = this.refs.myinput.innerHTML;
        let userId = JSON.parse(sessionStorage.getItem('webUserInfo')).userId;
        let userName = JSON.parse(sessionStorage.getItem('webUserInfo')).userName;
        let param = {
            message:messageInput,
            userId: userId,
            userName: userName
        }
        leaveMessage(param).then(res => {
            message.success('提交成功')
            this.getMsgList()
            this.refs.myinput.innerHTML = ''
            this.setState({
                emojShow:false
            })
        }).catch(err => console.log(err))
    };
    listEmoj = (item) => {
        this.setState({
            selectId: item.id,
            emoj: !this.state.emoj
        })
    };
    replyClick = (item,index) => {
        this.state.replyToggles[index] = !this.state.replyToggles[index];
        this.setState({
            replyToggles: this.state.replyToggles,
            selectId: item.id
        })
    };
    replyEmoj =(data) => {
        let src = data.icon
        let getImg = `<img src=${src} alt=""/>`;
        const _cont = this.refs.emojinput.innerHTML + getImg;
        this.refs.emojinput.innerHTML = _cont;
    };
    submitReplyMessage = (item) => {
        console.log(item)
        let messageId = item.id
        let leaveMessage = this.refs.emojinput.innerHTML
        let userName = item.userName
        submitReplyMessage({messageId:messageId,leaveMessage:leaveMessage,userName:userName}).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    };
    render () {
        const {replyToggles,emojShow,selectId,emoj,reply,totalMessage} = this.state;
        const elemLi = this.state.messageList.map((item,index) =>　{
            const replyElem= item.replyList.map((replyitem) => {
                return <li key={replyitem.id}>
                    <div className="reply_1">
                    <span>何育骞</span><span className="time">{dateFormat(Number(item.messageTime))}</span><span className="reply-me">回复</span><span>{replyitem.userName}</span>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: replyitem.leaveMessage}} className="reply_2">
                    </div>
                </li>
            });
           return <li className="clearfix" key={item.id}>
                <div className="user-avatar fl"><Avatar shape="square" size="large" icon="user"/></div>
                <div className="msg-list">
                    <div className="msg-desc" dangerouslySetInnerHTML={{__html: item.leaveMessage}}></div>
                    <div className="msg-intro">
                        <span className="name">{item.userName}</span>
                        <span className="time">{dateFormat(Number(item.messageTime))}</span>
                        <span className="back-msg" onClick={()=>this.replyClick(item,index)}>回复</span>
                    </div>
                    {(replyToggles[index]&&selectId === item.id)&&<div className={replyToggles[index] ? 'hShow':'p-cont'}>
                        <p contentEditable={true} className="eva-input" ref="emojinput"></p>
                        <div className="submit-msg clearfix">
                            <span className="fl">
                                <Icon type="smile-o" style={{fontSize: 30, color: '#08c'}} title="表情" onClick={()=>{this.listEmoj(item)}}/>
                                <div className="emoj-accept">
                                    {(selectId === item.id&&emoj)&&<Emoj emojCallBack={this.replyEmoj}/>}
                                    {/*{!item.emoj && <Emoj emojCallBack={this.getEmoj}/>}*/}
                                    {/*{emojShow && <Emoj emojCallBack={this.getEmoj}/>}*/}
                                </div>
                            </span>
                            <span className="fr">
                                <Button type="primary" onClick={() => this.submitReplyMessage(item)}>提交回复</Button>
                            </span>
                        </div>
                    </div>}
                    <ul className="reply-list">
                        {replyElem}
                    </ul>
                </div>
            </li>
        });
        return (
            <div className="leave-wrapper">
                <div className="forme">给我留言</div>
                <div className="express-msg">
                    <span className="avatar"><Avatar shape="square" size="large" icon="user" /></span>
                    <span>发表我的言论</span>
                </div>
                <div className="p-cont">
                    <p contentEditable={true} className="eva-input" ref="myinput"></p>
                    <div className="submit-msg clearfix">
                        <span className="fl emoj">
                            <Icon type="smile-o" style={{ fontSize: 30, color: '#08c' }} title="表情" onClick={this.emojTable}/>
                            <div className="emoj-accept">
                                {emojShow &&<Emoj emojCallBack={this.getEmoj}/>}
                            </div>
                        </span>
                        <span className="fr">
                            <Button type="primary" onClick={this.submitMessage}>提交</Button>
                        </span>
                    </div>
                </div>
                <div className="total-msg">
                    <span className="leave-msg">留言</span>
                    <Icon type="message" style={{ fontSize: 30, color: '#e74851' }} title="留言"/>
                    <span className="total-msg-t">总共{totalMessage}条留言</span>
                </div>
                <div className="msg-wrapper">
                    <ul>
                        {elemLi}
                    </ul>
                </div>
            </div>
        )
    }
}
export default MessageBoard;