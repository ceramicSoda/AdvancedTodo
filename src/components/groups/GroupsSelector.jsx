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
        <button onClick={ handleNewGroup }>New</button>
        <button onClick={ handlePrevGroup }>Prev</button>
        <button onClick={ handleNextGroup }>Next</button>
    </div>
  )
}

export default GroupsSelector