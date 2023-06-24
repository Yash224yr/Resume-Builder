import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./images/logo.png"


function Login() {

  const [username , setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showPopup, setShowPopup] = useState(false);
  const [popupmsg, setPopMsg] = useState("");




  function handlerlogin(e) {
    e.preventDefault();

    if(username==="" || password=== ""){
      setPopMsg("Please fil all the detail")
      setShowPopup(true);
      return;
    }

    axios
      .post("http://localhost:3000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token); // Save the token to localStorage
      })
      .catch((err) => {
        setPopMsg("User Not Found")
        setShowPopup(true)
        console.log(err);
      });
  }

  return (
    <div className='login'>
        <div className='form'>
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>
            <form onSubmit={handlerlogin}>
                <input type="text"  value={username} placeholder='Enter Username' onChange={(e)=>{setUserName(e.target.value)}} />
                <input type="password" placeholder='Enter passwrod' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type='submit'>Login</button>
            </form>
          <div className='sign-up'>
            <p>Don't have an account ? </p>
            <Link to="/register" >Register Here </Link>
          </div>
        </div>
        {showPopup && (
        <div className='popup'>
          <p>{popupmsg}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  )
}
 
export default Login