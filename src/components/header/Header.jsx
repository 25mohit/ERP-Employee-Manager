import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  var time = new Date().toLocaleTimeString()
  const [cTime, setCTime] = useState(time)
  
  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCTime(time)
  }
  setInterval(
      updateTime
  , 1000);
    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch({
            type:'LOGOUT_USER'
        })
    }
  return (
    <div className='header-div'>
          <div className="links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/employeelist'>Employees List</Link></li>
                    <li><Link to='/addemployee'>Add Employees</Link></li>
                    <li>Profile</li>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>
          </div>
          <div className="logout-bt-div">
                <div className='time-and-bt'>
                        <p className="time">{cTime}</p>
                </div>
                <button className="logout-bt" onClick={ logoutUser }>Logout</button>
          </div>
    </div>
  )
}
