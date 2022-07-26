import React, {useRef} from 'react'

export default function Even() {
    let number = useRef()
    let result = useRef() 

    function check() {
        let num = parseInt(number.current.value)
        if (num % 2 === 0)
            result.current.innerHTML = "Even"
        else
            result.current.innerHTML = "Odd"
    }
    return (
        <>
            <h2>Even Number Check Using useRef()</h2>
            Number <input type="number" ref={number} />
            <p></p>
            <button onClick={check}>Check</button>
            <p></p>
            <h3 ref={result}></h3>
        </>
    )
}
