import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

export function Fun(props){ 
  const [currentCount,setCount] = useState(Math.floor(props.value));
  const timer = () => setCount(currentCount-1);
  useEffect(()=>{
    if(currentCount <= 0){
      return;
    }
    const id = setInterval(timer,1000);
    return () => clearInterval(id);
  },[currentCount]);
  return(
    <>
     {isNaN(Number(props.value)) ?  0 : currentCount}
   </>
  )   
}

const App = () => {
  
  const [newItem,setNewItem] = useState();
  const [trigger,setTrigger] = useState(0);
  const newItemChanged = (evt) =>{
		setNewItem(evt.target.value);
  }
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input
          id="timeCount" 
          onKeyDown={event => {
            if(event.keyCode == 13){
              setTrigger(trigger+1);
              };
            }
          }
          value={newItem}
          onChange={newItemChanged}
           /> sec.
        </h1>
      </div>
      <div id="current-time">{trigger != 0 ? <Fun key={trigger} value={newItem}/> : null}</div>
    </div>
  )
}


export default App;
