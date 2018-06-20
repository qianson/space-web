import React, { Component } from 'react';
import './CommonRight.css'

class CommonRight extends Component {
    constructor () {
        super(...arguments)
    }
    render () {
        return (
            <div>
                <div>
                    <h5>最新评论</h5>
                </div>
                <div>
                    <h5>友情链接</h5>
                </div>
            </div>
        )
    }
}
export default CommonRight;