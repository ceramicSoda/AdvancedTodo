import { useState } from 'react'
import './TodoItem.scss'

function TodoItem() {
  return (
    <li className="todoItem">
      <p>Your task! </p>
      <button>Remove</button>
    </li>
  )
}

export default TodoItem