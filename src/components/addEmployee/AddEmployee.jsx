import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddEmployee.css'

export const AddEmployee = () => {
    const [eName, setEName] = useState('')
    const [eFName, setEFName] = useState('')
    const [eMName, setEMName] = useState('')
    const [mobile, setMobile] = useState('')
    const [Bdate, setBDate] = useState('')
    const [designation, setDesignation] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [JDate, setJDate] = useState('')
    const [address, setAddress] = useState('')
    const [aadhar, setAadhar] = useState('')

    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()
        if(eName && salary){
            dispatch({
                type:'ADD_EMPLOYEES',
                payload:{
                    id: (new Date).getTime(),
                    date: new Date(),
                    eName, eFName, eMName, mobile, Bdate, designation, email, salary, JDate, address, aadhar
                }
            })
            alert('Success...')
        }else{
            alert('Error')
        }
    }
  return (
    <div className='add-employee-div'>
                    <div  className='form-div-employe'>
                                <h2>Enter Employee Details</h2>
                                <form action="">
                                        <input type="text" placeholder='Enter employee name' value={eName} onChange={ e => setEName(e.target.value)}/>
                                        <input type="text" placeholder='Enter fathers name' value={eFName} onChange={ e => setEFName(e.target.value)}/><br />
                                        <input type="text" placeholder='Enter mothers name' value={eMName} onChange={ e => setEMName(e.target.value)}/>
                                        <input type="number" placeholder='Enter mobile' value={mobile} onChange={ e => setMobile(e.target.value)}/><br />
                                        <input type="date" value={Bdate} max="2022-12-01" onChange={ e => setBDate(e.target.value)} required/>
                                        <input type="text" placeholder='Enter designation' value={designation} onChange={ e => setDesignation(e.target.value)}/><br />
                                        <input type="text" placeholder='Enter email id' value={email} onChange={ e => setEmail(e.target.value)}/>
                                        <input type="number" placeholder='Enter Salary' value={salary} onChange={ e => setSalary(e.target.value)}/><br />
                                        <input type="number" placeholder='Enter joining date' min='0' value={JDate} onChange={ e => setJDate(e.target.value)}/>
                                        <input type="text" placeholder='Enter aadhar no'  maxLength='12'  value={aadhar} onChange={ e => setAadhar(e.target.value)}/><br />
                                        <textarea placeholder='Enter your address' value={address} onChange={ e => setAddress(e.target.value)}/><br />
                                        <button onClick={ submitForm } className='submit-bt'>SUBMIT DATA</button>
                                </form>
                    </div>
    </div>
  )
}
