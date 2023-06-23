import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [username , setUserName] = useState("")
  const [password, setPassword] = useState("")


  function handlerlogin(e){
    e.preventDefault();
    axios.post("http://localhost:3000/login",{
      username : username,
      password : password
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='login'>
        <div className='form'>
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
    </div>
  )
}
 
export default Login