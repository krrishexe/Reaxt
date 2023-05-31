import React from 'react'
import  {Form,Input, message} from 'antd'
import "../styles/RegisterStyles.css"
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
  
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/v1/user/register', values)
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error('something went wrong')
    }
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
