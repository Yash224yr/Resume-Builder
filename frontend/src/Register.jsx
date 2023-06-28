import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from "./images/logo.png"

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupmsg, setPopMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  
    if (name === '' || email === '' || username === '' || password === '') {
      setPopMsg('Please fill all details');
      setShowPopup(true);
      return;
    }
  
    axios
      .post('http://localhost:3000/register', {
        name: name,
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error)
          setPopMsg(response.data.error);
          setUserName("")
           // Display the error message
        } else {
          setPopMsg('Account created successfully!');
          setName('');
          setEmail('');
          setUserName('');
          setPassword('');
        }
        setShowPopup(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  return (
    <div className='register'>
      
      <div className='detail'>
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='text'
            name='username'
            placeholder='Enter Your Username'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type='password'
            name='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'>Register</button>
        </form>
        <div className='already'>
          <p>Already have an account?</p>
          <Link to='/login'>Login</Link>
        </div>
      </div>
      {showPopup && (
        <div className='popup'>
          <p>{popupmsg}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Register;
