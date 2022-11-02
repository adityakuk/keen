import { Avatar } from "@mui/material"
import './css/QuoraBox.css'

export const Quorabox = () => {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
      </div>
      <div className="quoraBox__quora">
        <h5>what is your Question or link</h5>
      </div>
    </div>
  )
}