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
        tasks.map((item) => (<TodoItem key={item.id} id={item.id} title={item.title} done={item.done}/>))
      }
    </ul>
  )
}

export default TodoList