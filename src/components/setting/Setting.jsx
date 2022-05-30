import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Setting.css'
 
export const Setting = () => {
    const users = useSelector(state => state.users)
    const [cPassword, setCPassword] = useState('')
    const [lock, setLock] = useState('')
    const [confirmLock, setConfirmLock] = useState('')
    const dispatch = useDispatch()

    const setPassword = (e) => {
        e.preventDefault()
       const passwordCheck =  users.find(user => user.password === cPassword)
       if(passwordCheck){
           if(lock && confirmLock){
               if(lock === confirmLock){
                   dispatch({
                       type:'SET_LOCK_PASSWORD',
                       payload: lock
                    })
                    alert('Password Added Successfully.')
                } else{
                    alert(`Password didn't matches`)
                }
            }else{
                alert('Password Fields must not be Empty..')
            }
       } else{
           alert(`Your current password didn't matches`)
       }
    }
  return (
    <div className='setting-div'>
            <h2>Settings Section</h2>
                <form action="" className='setting-form'>
                        <input type="password" placeholder='Enter your curent password' className='setting-text-input' value={ cPassword } onChange={ e => setCPassword(e.target.value)} /><br />
                        <input type="password" placeholder='Enter your LOCK password' className='setting-text-input' value={ lock } onChange={ e => setLock(e.target.value)} /><br />
                        <input type="password" placeholder='Re-confirm LOCK password' className='setting-text-input'  value={ confirmLock } onChange={ e => setConfirmLock(e.target.value)}/><br />
                        <button className='submit-bt' onClick={ setPassword }>SET PASSWORD</button>
                </form>
    </div>
  )
}
