import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import List from './List';
const ToDoList = () => {
  const [task,setTask]=useState("");
  const [newtask,setNewTask]=useState([]);
  const taskEvent=(event)=>{
    setTask(event.target.value); 
  }
  const listofTasks=()=>{
    setNewTask((prevValue)=>{
         return [...prevValue,task]
    });
    setTask(" ")

  }
  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" value={task} placeholder="Add a Task" onChange={taskEvent}></input>
        <Button className='newBtn' onClick={listofTasks}><AddIcon/></Button>
        <br/>
        <ol>
          {newtask.map((val,index)=>{
           return <List key={index} text={val}/>
          })}
        </ol>
      </div>
    </div>
  )
}

export default ToDoList;