import React, { useState } from 'react'

function Mod() {
    const [open,setopen]=useState(false)
    const handleclick=()=>{
        if(open)
            setopen(false)
        else
            setopen(true)
    }
  return (
    <>
    <button onClick={handleclick} style={{display:open?'none':'block'}}>Open Modal</button>
    <div style={{height:"93vh",display:"flex",justifyContent:"center",display:"flex",justifyContent:"center",alignItems:"center",position:'absolute',width:"97vw",backgroundColor:open?"grey":"transparent"}}>
        <div style={{height:"50vh", border:'solid black 1px',width:"30%",display:open?'block':'none',backgroundColor:'white'}}>
            <div style={{display:'flex',justifyContent:'space-between',borderBottom:"solid 1px black"}}>
                <p style={{marginLeft:"10px",marginTop:"22px"}}>MODAL</p>
                <center><p onClick={()=>{setopen(false)}} style={{border:'solid GREY 1px',marginRight:'10px',padding:'10px',width:"15px",height:"15px",borderRadius:'200px'}}>X</p></center>
            </div>
                <center><p>Hello this is the content for the Modal Component Hello this is the content for the Modal Component Hello this is the content for the Modal Component Hello this is the content for the Modal Component Hello this is the content for the Modal Component </p></center>
        </div>
    </div>
    </>
  )
}

export default Mod