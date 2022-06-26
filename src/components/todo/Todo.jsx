import { useState } from 'react'
import './Todo.scss'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'

function Todo() {
  return (
    <div className="todo cont">
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Todo