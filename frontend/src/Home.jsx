import React from 'react'
import {Link} from "react-router-dom"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Logo from "./images/logo.png"


function Home() {
  return (
    <div className='homepage'>
      <div className='home' >
          <div className='logo'> 
            <img src={Logo} alt="" />
          </div>
        <h1>Create Your <span>Professional Resume</span>  with Ease</h1>
        <p>Build a standout resume that opens doors to opportunities. Our intuitive resume builder empowers you to effortlessly craft a personalized and professional resume that showcases your unique skills, experience, and achievements.</p>
        <button><Link to="/register" ><span>Get Started <ArrowRightIcon/></span> </Link></button>
      </div>
      <div className='images' >
      </div>
    </div>
  )
}

export default Home 