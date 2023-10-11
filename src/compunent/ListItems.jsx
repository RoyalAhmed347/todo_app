import React, { useState } from 'react'
import './ListItems.css'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItems = ({text,id,onSelect}) => {
  const [done, setDone] = useState(false)

    const doneItem = () =>{
      setDone(!done)
      // alert("done");
    }
  return (
    <>
      <li id={id}>
        <p style={{textDecoration: done? "line-through" : "none"}} >{text}</p> 
        <div className='icon'>
        <DoneIcon className='fa' onClick={doneItem} />
        <DeleteIcon  className='fa' onClick={()=>{onSelect(id)}} />
        </div>
      </li>
    </>
  )
}

export default ListItems