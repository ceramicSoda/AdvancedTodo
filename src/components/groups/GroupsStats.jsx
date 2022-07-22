import { useSelector } from 'react-redux'
import './GroupsStats.scss'

function GroupsStats() {
  const curGroup = useSelector((state) => (state.todo.curGroup))
  const tasksAll = useSelector((state) => state.todo.tasks[curGroup].length)
  const tasksDone = useSelector((state) => state.todo.tasks[curGroup].length) 
  return (
    <div className="groupsStats__cont">
        <div className="groupsStats__completed">
          <h1>{tasksAll}<span>/</span>{tasksDone}</h1>
        </div>
        <div className="groupsStats__todo">
            <p>12 more to do</p>
        </div>
    </div>
  )
}

export default GroupsStats