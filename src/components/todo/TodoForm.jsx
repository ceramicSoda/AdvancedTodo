import { useState } from 'react'
import './TodoForm.scss'

function TodoForm() {
  return (
    <form className="todoForm">
        <input type="text" placeholder="add your task..."/>
        <input type="submit" value="add"/>
    </form>
  )
}

export default TodoForm