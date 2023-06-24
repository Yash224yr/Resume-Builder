import React from 'react'
import {Link} from "react-router-dom"
import Logo from "./images/logo.png"

function Header() {
  return (
    <div className='header' >
        <div className='detail'>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Header