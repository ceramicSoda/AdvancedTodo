import './TodoItem.scss'
import { removeTask, editTask, checkTask, applyEdit, cancelEdit } from "../../store/todoSlice"
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateInput } from "../../common/validation"

function TodoItem({ id, title, done, editMode}) {
  const dispatch = useDispatch(); 
  const [value, setValue] = useState(title); 
  const inputRef = useRef(null)
  let titleBuffer = title;

  const handleChange = (e) => {
    setValue(validateInput(e.target.value))
  }
  const handleRemove = () => {
    dispatch(removeTask({id}))
  }
  const handleEdit = () => {
    titleBuffer = value; 
    inputRef.current.disabled = false; 
    inputRef.current.focus();
    dispatch(editTask({id}))
  }
  const handleApply = () => {
    dispatch(applyEdit({value, id}))
  }
  const handleBlur = () => {
    setValue(titleBuffer)
    dispatch(cancelEdit())
  }
  const handleInputKeys = (e) => {
    if (e.key === "Enter") {
      handleApply(); 
    } else 
    if (e.key === "Escape"){
      handleBlur(); 
    }
  }

  return (
    <li className="todoItem"> 
      <input  type="text"
              value={value} 
              ref={inputRef}
              onBlur={handleBlur}
              disabled={!editMode}
              onChange={handleChange} 
              onKeyUp={handleInputKeys}/>
      <div className="todoItem__btnGroup">
        <button onClick={handleEdit} 
                style={{visibility: editMode ? 'hidden' : 'visible'}}>Edit</button>
        <button onClick={handleApply} 
                style={{visibility: editMode ? 'visible' : 'hidden'}}>Apply</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </li>
  )
}

export default TodoItem