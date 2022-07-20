import { useSelector } from 'react-redux'
import './TodoList.scss'
import TodoItem from './TodoItem.jsx'

function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks)
  const curGroup = useSelector((state) => state.todo.curGroup)

  return (
    <ul className="todoList cont">
      {
        tasks[curGroup].map((item) => (
          <TodoItem key={item.id} {...item}/>
        ))
      }
    </ul>
  )
}

export default TodoList