import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'

export const Login = ({ setShowLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const users = useSelector(state => state.users)
    const closeModel = () => {
        setShowLogin(false)
    }
    const dispatch = useDispatch()

    const login = () => {
            const payload =  users.find(user => user.email === email && user.password === password)
            if(payload){
                dispatch({
                    type:'LOGIN_USER',
                    payload
                })
                alert("Successfully Login")
            } else{
                alert('Please enter email and password.')
            }
        
    }
  return (
    <div className='login-div'>
                <div className="container-login">
                    <div className="center-div-51">
                            <div className="header-login">
                                <div>
                                        <button onClick={ closeModel } className='close-model-bt'>X</button>
                                </div>
                            </div>
                            <div className="form-div-login">
                                <div className="main-center-login-1">
                                    <input type="text" placeholder='enter your email' value={ email } onChange={ e => setEmail(e.target.value)}/><br />
                                    <input type="password" placeholder='enter your password' value={ password } onChange={ e => setPassword(e.target.value)}/><br />
                                    <button onClick={ login } className='login-bt'>Login</button>
                                </div>

                            </div>
                    </div>
                </div>
    </div>
  )
}
