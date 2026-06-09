import React, { useState } from 'react'

function Tabs() {
    const [activeTab,setActiveTab]=useState("Home")
    const Tabs=[
        {
            TabName:"Home",
            TabContent:"This is the Home Page",
        },
          {  TabName:"About",
            TabContent:"This is the About Page",
          },
          {
            TabName:"Contact",
            TabContent:"This is the Contact Page",
        }
    ]
  return (
    <>
     <ul style={{listStyle:"none",display:"flex",width:"98%",justifyContent:"space-around",backgroundColor:"gray"}}>
        {Tabs.map((Tab)=>{
            return <li onClick={()=>{setActiveTab(Tab.TabName)}} style={{fontSize:"100px",color:activeTab===Tab.TabName?"red":"white",cursor:"pointer"}}>{Tab.TabName}</li>   
        })}
     </ul> 
        <div>
            {Tabs.map((Tab)=>{
                return(activeTab===Tab.TabName && <center><h1 style={{fontSize:"8vw"}}>{Tab.TabContent}</h1></center>)
            })}
            {/* {activeTab==="About" &&<center><h1 style={{fontSize:"8vw"}}>This is the About Page</h1></center>} */}
            {/* {activeTab==="Contact" &&<center><h1 style={{fontSize:"8vw"}}>This is the Contact Page</h1></center>} */}
        </div>
    </>
  )
}

export default Tabs
