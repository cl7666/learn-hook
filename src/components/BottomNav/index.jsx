import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default class BottomNav extends Component {
    render() {
        return (
            <div className='bottom-nav'>
                <ul className='nav-container'>
                    <li>
                        <NavLink exact to='/'>
                            <span className='iconfont'>
                            </span>
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Find'>
                            <span className='iconfont'>
                            </span>
                            发现
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Cart'>
                            <span className='iconfont'>
                            </span>
                            购物车
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Order'>
                            <span className='iconfont'>
                            </span>
                            订单
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/User'>
                            <span className='iconfont'>
                            </span>
                            用户
                        </NavLink >
                    </li >
                </ul >
            </div >
        )
    }
}
