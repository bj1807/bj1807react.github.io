import React, { Component } from 'react'

export default class Dl extends Component {
    constructor(){
        super()
        this.state={
            phone:'手机号(中国大陆)',
            password:'手机号(中国大陆)',
        }
    }
    render() {
        return (
            <div>
                <div className='inputbox'> 
                    <input type="text" className='plone' value={this.state.phone}/>
                    <input type="text" className='plone' value={this.state.password}/>
                </div>
            </div>
        )
    }
}
