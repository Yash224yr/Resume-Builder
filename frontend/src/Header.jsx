import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Resumecontext } from './App';

function Header() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [userinfo, setUserinfo] = useState("");
  const { check, setCheck } = useContext(Resumecontext);

  useEffect(() => {
    if (localStorage.getItem("name") || check) {
      const name = localStorage.getItem("name");
      setUserinfo(name);
      setCheckLogin(true);
    } else {
      setUserinfo("");
    }
  }, [check]);

  function handleLogout() {
    localStorage.clear();
    setCheck(!check);
    window.location.reload();
  }

  return (
    <div className='header'>
      <div className="detail">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>
      <div className='login-done'>
        <ul>
          {checkLogin ? (
            <div className='log-out' >
              <h1>{userinfo}</h1>
              <button onClick={handleLogout}>Logout</button>
            </div>

          ) : (
            <div className='log-in'>
              <button><Link to="/register" >Register</Link></button>
              <button><Link to='/login'>Login</Link></button>

            </div>

          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
