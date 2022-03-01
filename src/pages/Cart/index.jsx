import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { ADD_COUNT } from '../../redux/constants'
import * as countActions from '../../redux/actions/count'

const Cart = () => {
    const count = useSelector(state => state)
    const dispatch = useDispatch();
    function clickAddHandle() {
        return (
            // dispatch({
            //     type: ADD_COUNT
            // })
            dispatch(countActions.addCount())
        )
    }
    function clickMinHandle() {
        return (
            dispatch(countActions.minCount())
        )
    }
    return (
        <div>
            购物车：{count}
            <button onClick={clickAddHandle}>+</button>
            <button onClick={clickMinHandle}>-</button>
        </div>
    )
}
export default Cart