import React, {useState } from 'react'

function Searchfnc() {
  const techs=[
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "JavaScript",
  "Express",
  "NextJS",
  "TypeScript",
  "Angular",
  "Vue"
]
const [val,setval]=useState("");
const filteredItem=techs.filter(tech=>tech.toLowerCase().includes(val.toLowerCase()))

  return (
    <>
    <div style={{height:"fit-content",border:"solid red 1px",display:"flex",justifyContent:"center"}}>
        <input placeholder='Enter the Item Name' onChange={(e)=>{setval(e.target.value)}} style={{height:"fit-content",marginTop:"10vh",height:"10vh",width:"35vw",fontSize:"50px"}}/>
        {/* <button  onClick={handleclick} style={{height:"fit-content",marginTop:"12vh",marginLeft:"1vw",fontSize:"5vh",cursor:"pointer"}}>Search</button> */}
    </div>
    <div style={{marginLeft:"20vw",fontSize:"3vw",display:"flex",justifyContent:"center",width:"35vw"}}>
        <ul style={{listStyle:"none"}}>
          {filteredItem.length===0?<li>NO RESULT FOUND</li>:filteredItem.map((item,key)=>{
            const itemLabel = typeof item === 'object' && item !== null
              ? item.question ?? item.answer ?? JSON.stringify(item)
              : item;

            return  <li key={key} style={{border:"solid red 1px"}}>{itemLabel}</li> 
          })}
        </ul>
    </div>
    </>
  )
}

export default Searchfnc
