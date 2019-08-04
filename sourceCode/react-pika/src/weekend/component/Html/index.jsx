import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import './index.scss';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Shouye from '../../../shouye'
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter >
                   <Route path='/' exact component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/shouye' component={Shouye}></Route>
            </BrowserRouter>
        )
    }
}
