import './TodoItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { removeTask, editTask, checkTask, applyEdit } from "../../store/todoSlice"
import { validateInput } from "../../common/validation"

function TodoItem({ id, title, done, editMode}) {
  const dispatch = useDispatch(); 
  const [value, setValue] = useState(title); 
  const taskTitle = useSelector((state) => state.tasks) 

  const handleRemove = () => {
    dispatch(removeTask({id}))
  }
  const handleEdit = () => {
    dispatch(editTask({id}))
  }
  const handleChange = (e) => {
    setValue(validateInput(e.target.value))
  }
  const handleApply = (e) => {
    dispatch(applyEdit({value, id}))
  }
  //<button onClick={handleEdit} visibility={editable ? "visible" : "hidden"}>Edit</button>
  return (
    <li className="todoItem"> 
      <input type="text" value={value} onChange={handleChange} disabled={!editMode}/>
      <div className="todoItem__btnGroup">
        <button onClick={handleEdit} style={{visibility: editMode ? 'hidden' : 'visible'}}>Edit</button>
        <button onClick={handleApply} style={{visibility: editMode ? 'visible' : 'hidden'}}>Apply</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </li>
  )
}

export default TodoItem