import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header' >
        <div className='logo'>
            <h1>Resume Builder</h1>
        </div>
        <div className='detail'>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Header