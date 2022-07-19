import './TodoItem.scss'
import { removeTask, editTask, checkTask, applyEdit, cancelEdit } from "../../store/todoSlice"
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateInput } from "../../common/validation"

function TodoItem({ id, title, done, editMode}) {
  const dispatch = useDispatch(); 
  const [value, setValue] = useState(title); 
  const stateTitle = useSelector((state) => state.tasks) 
  const inputRef = useRef(null)
  let valueBuffer = title; 

  const handleRemove = () => {
    dispatch(removeTask({id}))
  }
  const handleEdit = () => {
    inputRef.current.disabled = false; 
    inputRef.current.focus();
    dispatch(editTask({id}))
  }
  const handleChange = (e) => {
    setValue(validateInput(e.target.value))
  }
  const handleApply = (e) => {
    dispatch(applyEdit({value, id}))
  }
  const handleBlur = (e) => {
    setValue(stateTitle)
    dispatch(cancelEdit())
  }
  return (
    <li className="todoItem"> 
      <input  type="text" 
              ref={inputRef}
              value={value} 
              onChange={handleChange} 
              onBlur={handleBlur}
              disabled={!editMode}
              />
      <div className="todoItem__btnGroup">
        <button onClick={handleEdit} style={{visibility: editMode ? 'hidden' : 'visible'}}>Edit</button>
        <button onClick={handleApply} style={{visibility: editMode ? 'visible' : 'hidden'}}>Apply</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </li>
  )
}

export default TodoItem