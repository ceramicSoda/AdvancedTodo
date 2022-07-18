import { useDispatch } from 'react-redux'
import './TodoItem.scss'
import { removeTask, editTask } from "../../store/todoSlice"

function TodoItem({ id, title, done, editMode}) {
  const dispatch = useDispatch(); 

  const handleRemove = () => {
    dispatch(removeTask({id}))
  }
  const handleEdit = () => {
    dispatch(editTask({id}))
  }
  //<button onClick={handleEdit} visibility={editable ? "visible" : "hidden"}>Edit</button>
  return (
    <li className="todoItem"> 
      <input type="text" value={title} disabled={!editMode}/>
      <div className="todoItem__btnGroup">
        
        <button onClick={handleEdit} style={{visibility: editMode ? 'hidden' : 'visible'}}>Edit</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </li>
  )
}

export default TodoItem