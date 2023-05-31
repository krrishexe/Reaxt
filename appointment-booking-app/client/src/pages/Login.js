import React from 'react'
import { Form, Input } from 'antd'
import "../styles/RegisterStyles.css"
import { Link } from 'react-router-dom'

const Login = () => {
  const onFinishHandler = values => {
    console.log('Success:', values)
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
