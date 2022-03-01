import React, { useState } from "react";
import { Link } from "react-router-dom";


const Order = () => {
    const [list] = useState([
        {
            id: 1001,
            title: '冲呀'
        },
        {
            id: 1002,
            title: '冲冲'
        },
    ])
    return (
        <div>
            <ul>
                {
                    list.map((ele, index) => {
                        return (
                            <li key={index} >
                                <Link to={`/Details/${ele.id}`}>{ele.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Order