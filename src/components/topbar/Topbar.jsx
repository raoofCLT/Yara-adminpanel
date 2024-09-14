import React from 'react'
import "./topbar.css"
import { Language, NotificationsNone, Settings } from '@mui/icons-material'


export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
            <img className="logo" src="https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg?t=st=1726119366~exp=1726122966~hmac=93b8e8b0bdb37d5337bb1f6965d1fc80a596e67b76d411bddae6e012264e93c8&w=740" alt="logo" />
            <span>ara</span>
        </div>
        <div className='topRight'>
            <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language/>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
            </div>
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356&semt=ais_hybrid" alt="" className='topAvatar'/>
        </div>
      </div>
    </div>
  )
}
