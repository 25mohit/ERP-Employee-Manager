import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './LockModel.css'

export const LockModel = ({ setShowLockScreen }) => {
    const password = useSelector(state => state.lockPassword)
    const [ePassword, setEPassword] = useState('')
    const dispatch = useDispatch()

    const unlockProfile = (e) => {
        e.preventDefault()
        // const payload = 
        if(password === ePassword){
            // alert('success')
            setShowLockScreen(false)
        }
    }
  return (
    <div className='lockmodel-div'>
        <div className="container">
            <h1>Profile is Locked, Enter your <span>LOCK</span> Password</h1>
            <form action="" className="lock-model-div">
                <input type="text" placeholder='Enter LOCK Password' className='lock-field' value={ ePassword } onChange={ e => setEPassword(e.target.value)}/><br />
                <button className='enter-bt' onClick={ unlockProfile }>ENTER</button>
            </form>
        </div>
    </div>
  )
}
