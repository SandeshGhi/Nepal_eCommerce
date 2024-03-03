import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email Address'/>
          <input type="password" placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have An Account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup