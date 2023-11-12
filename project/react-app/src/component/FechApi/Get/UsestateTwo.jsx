import React, { useState } from 'react'

function UsestateTwo() {
    const [first,second]=useState(0)
    const [first1,second1]=useState(0)
  return (
    <>
        <h1>Mango</h1>
        <h3>{first}</h3>
        <button onClick={()=>second(first+1)}> +</button>
        <button onClick={()=>second(first-1)}> -</button>
        <button onClick={()=>second(0)}>reset</button>
        <br />
        <h1>Banana</h1>
        <h3>{first1}</h3>
        <button onClick={()=>second1(first1+1)}>+</button>
        <button onClick={()=>second1(first1-1)}>-</button>
        <button onClick={()=>second1(0)}>reset</button>
    </>
  )
}

export default UsestateTwo