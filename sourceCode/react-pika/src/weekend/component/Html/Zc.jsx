import React, { Component } from 'react'

export default class Zc extends Component {
    constructor(){
        super()
        this.state={
            zc:'手机号(中国大陆)',
            tpcode:'图片验证码',
            yzcode:'验证码',
            szpassword:'设置密码(6-18位)'
        }
    }
    render() {
        return (
            <div>
                <div className='inputbox'> 
                    <input className='plone' type="text" value={this.state.zc}/>
                    <div>
                    <input className='tpcode' type="text" value={this.state.tpcode}/>
                    <img className='tpimg' src="http://www.lofter.com/lpt/photoCaptcha/getPhotoCaptcha.do?width=100&height=35&60176" alt="啦"/>
                    <button>换一张</button>
                    </div>
                    <div className='yzbox'>
                    <input className='yzcode' type="text" value={this.state.yzcode}/>
                    <button>发送验证码</button>
                    </div>
                    <input className='plone' type="text" value={this.state.szpassword}/>
                </div>
            </div>
        )
    }
}
