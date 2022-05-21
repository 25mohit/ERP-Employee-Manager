import React, { useState } from 'react'
import './Form.css'
import { Login } from '../login/Login'
import { Registration } from '../registration/Registration'

export const Form = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegistration, setShowRegistration] = useState(false)
    
    const loginShow = () => {
        setShowLogin(true)
    }
    const registrationShow = () => {
        setShowRegistration(true)
    }

  return (
    <div className='form-div'>
            <div className="login-main-div1">
                    <button onClick={ loginShow } className='login-bt'>Login</button>
                    { showLogin && <Login setShowLogin = { setShowLogin }/> }
            </div>
            <div className="registration-main-div2">
                    <button onClick={ registrationShow } className='register-bt'>Register</button>
                    { showRegistration &&   <Registration setShowRegistration = { setShowRegistration } />  }
            </div>
    </div>
  )
}
