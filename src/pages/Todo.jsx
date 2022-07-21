import { useState } from 'react'
import './Todo.scss'
import TodoForm from '../components/todo/TodoForm.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import GroupsMenu from '../components/groups/GroupsMenu'
import UserCard from '../components/userCard/UserCard'

function Todo() {
  const [tasks, setTasks] = useState([]); 

  return (
    <div className="todo cont">
        <div className="todo__cont">
          <TodoForm/>
          <TodoList/>
        </div>
        <div className="todo__stats">
          <UserCard/>
          <GroupsMenu/>
        </div>
    </div>
  )
}

export default Todo