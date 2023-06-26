import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [userinfo, setUserinfo] = useState("")

  useEffect(() => {

    if (localStorage.getItem("name")) {
      const name = localStorage.getItem("name")
      setUserinfo(name)
      setCheckLogin(!checkLogin)
    }
    else {
      setUserinfo("")
    }
  },[])




  return (
    <div className='header' style={{ justifyContent: checkLogin ? 'space-between' : 'center' }}>
      <div className="detail" >

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </div>
      {checkLogin && (
        <div className='login-done'>
          <h1>{userinfo}</h1>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}

export default Header;
