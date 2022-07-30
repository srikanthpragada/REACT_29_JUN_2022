import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    useEffect(getDateTime, []);

    function showTime(data) {
        setNow(data.datetime) 
    }

    function getDateTime() {
        $.getJSON('http://worldtimeapi.org/api/timezone/Asia/Kolkata',
                  showTime);
    }
    return (
        <>
            <h2>jQuery Demo</h2>
            <hr />
            <h1>{now}</h1>
        </>
    )
}
