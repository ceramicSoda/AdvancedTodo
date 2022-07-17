import { useState } from 'react'
import './Todo.scss'
import TodoForm from '../components/todo/TodoForm.jsx'
import TodoList from '../components/todo/TodoList.jsx'

function Todo() {
  const [tasks, setTasks] = useState([]); 

  return (
    <div className="todo">
        <div className="todo__cont cont">
          <TodoForm/>
        </div>
        <TodoList/>
    </div>
  )
}

export default Todo