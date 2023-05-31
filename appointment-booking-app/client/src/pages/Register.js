import React from 'react'
import  {Form,Input} from 'antd'
import "../styles/RegisterStyles.css"
import {Link} from 'react-router-dom'


const Register = () => {

  const onFinishHandler = values => {
    console.log('Values:', values)
  }

  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form p-4' >
          <h1 className='text-center'>Register Form</h1>

          <Form.Item label="Name" name="name">
            <Input type='text'  required />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type='email'  required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password'  required />
          </Form.Item>
          <div className='m-2 d-flex justify-content-center align-items-center flex-column '>
          <Link to="/login">Already a user ? Login here</Link>
          <button className='btn btn-primary mt-3' type='submit'>Register</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register
