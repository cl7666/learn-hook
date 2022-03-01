import React, { useState, useEffect } from "react";
import CountHook from "../../utils/CountHook";

const HookComponent = () => {

    const [counter, setCounter] = useState(200);
    const [list, setList] = useState([
        {
            id: 1001,
            name: '蓝猫'
        },
        {
            id: 1002,
            name: '冲呀！'
        }
    ]);
    function clickHandle() {
        setCounter(2000)
    }
    useEffect(() => {
        console.log("hook组件渲染完成");
        return () => {
            console.log("hook组件即将卸载");
        }
    })
    const { count } = CountHook()
    return (
        <div>
            <h3>hook形式</h3>
            <p>{count}</p>
            <div>
                <button onClick={clickHandle}>修改</button>
                <p>counter:{counter}</p>
            </div>
            <ul>
                {
                    list.map((ele, index) => {
                        return <li key={index} >{ele.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default HookComponent