import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'

export default class DateTimeClass extends React.Component {
    constructor() {
        super()
        this.state = { now: '' }
        this.showTime = this.showTime.bind(this)
    }

    componentDidMount() {
        this.getDateTime()
    }

    componentDidUpdate() {
        this.getDateTime()
    }


    showTime(data) {
        this.setState({ now: data.datetime })
    }

    getDateTime() {
        $.getJSON('http://worldtimeapi.org/api/timezone/Asia/Kolkata',
            this.showTime);
    }

    render() {
        return (
            <>
                <h2>Class with AJAX</h2>
                <hr />
                <h1>{this.state.now}</h1>
            </>
        )
    }
}
