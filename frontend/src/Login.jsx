import React from 'react'

function Login() {
  return (
    <div className='login'>
        <div className='form'>
            <form>
                <input type="text" placeholder='Enter Username' />
                <input type="password" placeholder='Enter passwrod' />
                <button type='submit' ></button>
            </form>
        </div>
    </div>
  )
}
 
export default Login