import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./images/logo.png"
import { ResumeContext } from './App'


function Login() {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showPopup, setShowPopup] = useState(false);
  const [popupmsg, setPopMsg] = useState("");
  const  {check, setCheck} = useContext(ResumeContext)

  useEffect(()=>{
  },[])


  function handlerlogin(e) {
    e.preventDefault();

    if (username === "" || password === "") {
      setPopMsg("Please fil all the detail")
      setShowPopup(true);
      setUserName("")
      setPassword("")
      return;
    }

    axios
      .post("http://localhost:3000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        setUserName("")
        setPassword("")
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        axios
        .get(`http://localhost:3000/users?username=${username}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then((response) => {
          console.log(response.data);
          const name = response.data.name; // Access the name from the response data
          localStorage.setItem("name", name);
    localStorage.setItem("username", username)

          setCheck(!check);
        })
        .catch((err) => {
          console.log(err);
        });
      
      

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
          <input type="text" value={username} placeholder='Enter Username' onChange={(e) => { setUserName(e.target.value) }} />
          <input type="password" placeholder='Enter passwrod' value={password} onChange={(e) => { setPassword(e.target.value) }} />
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