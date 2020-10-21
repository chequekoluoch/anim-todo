import React, { useState, useEffect} from 'react';

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [status, setStatus] = useState("all")


 useEffect(()=>{
   getLocalTodos()
 },[])

  useEffect(()=>{
  filteredHandler()
  saveLocalTodos()
  },[todos, status])
  
  const filteredHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed === true))
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed === false))
      break;
      default:
        setFilteredTodos(todos)
      break;
      }
  }

  //save to localstore
  const saveLocalTodos=()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>ANIMATED TODO LIST</h1>
      </header>
      <Form  
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setStatus={setStatus}
      setInputText={setInputText}
      
      />
      <TodoList 
      todos={todos} 
      filteredTodos={filteredTodos}
      setTodos={setTodos}/>
    </div>
  );
}

export default App;
