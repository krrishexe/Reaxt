import React from 'react'
import glogo from "../Media/images/google.png"
import alogo from "../Media/images/apple.png"

function Login() {
  return (
    <>
    <div className='flex'>
     <div className='board'>
        <h1>Board.</h1>
    </div> 

    <div className='login'>
       
        <h2>Sign In</h2>
        <h3>Sign in to your account</h3>
        <div className='flex space'>
            <button href='/' className='glogo'>
                <img className='gap' src={glogo} alt="" height={"23px"} width={"23px"} /> <p className='para1'>Sign in with Google</p> 
            </button>
            <button className='glogo'>
                 <img className='gap' src={alogo} alt="" height={"15px"} width={"13px"} /> <p className='para1'>Sign in with Apple</p> 
            </button>
        </div>
        <div className="whitebg">
            <form action="">
                <label htmlFor="" >Email address</label>
                <input type="email" value={"johndoe@gmail.com"} />
                <label htmlFor="">Password</label>
                <input type="password" value={"helloworld"}/>
                
            </form>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Login
