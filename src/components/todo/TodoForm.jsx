import { useState } from 'react'
import './TodoForm.scss'

function TodoForm({ addTask }) {
  const [input, setInput] = useState('');
  const handleChange = (e) =>{setInput(e.currentTarget.value);}

  

  return (
    <form className="todoForm">
        <input className="todoForm__input" type="text" placeholder="add your task..." onChange={handleChange} value={input}/>
        <input className="todoForm__submit" type="submit" value="add"/>
    </form>
  )
}

export default TodoForm