import React, { Component } from 'react'
import tool from '../tool/tool.js';
export default class Zc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            tpcode: '',
            yzcode: '',
            szpassword: ''
        }
    }
    btn = ({ target }) => {
        // console.log(target)
        this.setState({
            [target.name]: target.value
        })
    }
    onSubmit = (pandName) => {
        // console.log(pandName)
        let data = tool(this.state,pandName)
        if (data.status) {
            // console.log('这个时候 我们可以去请求登录接口')
            alert(data.msg)
        } else {
            alert(data.msg)
        }
    }
    render() {
        return (
            <div>
                <div className='inputbox'>

                    <input className='plone' type="text"
                        placeholder='手机号(中国大陆)'
                        value={this.state.phone}
                        name='phone' onChange={this.btn} />

                    <input className='tpcode'
                        type="text" value={this.state.tpcode}
                        placeholder='图片验证码'
                        name='tpcode' onChange={this.btn} />

                    <img className='tpimg' src="http://www.lofter.com/lpt/photoCaptcha/getPhotoCaptcha.do?width=100&height=35&60176" alt="啦" />
                    <button>换一张</button>
                    <div className='yzbox'>

                        <input className='yzcode'
                            type="text" value={this.state.yzcode}
                            placeholder='验证码'
                            name='yzcode' onChange={this.btn} />

                        <button>发送验证码</button>
                    </div>

                    <input className='plone'
                        placeholder='设置密码(6-18位)'
                        type="text" value={this.state.szpassword}
                        name='szpassword' onChange={this.btn} />

                </div>
                <button className='zcbtn' onClick={()=>this.onSubmit('zc')}>点击注册</button>

            </div>
        )
    }
}
