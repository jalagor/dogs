import React from 'react'

export default function Counter({count, increment, decrease}){
    
    return (
        <div id="box">
            {console.log(increment)}
            <h2>{count}</h2>
            <button onClick = {decrease} >-</button>
            <button onClick = {(event/* event not needed*/) => increment(5)} >+</button>
        </div>
    )
}
