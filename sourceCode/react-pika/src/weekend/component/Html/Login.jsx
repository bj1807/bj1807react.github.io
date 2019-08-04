import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom';
import Dl from './Dl.jsx';
import Zc from './Zc.jsx';
export default class Login extends Component {
    render() {
        return (
            <div>
                <img className='loginimg' src="http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png" alt=""/>
                <div className='linkbox'>
                <ul className='linkul'>
                    <li>
                    <NavLink to='/login/zc' activeClassName='active'>注册</NavLink>
                    </li>
                    <li>
                    <NavLink to='/login/dl'  activeClassName='active'>登录</NavLink>
                    </li>
                </ul>
                {/* <hr/> */}
                </div>
                <Route path='/login' exact component={()=>{
                    return <Dl ></Dl>
                }}/>
                <Route path='/login/zc' component={()=>{
                    return <Zc ></Zc>
                }}/>
                <Route path='/login/dl' component={()=>{
                    return <Dl ></Dl>
                }}/>
            </div>
        )
    }
}
