import React, { Component } from 'react';
import './PersonalSpace.css';
import {collectList} from '../../apis/api'
import thumbnail2 from '../../common/image/thumbnail2.jpg';
class PersonalSpace extends Component {
    constructor (props) {
        super(props)
        this.state = {
            collectList: []
        }
    }
    componentWillMount () {
        this.getCollectList()
    }
    getCollectList = () => {
        let param = {
            userId: JSON.parse(sessionStorage.getItem('webUserInfo')).userId,
            isCollected: 1
        }
        console.log(param)
        collectList(param).then((res) => {
            this.setState({
                collectList: res.data
            })
        })
    }
    render () {
        const {collectList} = this.state;
        const collectElem = collectList.map((item) => {
            return <li key={item.id}>
                <div className="image-wrapper"><img src={thumbnail2} alt=""/></div>
                <h5>{item.title}</h5>
                <div>{item.summary}</div>
            </li>
        })
        return (
            <div className="collect-wrapper">
                <h2>我的收藏</h2>
                <ul className="my-collect">
                    {collectElem}
                </ul>
            </div>
        )
    }
}
export default PersonalSpace;