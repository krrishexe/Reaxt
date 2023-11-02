import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik'
import { registerSchema } from '../models';
import axios from 'axios'
import { registerRoute } from '../utils/APIRoutes';

function Register() {

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm()
    }

  })

  const handleOnClick = async () => {
    errors.username && touched.username ? (toast.error(errors.username, {
      position: 'bottom-right',
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark'
    })) : null;

    errors.email && touched.email ? (toast.error(errors.email, {
      position: 'bottom-right',
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark'
    })) : null;

    errors.password && touched.password ? (toast.error(errors.password, {
      position: 'bottom-right',
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark'
    })) : null;

    errors.confirmPassword && touched.confirmPassword ? (toast.error(errors.confirmPassword, {
      position: 'bottom-right',
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark'
    })) : null;

    const {username, password ,email} = initialValues;
    const {data} = await axios.post(registerRoute,{
      username,
      email,
      password
    })
  }

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

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='password' type="password" placeholder='Enter password' onBlur={handleBlur} value={values.password} onChange={handleChange} />

          <input className='bg-transparent p-2 border-2 rounded-md border-blue-400 text-white w-full text-base focus:border-purple-400 focus:outline-none' name='confirmPassword' type="password" placeholder='Confirm password' value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange} />

          <button className='text-white bg-violet-500 px-8 py-4 border-none font-bold text-lg cursor-pointer rounded-sm uppercase hover:bg-violet-400 transition-colors duration-200' type='submit' onClick={handleOnClick}>Create User</button>

          <span className='text-white uppercase'>Already have an account ? <Link className='text-violet-700 no-underline font-bold' to="/login">Login</Link> </span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
