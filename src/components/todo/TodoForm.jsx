import './TodoForm.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from "../../store/todoSlice"
import { validateInput } from "../../common/validation"

function TodoForm() {
  const [value, setValue] = useState(); 
  const dispatch = useDispatch();

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
                value={value || ""}
                onChange={handleChange} 
                placeholder="add your task..." />
        <input  className="todoForm__submit btn" 
                type="submit" 
                value="add"/>
    </form>
  )
}

export default TodoForm