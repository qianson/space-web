import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './Child1'
import './EnterTainment.css'
class EnterTainment extends Component {
    static childContextTypes = {
        themColor: PropTypes.string
    }
    constructor (props) {
        super(props)
        this.state = {
            themColor: 'red'
        }
    }
    componentWillMount () {
        console.log(process.env.PORT)
    }
    getChildContext () {
        return {
            themColor : this.state.themeColor
        }
    }
    render () {
       return(
         <div>
             <div>请选择标签</div>
             <div>
                 <Child1 />
             </div>
         </div>
   )}
}
export default EnterTainment;