import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/register', {
        name: name,
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setShowPopup(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setName('');
    setEmail('');
    setUserName('');
    setPassword('');
  }

  return (
    <div className='register'>
      <div className='detail'>
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
          <p>Account created successfully!</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Register;
