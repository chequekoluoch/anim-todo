import React from 'react'
import {v4 as uuidv4} from 'uuid'
const Form = ({ setInputText, todos, setTodos,inputText, setStatus }) => {
    
    
    const handleChange=(e)=>{
    
        setInputText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setTodos([...todos, {text: inputText, completed:false, id:uuidv4()}])
        setInputText("")
    }
    
    const statusHandler=(e)=>{
      console.log(e.target.value)
      setStatus(e.target.value)
    }

    return (
     
     <form >
      <input type="text" 
      value={inputText}
      className="todo-input" onChange={handleChange} />
      <button onClick={handleSubmit} className="todo-button" type="submit" >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
      
    )
}

export default Form
