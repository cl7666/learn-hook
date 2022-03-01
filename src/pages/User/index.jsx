import React from "react";
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate();
    function clickHomeHand() {
        navigate('/')
    }
    return (
        <div>
            用户页面
            <button onClick={clickHomeHand}>去首页</button>
        </div>
    )
}
export default User