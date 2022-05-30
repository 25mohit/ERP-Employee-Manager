import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './ProfileModel.css'

export const ProfileModel = ({ setShowProfile }) => {

    const [mobileNo, setMobileNo] = useState('')
    const [gstNo, setGstNo] = useState('')
    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')

    const dispatch = useDispatch()

    const submitProfile = (e) => {
        e.preventDefault()
        if(mobileNo || gstNo || addressOne || addressTwo ){
            dispatch({
                type: 'UPDATE_PROFILE',
                payload: {
                    mobileNo , gstNo, addressOne, addressTwo
                }
            })
            setShowProfile(false)
        }
    }
    const closeBt = () => {
        setShowProfile(false)
    }
  return ( 
    <div className='profile-model'>
                    <div className="container">
                            <form action="">
                                <div className="header">
                                        <h2>Update Profile</h2>
                                        <button className='closeBt' onClick={ closeBt }>X</button>
                                </div>
                                <input type="number" placeholder='Enter Mobile No.' className='profile-text-input'  value={ mobileNo } onChange={ e => setMobileNo(e.target.value)}/><br />
                                <input type="text" placeholder='Enter GST No..' className='profile-text-input'  value={ gstNo } onChange={ e => setGstNo(e.target.value)} /><br /> 
                                <input type="text" placeholder='Address Line 1' className='profile-text-input'  value={ addressOne } onChange={ e => setAddressOne(e.target.value)} /><br />
                                <input type="text" placeholder='Address Line 2' className='profile-text-input'   value={ addressTwo } onChange={ e => setAddressTwo(e.target.value)}/><br />
                            <button onClick={ submitProfile } className='submitBt'>SUBMIT</button>
                            </form>
                    </div>
    </div>
  )
}
