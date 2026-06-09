import React, { useState } from 'react'

function Acc() {
   const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library."
    },
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a programming language."
    },
    {
      question: "What is Node.js?",
      answer: "Node.js is a runtime environment."
    }
  ];
  const [openindex,setopenindex]=useState(null)
  const handleclick=(index)=>{
    if(openindex===index)
        setopenindex(null)
    else
        setopenindex(index)
  }
  return (
    <>
      <div style={{border:"solid red 1px",height:"70vh",display:"flex",alignItems:'center',flexDirection:"column"}}>
        <h1>FAQ</h1>
            <div style={{display:"flex",width:"50vw",flexDirection:"column",justifyContent:"space-between"}}>
              {faqData.map((item,index)=>{
          return (
          <>
          <div onClick={()=>{handleclick(index)}} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p style={{marginLeft:"10px",fontWeight:openindex===index?'bold':'lighter'}}>{index+1}) {item.question}</p>
              <button style={{height:"max-content"}}>{openindex===index?"close":"open"}</button>
              </div>
              <p style={{marginLeft:"30px",display:openindex===index?"block":"none"}}>{item.answer}</p>
            </>)
            })}
            </div>
      </div>
    </>
  )
}

export default Acc
