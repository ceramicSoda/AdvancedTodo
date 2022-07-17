import { useState } from 'react'
import './TodoForm.scss'
import { useDispatch } from 'react-redux'
import { addTask } from "../../store/todoSlice"

function TodoForm() {
  const [value, setValue] = useState(); 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(addTask({title: value}));
    setValue("")
  }
  const handleChange = (e) => {setValue(e.target.value)}
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
        <input  className="todoForm__input" 
                type="text" 
                placeholder="add your task..." 
                onChange={handleChange} 
                value={value || ""}/>
        <input  className="todoForm__submit" 
                type="submit" 
                value="add"/>
    </form>
  )
}

export default TodoForm