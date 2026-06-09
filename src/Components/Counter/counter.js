import React, { useEffect } from 'react'
import { useState } from 'react'
function Counter() {
  const [count,setCount]=useState(0)
  const add=()=>{
    setCount(count+1);
  }
  const sub=()=>{
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0)
  }
  return (
    <div style={{border:"red 1px solid",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button onClick={add} style={{height:"5vw",width:"20vh",fontSize:"2vw"}}>+</button>
      <button  onClick={sub} disabled={count===0} style={{height:"5vw",width:"20vh",fontSize:"2vw"}}>-</button>
      <p style={{height:"fit-content",fontSize:"2vw",margin:"20px"}}>{count}</p>
      <button onClick={reset} style={{height:"5vw",width:"20vh",fontSize:"2vw"}}>Reset</button>
    </div>
  )
}

export default Counter
