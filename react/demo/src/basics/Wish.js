import React from 'react'

export default function Wish() {
    // Take current hour
    let hours = new Date().getHours()
    let message = "Good Evening"
    if (hours < 12)
        message = "Good Morning"
    else
        if (hours < 17)
            message = "Good Afternoon"

    return (
        <>
            <h1 style={{ color: 'red', fontSize: '50pt' }}>
                {message}
            </h1>
        </>
    )
}
