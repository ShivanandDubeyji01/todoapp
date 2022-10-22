import React, { useState } from 'react'
import styles from './AddTodo.style'
export default function AddTodo({addTodo}) {
  let [todo,setTodo]=useState('')
  return (
    <div >
      <input style={styles.inputField} placeholder="Enter todo" onChange={(e)=>{
        setTodo(e.target.value);
      }}
      value={todo} 
      />
      <button style={styles.submitButton} onClick={()=>{
        addTodo(todo);
        setTodo("")
      }}
      >
        Add</button>
        
    </div>
  )
}
