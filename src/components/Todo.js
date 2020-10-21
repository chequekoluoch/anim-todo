import React from 'react'

const Todo = ({ text,todo, todos, setTodos}) => {
    const deleteItem=()=>{
        //console.log(id)
    setTodos(todos.filter(el=>el.id !== todo.id))
    }
    const toggleComplete=()=>{
    setTodos(todos.map((item)=>{
        if(item.id === todo.id){
            return{
                ...item, completed:!item.completed
            }
        }
        return item; 
    }))
    }
    return (
        <div className="todo">
         <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
         <button className="complete-btn" onClick={toggleComplete}><i className='fa fa-check'></i></button>
         <button className="trash-btn" onClick={deleteItem}><i className='fa fa-trash'></i></button>
        </div>
    )
}

export default Todo
