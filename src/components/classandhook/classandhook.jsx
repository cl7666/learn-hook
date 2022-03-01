import React, { Component } from 'react'
import HookComponent from './HookComponent'
import UseEffectHookComponent from './useEffectHookComponent'
import EffectComponent from './EffectComponent'
import CustomHook from './CustomHook'


class Classandhook extends Component {
    render() {
        return (
            <div>
                <HookComponent />
                <UseEffectHookComponent />
                <EffectComponent />
                <CustomHook />
            </div >
        )
    }
}

export default Classandhook