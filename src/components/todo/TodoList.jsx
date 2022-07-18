import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TodoList.scss'
import TodoItem from './TodoItem.jsx'

function TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks)

  return (
    <ul className="todoList cont">
      {
        tasks.map((item) => (
          <TodoItem key={item.id} {...item}/>
        ))
      }
    </ul>
  )
}

export default TodoList