import React from 'react'
import './Error.css'

export const Error = ({ setShowError }) => {
    setTimeout(() => {
        setShowError(false)
    }, 5000);
    const closeModel = () => {
        setShowError(false)
    }
  return (
    <div className='error-div'>
            <button className='close-model-bt' onClick={ closeModel }>X</button>
            <p className="message">You need to go to Employees List Section to delete Employee Data.</p>
    </div>
  )
}
