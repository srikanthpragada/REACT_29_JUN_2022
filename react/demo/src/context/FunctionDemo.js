import React, { useContext } from 'react'

const MyContext = React.createContext(); // step 1

export default function Parent() {
    const details = {course : 'React', trainer : 'Srikanth Pragada'}
    return (
        // create data using provider  - step 2
        <MyContext.Provider value={details}>
            <h1>Parent</h1>
            <Child />
        </MyContext.Provider>
    )
}

function Child() {
    return (
        <>
            <h2>Child </h2>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    // gets data present in context -- step 3
    const details = useContext(MyContext) 
    return (
        <>
            <h2>Grand Child </h2>
            <h3>Course : {details.course} </h3>
            <h3>Trainer : {details.trainer} </h3>
        </>
    )
}