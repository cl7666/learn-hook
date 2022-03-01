import React from 'react'
import FetchHook from '../../utils/FetchHook'
import CountHook from '../../utils/CountHook'

const CustomHook = () => {

    const { data, loading } = FetchHook("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    const { count, addCount, minCount } = CountHook()
    return (
        <div>
            <h3>自定义hook</h3>
            {
                loading ?
                    <div>请等待数据加载</div>
                    :
                    <p>{data.chengpinDetails[0].title}</p>
            }
            <div>
                <p>{count}</p>
                <button onClick={addCount}>增加</button>
                <button onClick={minCount}>减少</button>
            </div>
        </div>
    )
}
export default CustomHook