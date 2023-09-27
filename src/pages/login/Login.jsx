import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  const [verifying, setVerifying] = useState(false)
  function handleLogin(evt) {
    evt.preventDefault()
    const data = new FormData(evt.target);
    console.log(data)
    const value = data.get('username-email');
    console.log({ value });
  }
  return (
    <section className='login-container'>
      <form onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <div className='form-inputs'>
          <div className='floating-form'>
            <label htmlFor="floating-username">Username:</label>
            <input className='form-input' type="text" name="username" id='floating-username' placeholder='Username' disabled={verifying} />
          </div>
          <div className='floating-form'>
            <label htmlFor="floating-password">Password:</label>
            <input className='form-input' type="password" name="password" id='floating-password' placeholder='Password' disabled={verifying} />
          </div>
        </div>
        <button className='form-button btn-primary' type="submit">Login</button>
        <p>Don't Have An Account? Register <NavLink to="/register" className="register-link"> Here</NavLink></p>
      </form>
    </section>
  )
}

export default Login
