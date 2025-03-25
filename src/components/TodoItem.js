import React from 'react'

export default function TodoItem({todo, toggleTodo, deleteTodo}) { 
  return (
    <div>
        <li>
            <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
            <span style={{textDecoration: todo.completed?"line-through":"none"}}>{todo.text}</span>
            <button onClick={()=>deleteTodo(todo.id)}>Жою</button>
        </li>
    </div>
  )
}
