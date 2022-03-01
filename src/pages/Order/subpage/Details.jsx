import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const params = useParams();
    return (
        <div>
            我是详情页：{params.id}
        </div>
    )
}
export default Details