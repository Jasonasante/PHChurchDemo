import React, { useState } from 'react'
import './SignUp.css'
import { NavLink } from 'react-router-dom'
import InputImage from '../../components/InputImage/InputImage'

export const SignUp = () => {
  const [verifying, setVerifying] = useState(false)
  const [localImage, setLocalImage] = useState("")

  function handleRegistration(evt) {
    evt.preventDefault()
    const data = new FormData(evt.target);
    console.log(data)
    let values = Object.fromEntries(data.entries())
    values["avatar"] = localImage
    console.log({ values });
    console.log(localImage)
  }
  return (
    <section className='register-container'>
      <form onSubmit={handleRegistration}>
        <h1>Register Here</h1>
        <div className='form-inputs'>
          <div className='floating-form'>
            <label htmlFor="floating-first-name">First Name:</label>
            <input className='form-input' type="text" name="first-name" id="floating-first-name" placeholder='John' disabled={verifying} />
          </div>
          <div className='floating-form'>
            <label htmlFor="floating-last-name">Last Name:</label>
            <input className='form-input' type="text" name="last-name" id='floating-last-name' placeholder='Doe' disabled={verifying} />
          </div>
          <div className='floating-form'>
            <label htmlFor="floating-dob">Date Of Birth:</label>
            <input className='form-input' type="date" name="dob" id='floating-dob' placeholder='Date of Birth' disabled={verifying} />
          </div>
          <div className='floating-form'>
            <label htmlFor="floating-email">Email address:</label>
            <input className='form-input' type="email" name="email" placeholder='name@example.com' disabled={verifying} />
          </div>
          <InputImage setLocalImage={setLocalImage} />
          <div className='floating-form'>
            <label htmlFor="floating-username">Username:</label>
            <input className='form-input' type="text" name="username" id='floating-username' placeholder='Username' disabled={verifying} />
          </div>
          <div className='floating-form'>
            <label htmlFor="floating-password">Password:</label>
            <input className='form-input' type="password" name="password" id='floating-password' placeholder='Password' disabled={verifying} />
          </div>
        </div>
        <button className='form-button btn-primary' type="submit">Register</button>
        <p>Have An Account? Log in <NavLink to="/login" className="login-link"> Here</NavLink></p>
      </form>
    </section>
  )
}

export default SignUp
