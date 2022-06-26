import { useState } from 'react'
import './TodoForm.scss'

function TodoForm() {
  return (
    <form className="todoForm">
        
        <input className="todoForm__input" type="text" placeholder="add your task..."/>
        <input className="todoForm__submit" type="submit" value="add"/>
    </form>
  )
}

export default TodoForm