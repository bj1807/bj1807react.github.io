import React, { Component } from 'react'
import tool from '../tool/tool.js';

export default class Dl extends Component {
    constructor(props){
        super(props);
        this.state={
            phone:'',
            password:''
        }
    }
    btn=({target})=>{
        this.setState({
            [target.name]:target.value
        })
    }
    onSubmit1=(pandName)=>{
        // console.log(pandName)
        // console.log(pandName)
        let data = tool(this.state,pandName)
        if (data.status) {
            // console.log('这个时候 我们可以去请求登录接口')
            alert(data.msg)
            // if (pandName==='register') {
            //     this.setState({
            //         isLongin:true
            //     })             
            // }
        } else {
        //    if (pandName==='dl') {
        //     this.setState({
        //         errcount:this.state.errcount+1
        //     })
        //    }
            // console.log(this.state.errcount)
            alert(data.msg)
        }
    }
    render() {
        return (
            <div>
                <div className='inputbox'>
                    <form>
                        <label>
                        <input
                        type="text" 
                        className='plone' 
                        value={this.state.phone}
                        placeholder='手机号(中国大陆)'
                        name='phone'
                        onChange={this.btn}
                    />
                        </label>
                    </form>
                    
                    <input 
                        type="text" 
                        className='plone' 
                        value={this.state.password}
                        placeholder='密码(6-16位)'
                        name='password'
                        onChange={this.btn}
                    />
                </div>
                <button className='zcbtn'  onClick={()=>this.onSubmit1('dl')}>点击登录</button>
            </div>
        )
    }
}
