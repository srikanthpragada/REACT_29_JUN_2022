import React from 'react'

export default function Even() {

    function check() {
        let txtNumber = document.getElementById("number")
        let result = document.getElementById("result")
        let num = parseInt(txtNumber.value)
        if (num % 2 === 0)
            result.innerHTML = "Even"
        else
            result.innerHTML = "Odd"
    }
    return (
        <>
            <h2>Even Number Check</h2>
            Number <input type="number" id="number" />
            <p></p>
            <button onClick={check}>Check</button>
            <p></p>
            <h3 id="result"></h3>
        </>
    )
}
