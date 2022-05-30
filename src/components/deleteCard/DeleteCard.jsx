import React from 'react'
import { useDispatch } from 'react-redux'
import './DeleteCard.css'
 
export const DeleteCard = ({setShowDelete, id}) => {
    const closeModel = () => {
        setShowDelete(false)
    }
    
  const dispatch = useDispatch()

    const deleteEmp = () => {
        dispatch({
          type:"DELETE_EMPLOYEE",
          payload:id
        })
        setShowDelete(false)
      }
  return (
    <div className='delete-card-main-div'>
        <div className="container">
                <h1>Are u sure ?</h1>
                <div className="bts">
                    <button className="cancel" onClick={ closeModel }>Cancel</button>
                    <button className="approve" onClick={ deleteEmp }>Delete</button>
                </div>
        </div>
    </div>
  )
}
