import React from 'react'
import './RegisterError.css'

export const RegisterError = ({setShowError}) => {
    const closeMod = () => {
        setShowError(false)
    }
  return (
    <div className='register-error'>
        <button className="close-err-bt" onClick={closeMod}>X</button>
        <p className="error">Please fill all entries</p>
    </div>
  )
}
