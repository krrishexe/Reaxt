import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {useFormik} from 'formik'

function Register() {

  const initialValues = {
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  }

  const {values ,errors,touched , handleChange , handleSubmit ,handleBlur} = useFormik({
    initialValues:initialValues,
    // validationSchema:"",
    onSubmit:(values,action)=>{
      console.log(values)
      action.resetForm()
    }

  })
  

  console.log(values)
  // const handleValidation = () => {
  //   const {password,confirmPassword,email,username} = values;

  //   if(password !== confirmPassword){
  //     toast.error('Password and confirm password do not match',{
  //       position:'bottom-right',
  //       autoClose:8000,
  //       pauseOnHover:true,
  //       draggable:true,
  //       theme:'dark'
  //     })
  //   }    
  // }

  return (
    <>
      <div style={{ backgroundColor: '#131234' }} className='h-screen w-screen flex flex-col justify-center gap-1 items-center '>
        <form style={{ backgroundColor: '#00000076' }} className='flex flex-col gap-8 rounded-3xl px-20 py-12' onSubmit={handleSubmit}>

          <div className=" rounded-lg brand flex items-center gap-4 justify-center">
            <img className='h-10' src={logo} alt="" />
            <h1 className='text-white uppercase'>Chatty</h1>
          </div>

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='username' type="text" placeholder='username' value={values.username} onBlur={handleBlur} onChange={handleChange} />

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='email' type="email" placeholder='Email' value={values.email} onBlur={handleBlur} onChange={handleChange} />

          <input  className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='password' type="password" placeholder='Enter password' onBlur={handleBlur} value={values.password} onChange={handleChange} />

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='confirmPassword' type="password" placeholder='Confirm password' value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange} />

          <button className='text-white bg-violet-500 px-8 py-4 border-none font-bold text-lg cursor-pointer rounded-sm uppercase hover:bg-violet-400 transition-colors duration-200' type='submit'>Create User</button>

          <span className='text-white uppercase'>Already have an account ? <Link className='text-violet-700 no-underline font-bold' to="/login">Login</Link> </span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
