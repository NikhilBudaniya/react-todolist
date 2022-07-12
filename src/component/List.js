import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const List = (props) => {
    const [line,setLine]=useState(false)
    const done=()=>{
        setLine(true);
    }
  return (
  <div className="todo_style">
    <span onClick={done}><DeleteIcon className="deleteIcon"/></span>
    <li style={{textDecoration:line ?'line-through':"none"}}>{props.text}</li>
  </div>
  )
}

export default List;