import './LoginSignup.css'
import React from 'react'

const LoginSignup = ({loginShow,setLoginShow}) => {
  return (
    <div className={`login-signup ${loginShow ? '' : "hide-show"}`}>
        <h2>Login</h2>
        <input type="text" placeholder='Enter your name' />
        <input type="password" placeholder='Enter your password' />
        <input type="email" placeholder='Enter your email' />
        <p>Lost password? <span><a className="click" href='' >Click here</a></span></p>
        <div className="buttons">
            <button type='submit'>Login</button>
            <button type='submit'>Sign Up</button>
        </div>
        <div onClick={()=> setLoginShow(false)} className='exit'>Exit</div>
    </div>
  )
}

export default LoginSignup