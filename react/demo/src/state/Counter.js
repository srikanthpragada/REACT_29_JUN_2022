import React, {useState} from 'react'

export default function Counter() {
  let [counter, setCounter] =  useState(0)

  function increment(e) {
      console.log(e)
      setCounter(counter + 1)
      // console.log(counter)
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Inc</button>
    </>
  )
}
