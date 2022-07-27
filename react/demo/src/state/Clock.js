import React, { useState } from 'react'

export default function Clock() {
    let [time, setTime] = useState(getCurrentTime())
    setInterval(updateTime, 1000)

    function updateTime() {
        setTime(getCurrentTime())
    }

    function getCurrentTime() {
        var ct = new Date()
        return ct.getHours() + ":" + ct.getMinutes() + ":" + ct.getSeconds()
    }

    return (
        <>
            <h1 className="text-primary">{time}</h1>
        </>
    )
}
