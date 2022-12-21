import { Avatar } from "@mui/material"
import { selectUser } from "../feature/userSlice";
import './css/QuoraBox.css'
import { useSelector } from "react-redux"

export const Quorabox = () => {
  const user = useSelector(selectUser)
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="quoraBox__quora">
        <h5>what is your Question or link</h5>
      </div>
    </div>
  )
}