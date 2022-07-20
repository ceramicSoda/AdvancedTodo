import './UserCard.scss'

function UserCard() {
  return (
    <div className="userCard__cont">
        <div className="userCard__profilePic">
        </div>
        <div className="userCard__profileInfo">
            <p className="userCard__username">Guest</p>
            <p className="userCard__fname"></p>
            <p className="userCard__sname"></p>
        </div>
    </div>
  )
}

export default UserCard