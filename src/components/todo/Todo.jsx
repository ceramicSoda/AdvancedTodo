import { useState } from 'react'
import './Todo.scss'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'

function Todo() {
  return (
    <div className="todo">
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Todo