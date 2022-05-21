import React, { useState } from 'react'
import './Registration.css'
import { useDispatch } from 'react-redux'

export const Registration = ({ setShowRegistration }) => {
    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const closeRegisModel = () => {
        setShowRegistration(false)
    }
    const dispatch = useDispatch()
    const register = () => {
                if(password === rePassword){
                    dispatch({
                            type :"REGISTRATION",
                            payload:{
                                    name, companyName, email, password, rePassword
                                }
                        })
                        alert('Successfully Register')
                }
    }   
  return (
    <div className='registration-div-52'>
            <div className="container-register-52">
                    <div className="center-div-52">
                            <div className="header-register-52">
                                        <div>
                                                <button onClick={ closeRegisModel } className='close-model-bt'>X</button>
                                        </div>
                            </div>
                            <div action="" className="form-div-99">
                                        <div className="main-center">
                                                <input type="text" placeholder='enter your name' value={ name } onChange={ e => setName(e.target.value)}/><br />
                                                <input type="text" placeholder='enter your company name'  value={ companyName } onChange={ e => setCompanyName(e.target.value)}/><br />
                                                <input type="text" placeholder='enter your email' value={ email } onChange={ e => setEmail(e.target.value)} /><br />
                                                <input type="password" placeholder='enter your password'  value={ password } onChange={ e => setPassword(e.target.value)}/><br />
                                                <input type="password" placeholder='re-enter your password'  value={ rePassword } onChange={ e => setRePassword(e.target.value)}/><br />
                                                <button onClick={ register } className='register-bt'>Register</button>
                                        </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}
