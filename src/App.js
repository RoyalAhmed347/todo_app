import { useState } from 'react';
import './App.css';
import ListItems from './compunent/ListItems';

function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  
 
  const inputEvent = (e) =>{  
    setInputText(e.target.value)    
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      btnEvent()
    } 

  }

  const delItems = (id) =>{
    setListItem((oldData)=>{
      return(
      oldData.filter((cruntVal,index)=>{
        return index != id;
      })
    )
    })


  }

  const btnEvent = () =>{
    setListItem((e)=>{
      return(
        [
          ...e,inputText
        ]
        )
      })
    setInputText("")

  }

  return (
    <>
    <div className='mani_box'>
      <div className='box'>
        <input onChange={inputEvent} onKeyDown={handleKeyDown} value={inputText} placeholder='Write somthing hear...'/>
        <button onClick={btnEvent}>Add</button>
        <ul className='toListBox'>
          {listItem.map((item,index)=>{
            return(<ListItems
              text= {item}
              key= {index}
              id= {index}
              onSelect= {delItems}
            />
            )
          })}
        </ul>
      </div>
    </div> 
    </>
  );
}

export default App;
