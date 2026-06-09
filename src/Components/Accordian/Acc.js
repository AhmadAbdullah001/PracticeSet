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
      <div style={{border:"solid red 1px",height:"70vh"}}>
        {faqData.map((item,index)=>{
            return <div key={index} style={{border:"solid red 1px"}}>{item}</div>
        })}
      </div>
    </>
  )
}

export default Acc
