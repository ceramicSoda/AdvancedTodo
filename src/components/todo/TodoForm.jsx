import { useState } from 'react'
import './TodoForm.scss'
import { useDispatch } from 'react-redux'
import { addTask } from "../../store/todoSlice"

function TodoForm() {
  const [value, setValue] = useState(); 
  const dispatch = useDispatch();

  const validateInput = (value) => {
    return(value.replace(/[^.\w\s\.\,()&*?+=!-]/gi, "").substring(0, 72))
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (value) {
      dispatch(addTask({title: validateInput(value)}));
      setValue("")
    }
  }
  const handleChange = (e) => {
    setValue(validateInput(e.target.value))
  }

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