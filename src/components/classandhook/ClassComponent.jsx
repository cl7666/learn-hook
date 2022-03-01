import React, { Component } from 'react'

export default class classComponent extends Component {
    state = {
        counter: 100,
        list: [
            {
                id: 1001,
                name: '蓝猫'
            },
            {
                id: 1002,
                name: '冲呀！'
            }
        ],
        timer: null
    }
    componentDidMount() {
        console.log("class组件渲染完成");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
