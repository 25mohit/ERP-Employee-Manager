import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCard } from '../deleteCard/DeleteCard'
import './EmployeList.css'

export const EmployeList = () => {

  const employees = useSelector(state => state.employees)
  const[showDelete, setShowDelete] = useState(false)
  const show = (id) => {
    setShowDelete(true)
    console.log(id)
  }
  // const names = () => {
  //   return( employees.map(employee => employee.eName))
  // }
  // const [filteredName, setFilteredName] = useState(names())
  // const filter = (e) => {
  //   setFilteredName([...names()].filter(name => name.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0))
  // }

  

  // const [showDetail, setShowDetail] = useState(false)

  // const transToDetail = (eName) => {
  //   navigate('/employe-detail');
  //   console.log(eName);
  // }

  return (
    <div className='employee-list-m-div'>
      <h2 className='h2-heading'>Employees Detailed List</h2>
      <p className="responsive-text">This section of this app is best viewable on big screen devices.</p>
          <div className="list-div">
            {/* <input type="text"
            onChange={ filter } 
            /> */}
            {/* {
            filteredName.map((name, index) => <p >{index+1} &nbsp;&nbsp;&nbsp;{name}</p>)
            } */}
            {/* {
              filteredCoiuntries.map((country, index) => <div key={(new Date).getTime()+index}>{ country }</div>)
            } */}
              {
                  employees.map((employe, index) => <div key={employe.id} className='main-list-emp-div'>
                      <div className="jestify-div">
                          <div className='emp-id'>{index+1}</div>
                          <div className='emp-name'>{employe.eName}</div>
                          <div className='emp-id'>{employe.eFName}</div>
                          <div className='emp-id'>{employe.eMName}</div>
                          <div className='emp-id'>{employe.mobile}</div>
                          <div className='emp-id'>{employe.Bdate}</div>
                          <div className='emp-manager'>{employe.designation}</div>
                          <div className='emp-id'>{employe.email}</div>
                          <div className='emp-salary'>{employe.salary}</div>
                          <div className='emp-id'>{employe.JDate}</div>
                          <div className='emp-id'>{employe.address}</div>
                          <div className='emp-id'>{employe.aadhar}</div>
                      </div>
                      <div className="delete-bt-emp-list">
                              {/* <button className="bt-delete" onClick={ () => {deleteEmp(employe.id)} }>DELETE</button> */}
                              <button className="bt-delete" onClick={() => { show(employe.id)} }>DELETE</button>
                      {showDelete && <DeleteCard  setShowDelete={setShowDelete} id={employe.id}/>}
                      </div>
                    </div>
                    )
                  }           
          </div>
    </div>
  )
}
