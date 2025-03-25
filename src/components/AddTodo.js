import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [text, setText] = useState("");
    const handleSubmit = (e)=>{
       e.preventDefault()
       if(!text.trim()) return;
       addTodo(text);
       setText("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='New task...'
            />
            <button type='submit'>Add</button>

        </form>
    </div>
  )
}
