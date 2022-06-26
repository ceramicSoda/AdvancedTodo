import { useState } from 'react'
import './Todo.scss'
import TodoForm from '../components/todo/TodoForm.jsx'
import TodoList from '../components/todo/TodoList.jsx'

function Todo() {
  return (
    <div className="todo cont">
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Todo