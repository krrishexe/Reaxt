import React from 'react'
import { Form, Input, message } from 'antd'
import axios from 'axios'
import "../styles/RegisterStyles.css"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const onFinishHandler = async (values) => {

    try {
      const res = await axios.post('/api/v1/user/login', values)
      if (res.data.success) {
        localStorage.setItem('token', res.data.token)
        message.success('login successful')
        navigate('/')
      } else {
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error('Something went wrong')
    }

  }
  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form p-4' >
          <h1 className='text-center'>Login </h1>

          <Form.Item label="Email" name="email">
            <Input type='email' required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password' required />
          </Form.Item>

          <div className='m-2 d-flex justify-content-center align-items-center flex-column '>
            <Link to="/register">Not a user ? Register here</Link>
            <button className='btn btn-primary mt-3' type='submit'>Login</button>
          </div>

        </Form>
      </div>
    </>
  )
}

export default Login
