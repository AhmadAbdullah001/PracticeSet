import React, { useState } from 'react'
import './/Toast.css'
function Toast() {
    const [show,setshow]=useState(false)
    const handleclick=()=>{
        setshow(true)
        setTimeout(() => {
            setshow(false)
        }, 3000);
    }
  return (
    <>
   <button onClick={handleclick}>Click me</button>
   {show && <div style={{border:"solid black 1px",position:"absolute",right:"10px",top:"10px",width:"25vw",height:"12vh",borderRadius:"10px",}}>
       <center> <p>Here is the modal</p></center>
        <div className='progress'></div>
   </div>}
   </>
  )
}

export default Toast