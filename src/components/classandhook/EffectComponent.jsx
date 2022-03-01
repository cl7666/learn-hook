import React, { useEffect, useState } from 'react'

const TimerAPI = {
    time: "",
    subscribe(cb) {
        this.timer = setInterval(() => {
            this.time = new Date().toString();
            cb(this.time)
        }, 1000)
    },
    unSubscribe() {
        clearInterval(this.timer)
    }
}
const EffectComponent = () => {
    const [showTime,setShowTime] = useState(""); 
    useEffect(() => {
        TimerAPI.subscribe((currentTime) => {
            setShowTime(currentTime)
        })
        return () => {
            TimerAPI.clearInterval();
        }
    }, [])
    return (
        <div>
            <h3>清除副作用</h3>
            <p>{showTime}</p>
        </div>
    )
}

export default EffectComponent