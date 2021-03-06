import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AboutMe } from '../aboueMe/AboutMe'
import './Footer.css' 

export const Footer = () => {
    const [showMe, setShowMe] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const logout = () => {
                dispatch({
                        type: "LOGOUT_USER"
                })
                navigate('/')
        }
    const showAboutMe = () => {
        setShowMe(true)
    }
  return (
    <div className='footer-main-div'>
            <div className='subscribtion-div'>
                    <h2>Subscribe for more..</h2>
                    <input type="text" placeholder='Enter your email' />
                    <button className="subscribe">SUBSCRIBE</button>
            </div>
            <div className='footer-links'>
                        <div className="footer-links-colum-1">
                                <p className='heading-p'>Quick Links</p>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/addemployee'>Add Employee</Link></li>
                                    <li><Link to='/employeelist'>Employee List</Link></li>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/settings'>Setting</Link></li>
                                    <li onClick={logout}>Logout</li>
                                </ul>
                        </div>
                        <div className="footer-links-colum-2">
                                <p className='heading-p'>Social Media</p>
                                        <ul>
                                            <li><a href='https://github.com/25mohit' target='_blank'>GitHub</a></li>
                                            <li><a href='https://www.linkedin.com/in/agarwal24/' target='_blank'>Linkedin</a></li>
                                            <li><a href='https://www.instagram.com/im_hit_/' target='_blank'>Instagram</a></li>
                                            <li><a href='https://www.facebook.com/mohit724agarwal' target='_blank'>Facebook</a></li>
                                            <li><a href='https://twitter.com/mo_hit24' target='_blank'>Twitter</a></li>
                                        </ul>
                        </div>
                        <div className="footer-links-colum-3">
                                    <p className='heading-p'>About Me</p>
                                            <ul>
                                                    <li onClick={ showAboutMe }>Who am i ?</li>
                                            </ul>
                        </div>
                        {showMe && <AboutMe setShowMe = { setShowMe }/>}
                        
            </div>
    </div>
  )
}
