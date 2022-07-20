import './GroupsStats.scss'

function GroupsStats() {
  return (
    <div className="groupsStats__cont">
        <div className="groupsStats__completed">
            <p>12</p>
            <span>/</span>
            <p>20</p>
        </div>
        <div className="groupsStats__todo">
            <p>12 more to do</p>
        </div>
    </div>
  )
}

export default GroupsStats