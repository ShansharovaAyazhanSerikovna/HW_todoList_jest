import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), text, completed: false}])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo)=>(todo.id === id ? {...todo, completed: !todo.completed}:todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Жасалу керек тізімдер</h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
     
    </div>
  );
}

export default App;
