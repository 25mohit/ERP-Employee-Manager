import React, { useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileModel } from '../profileModel/ProfileModel'

export const Profile = () => {
    const user = useSelector(state => state.loggedInUser)

    const [showProfile, setShowProfile] = useState(false)

    const profileDate = useSelector(state => state.profileDate)

    const editProfile = (e) => {
      e.preventDefault()
      setShowProfile(true)
    }
    
  return (
    <div className='profile-main-div'>
            <form action="">
                    <div className="single-line-div">
                                <label htmlFor="">Name :</label>
                                <p className="user-name">{ user && user.name }</p>
                    </div>
                    <div className="single-line-div">
                                <label htmlFor="">Company Name :</label>
                                <p className="user-name">{ user && user.companyName }</p>
                    </div>
                    <div className="single-line-div">
                                <label htmlFor="">Email :</label>
                                <p className="user-name">{ user && user.email }</p>
                    </div>
                    <div className="single-line-div">
                                <label htmlFor="">Mobile :</label>
                                <p className="user-name">  {profileDate.mobileNo ? profileDate.mobileNo : <p>empty</p>} </p>
                    </div>
                    <div className="single-line-div">
                                <label htmlFor="">GST No :</label>
                                <p className="user-name">{ profileDate.gstNo ? profileDate.gstNo : <p>empty</p>} </p>
                    </div>
                    <div className="single-line-div">
                                <label htmlFor="">Address :</label>
                                <p className="user-name">
                                  { profileDate.addressOne ? <p>{profileDate.addressOne} ,</p> : <p>empty</p>}
                                  { profileDate.addressTwo && profileDate.addressTwo }
                                </p>
                    </div>
                    <button className='submit-bt' onClick={ editProfile }>EDIT</button>
                    {
                      showProfile && <ProfileModel setShowProfile = { setShowProfile }/>
                    }
            </form>
    </div>
  )
}
