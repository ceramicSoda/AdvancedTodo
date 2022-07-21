import GroupsSelector from './GroupsSelector'
import { useSelector } from 'react-redux'
import GroupsStats from './GroupsStats'
import './GroupsMenu.scss'

function GroupsMenu() {
    const curGroup = useSelector((state) => ("0" + (state.todo.curGroup+1)))
    return (
        <div className="cont">
            <h2 className='groupsMenu__title'>GROUP No{curGroup}</h2>
            <GroupsSelector/>
            <GroupsStats/>
        </div>
  )
}

export default GroupsMenu