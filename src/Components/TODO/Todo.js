import React, { useEffect, useEffectEvent, useState } from 'react'
function Todo() {
    const [Task,setTask]=useState("")
    const [Tasks,setTasks]=useState(()=>{
        const savedTask=localStorage.getItem("Tasks")
        return savedTask?JSON.parse(savedTask):[]
    });
    useEffect(()=>{
            localStorage.setItem("Tasks",JSON.stringify(Tasks))
    },[Tasks])
    const handlechange=(e)=>{
        setTask(e.target.value);
    }
    const handleclick=()=>{
        setTasks([...Tasks,Task])
    }
    const deletetask=(delindex)=>{
        const updatedList=Tasks.filter((Task,index)=>index!==delindex)
        setTasks(updatedList)
    }
  return (
    <>
    <div style={{height:"97vh"}}>
        <center>
            <p style={{fontSize:"80px",borderBottom:"solid black 3px",height:"fit-content",width:'fit-content',margin:0}}>TODO</p>
            <div style={{height:"80vh"}}>
                <div style={{marginTop:"15px"}}>
                <input value={Task} onChange={handlechange} placeholder="Write new Task" type="text" style={{marginRight:"10px"}} />
                <button onClick={handleclick}>Add Task</button>
                </div>
                <div style={{marginTop:"10px"}}>
                    {Tasks.map((item,index)=>{
                        return( <div style={{border:"solid grey 1px",width:"50%",marginBottom:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",borderRadius:"100px"}}>
                            <p>{index+1}) {item}</p>
                            <button onClick={()=>{deletetask(index)}} style={{height:"50%",padding:"8px",borderRadius:"100px",backgroundColor:'black',color:"white",border:"none"}}>Mark As Complete</button>

                        </div>)
                    })}
                </div>
            </div>
        </center>
    </div>
    </>
  )
}

export default Todo