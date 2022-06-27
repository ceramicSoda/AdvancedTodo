import { useState } from 'react'
import './TodoList.scss'
import TodoItem from './TodoItem.jsx'

function TodoList() {
  return (
    <ul className="todoList cont">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </ul>
  )
}

export default TodoList