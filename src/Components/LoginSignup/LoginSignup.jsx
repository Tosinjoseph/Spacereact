import './LoginSignup.css'
import React, { useState } from 'react'

const LoginSignup = ({loginShow,setLoginShow}) => {
  const[loginChange, setLoginChange] =useState('Sign Up')
  return (
    <div className={`login-signup ${loginShow ? '' : "hide-show"}`}>
        <h2>{loginChange}</h2>
        {loginChange==='Login'? <div></div> : <input type="text" placeholder='Enter your name' required /> }
        <input type="password" placeholder='Enter your password' required/>
        <input type="email" placeholder='Enter your email' required/>
        {loginChange==="Sign Up"? <div></div> : <p>Lost password? <span><a className="click" href='' >Click here</a></span></p>}
        <div className="buttons">
            <button onClick={()=>setLoginChange('Login') } type='submit' className={loginChange==='Login' ? 'button login-grey' : 'button'}>Login</button>
            <button onClick={()=>setLoginChange('Sign Up') } type='submit' className={loginChange==='Sign Up' ? 'button login-grey' : 'button'}>Sign Up</button>
        </div>
        <div onClick={()=> setLoginShow(false)} className='exit'>Exit</div>
    </div>
  )
}

export default LoginSignup