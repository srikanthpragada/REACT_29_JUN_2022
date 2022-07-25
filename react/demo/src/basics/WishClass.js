import React from 'react'

export default class WishClass extends React.Component {
    constructor() {
        super();
        // Take current hour
        let hours = new Date().getHours()
        this.message = "Good Evening"
        if (hours < 12)
            this.message = "Good Morning"
        else
            if (hours < 17)
                this.message = "Good Afternoon"
    }

    render() {
        return (
            <>
                <h1 style={{ color: 'red', fontSize: '50pt' }}>
                    {this.message}
                </h1>
            </>
        )
    }
}
