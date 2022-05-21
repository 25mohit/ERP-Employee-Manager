import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Error } from '../error/Error'
import './Hero.css'

export const Hero = () => {
    const employees = useSelector(state => state.employees)
    const [showError, setShowError] = useState(false)

        const showMessage = () => {
                        setShowError(true)
        }

  return (
    <div className='hero-section-div'>
            <div className='left-hero'>
                        <div className="message">
                            <h1>Here you can add your Employee details, and get track of your and your employees most important Financial Data..</h1>
                            <p>Go to <strong><Link to='/addemployee'> Add Employee</Link></strong> section and start adding employe detail and many more.</p>
                        </div>
            </div>
            <div className='right-hero'>
                    <div className="h2-list">
                                        <h2>When you start adding employees, their list will be showing here !! </h2> 
                            {
                                    employees.map((employee, index) => <div className='emplo-list' key={employee.id}>
                                        <div className='list'>
                                                <div className="index">{index+1}</div>
                                                <div className="ename">{employee.eName}</div>
                                                <div className="salary"> {employee.salary && <p>₹ {employee.salary}</p>}</div>
                                        </div>
                                        <div>
                                                <div className="delete-bt"><button className='bt-delete' onClick={ showMessage }>DELETE</button></div>
                                        </div>
                                    </div>)
                            }
                    </div>
                    {showError && <Error setShowError = { setShowError } />}
                    
            </div>
    </div>
  )
}
