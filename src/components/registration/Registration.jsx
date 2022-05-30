import React, { useState } from 'react'
import './Registration.css'
import { useDispatch } from 'react-redux'
import { RegisterError } from '../errors/RegisterError'

export const Registration = ({ setShowRegistration }) => {
    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [showError, setShowError] = useState(false)

    const closeRegisModel = () => {
        setShowRegistration(false)
    }
    const dispatch = useDispatch()
    const register = () => {
                if(name && email && password && rePassword){
                        if(password.length>=7 && password === rePassword){
                                if(password != name){
                                        if(password.match(/[A-Z]/)){
                                                if(password.match(/[a-z]/)){
                                                        if(password.match(/[!\@\#\$\%\^\&\*\)\(\=\+\-\.\,\?\<\>\;\:\{\}\[\]\*]/)){
                                                                dispatch({
                                                                        type :"REGISTRATION",
                                                                        payload:{
                                                                                name, companyName, email, password, rePassword
                                                                        }
                                                                })
                                                                alert('Registered Successfully..')
                                                        }else{
                                                                alert('Password must contains at least 1 special charactors, ex- !, @, #, $, %, ^, &, ?, .')
                                                        }
                                                }else{
                                                        alert('Password must contains a Small Letter')
                                                }
                                }else{
                                        alert('Password must contains a Capital Letter')
                                }
                        }else{
                                alert("You cannot use your name as a Password..")
                        }
                }
                else{
                        alert('Password should be at least 7 digit and should be same.')
                }
        }
                else{
                        setShowError(true)
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
                                                <input type="text" className='input-fields' placeholder='enter your name' value={ name } onChange={ e => setName(e.target.value)}/><br />
                                                <input type="text" className='input-fields' placeholder='enter your company name'  value={ companyName } onChange={ e => setCompanyName(e.target.value)}/><br />
                                                <input type="email" className='input-fields' placeholder='enter your email' value={ email } onChange={ e => setEmail(e.target.value)} required/><br />
                                                <input type="password" className='input-fields' placeholder='enter your password'  value={ password } onChange={ e => setPassword(e.target.value)} required/><br />
                                                <input type="password" className='input-fields' placeholder='re-enter your password'  value={ rePassword } onChange={ e => setRePassword(e.target.value)} required/><br />
                                                {/* <span className="password-error">Password Error</span><br /> */}
                                                <button onClick={ register } className='register-bt'>Register</button>
                                        </div>
                            </div>
                    </div>
            </div>
           {showError && <RegisterError setShowError = { setShowError}/>} 
    </div>
  )
}