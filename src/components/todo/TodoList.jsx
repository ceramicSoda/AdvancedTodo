import { useSelector } from 'react-redux'
import './TodoList.scss'
import TodoItem from './TodoItem.jsx'

function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks)
  const curGroup = useSelector((state) => state.todo.curGroup)

  return (
    <ul className="todoList cont">
      {
        tasks[curGroup].map((item, index) => (
          <TodoItem key={item.id} {...item} index={index}/>
        ))
      }
    </ul>
  )
}

export default TodoList