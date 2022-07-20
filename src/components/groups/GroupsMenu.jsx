import { GroupsSelector } from './GroupsSelector'
import { GroupsStats } from './GroupsStats'
import './GroupsMenu.scss'

function GroupsMenu() {
  return (
    <div className="cont">
        <GroupsSelector></GroupsSelector>
        <GroupsStats></GroupsStats>
    </div>
  )
}

export default GroupsMenu