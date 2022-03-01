import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectHookComponent = () => {
    const [chengpin, setChengpin] = useState({});
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count);
    }, [count])
    useEffect(() => {
        axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
            .then(res => {
                if (res.status === 200) {
                    setChengpin(res.data.chengpinDetails[0])
                }
            })
    }, [])
    function clickHandle() {
        setCount(count + 1)
    }
    return (
        <div>
            <h3>useEffect应用</h3>
            <div>
                <button onClick={clickHandle}>修改数据</button>
                <p>{count}</p>
            </div>
            <p>{chengpin.title}</p>
        </div>
    )

}
export default UseEffectHookComponent