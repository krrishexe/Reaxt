import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function Register() {

  const [values,setValues] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  
  const handleChange = (e) => {
    setValues({...values , [e.target.name]:e.target.value});
    console.log(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleValidation()
  }

  const handleValidation = () => {
    const {password,confirmPassword,email,username} = values;

    if(password !== confirmPassword){
      toast.error('Password and confirm password do not match',{
        position:'bottom-right',
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:'dark'
      })
    }    
  }

  return (
    <>
      <div style={{ backgroundColor: '#131234' }} className='h-screen w-screen flex flex-col justify-center gap-1 items-center '>
        <form style={{ backgroundColor: '#00000076' }} className='flex flex-col gap-8 rounded-3xl px-20 py-12' onSubmit={handleSubmit}>

          <div className=" rounded-lg brand flex items-center gap-4 justify-center">
            <img className='h-10' src={logo} alt="" />
            <h1 className='text-white uppercase'>Chatty</h1>
          </div>

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='text' type="text" placeholder='username' onChange={handleChange} />

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='email' type="email" placeholder='Email' onChange={handleChange} />

          <input  className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='password' type="password" placeholder='Enter password' onChange={handleChange} />

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='confirmPassword' type="password" placeholder='Confirm password' onChange={handleChange} />

          <button className='text-white bg-violet-500 px-8 py-4 border-none font-bold text-lg cursor-pointer rounded-sm uppercase hover:bg-violet-400 transition-colors duration-200' type='submit'>Create User</button>

          <span className='text-white uppercase'>Already have an account ? <Link className='text-violet-700 no-underline font-bold' to="/login">Login</Link> </span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
