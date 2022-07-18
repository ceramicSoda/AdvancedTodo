import { useDispatch } from 'react-redux'
import './TodoItem.scss'
import { removeTask } from "../../store/todoSlice"

function TodoItem({ id, title, done}) {
  const dispatch = useDispatch(); 

  const handleRemove = () => {
    dispatch(removeTask({id}))
  }
  
  return (
    <li className="todoItem"> 
      <p>{title}</p>
      <button onClick={handleRemove}>Remove</button>
    </li>
  )
}

export default TodoItem