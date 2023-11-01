import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'


function Register() {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('form')
  }
  const handleChange =(e) => {

  }

  return (
    <>
      <div className=''>
        <form onSubmit={handleSubmit}>
          <div className="brand">
            <img src={logo} alt=""  />
            <h1>Chatty</h1>
          </div>
          <input name='text' type="text" placeholder='username' onChange={handleChange}/>
          <input name='email' type="email" placeholder='Email' onChange={handleChange}/>
          <input name='password' type="password" placeholder='Enter password' onChange={handleChange}/>
          <input name='confirmPassword' type="password" placeholder='Confirm password' onChange={handleChange}/>

          <button type='submit'>Create User</button>
          <span>Already have an account ? <Link to="/login">Login</Link> </span>
        </form>
      </div>
    </>
  )
}

export default Register
