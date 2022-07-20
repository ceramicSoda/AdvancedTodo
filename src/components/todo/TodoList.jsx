import { useSelector } from 'react-redux'
import './TodoList.scss'
import TodoItem from './TodoItem.jsx'

function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks)
  const group = 0 | useSelector((state) => state.curGroup)

  return (
    <ul className="todoList cont">
      {
        tasks[group].map((item) => (
          <TodoItem key={item.id} {...item}/>
        ))
      }
    </ul>
  )
}

export default TodoList