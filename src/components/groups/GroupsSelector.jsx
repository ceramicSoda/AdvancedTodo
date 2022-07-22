import './GroupsSelector.scss'
import { useDispatch } from 'react-redux'
import { addGroup, prevGroup, nextGroup } from "../../store/todoSlice"

function GroupsSelector() {
    const dispatch = useDispatch(); 
    
    const handleNewGroup = () => { dispatch(addGroup()); }
    const handleNextGroup = () => { dispatch(nextGroup()); }
    const handlePrevGroup = () => { dispatch(prevGroup()); }
  return (
    <div className="groupsSelector__cont">
        <button className='btn' onClick={ handleNewGroup }>new</button>
        <button className='btn' onClick={ handlePrevGroup }>prev</button>
        <button className='btn' onClick={ handleNextGroup }>next</button>
    </div>
  )
}

export default GroupsSelector