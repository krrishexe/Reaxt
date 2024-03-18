import React,{useState} from 'react'
import glogo from "../Media/images/google.png"
import alogo from "../Media/images/apple.png"
import { useAuth0 } from '@auth0/auth0-react'



function Login() {
    const [name,setName] = useState("johndoe@gmail.com")
    const [name1,setName1] = useState("hello123")

    const { loginWithRedirect } = useAuth0();
    const { logout,isAuthenticated } = useAuth0();


  return (
    <>
    <div className='flex'>
     <div className='board'>
        <h1>Board.</h1>
    </div> 

    <div className='login'>
       <div>
        <h2>Sign In</h2>
        <h3>Sign in to your account</h3>
        <div className='flex space'>
           
            {
                isAuthenticated ? 
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button> : 
              <button className='glogo' onClick={() => loginWithRedirect()}> <img src={glogo} alt="" height={"23px"} width={"23px"} /> <p className='para1'>Sign in with Google</p> </button>
            }
                x
            
            <button className='glogo'>
                 <img  src={alogo} alt="" height={"15px"} width={"13px"} /> <p className='para1'>Sign in with Apple</p> 
            </button>
       </div>
        </div>
        <div className="whitebg">
            <form action="">
                <label htmlFor="" >Email address</label>
                <input onChange={(e) => setName(e.target.value)} type="email" value={name} />
                <label htmlFor="">Password</label>
                <input onChange={(e) => setName1(e.target.value)} type="password" value={name1}/>

                <a href='#'>Forgot Password?</a>

                <button onClick={() => loginWithRedirect()} className='btn' type='submit'>Sign In</button>
            </form>
        </div>
        <p className='account'>Don’t have an account? <a href="#">Register here</a></p>        
       
        
    </div>
    </div>
    </>
  )
}

export default Login


