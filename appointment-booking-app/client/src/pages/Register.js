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
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form p-4 ' >
          <h1>Register Form</h1>

          <Form.Item label="Name" name="name">
            <Input type='text'  required />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type='text'  required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='text'  required />
          </Form.Item>
          <div className='m-2 d-flex justify-content-center'>
          <Link to="/login">Already a user ? Login here</Link>
          </div>
          <button className='btn btn-primary d-flex' type='submit'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default Register
