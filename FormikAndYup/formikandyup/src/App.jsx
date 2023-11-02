// import { useState } from 'react'
import './App.css'
import { useFormik } from 'formik'
import { signUpSchema } from './schema';


function App() {
  // const [count, setCount] = useState(0)
  const initialValues = {
    name: '',
    email: '',
    password: '',
    Cpassword: ''
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values,action) => {
      console.log(values)
      action.resetForm() // setvalues({...}) to blank
    }
  })
  // console.log(errors)
  return (
    <>
      <div className="container">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form onSubmit={handleSubmit}>

            <div className="form_group">
              <label className="sub_title" htmlFor="name">Name</label>
              <input name='name' id='name' placeholder="Enter your full name" className="form_style" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} />
              { errors.name && touched.name ? (<p style={{color:"red",fontSize:'15px'}}>{errors.name}</p> ): null}
            </div>

            <div className="form_group">
              <label className="sub_title" htmlFor="email">Email</label>
              <input name='email' placeholder="Enter your email" id="email" className="form_style" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
              { errors.email && touched.email ? (<p style={{color:"red",fontSize:'15px'}}>{errors.email}</p> ): null}
            </div>

            <div className="form_group">
              <label className="sub_title" htmlFor="password">Password</label>
              <input name='password' placeholder="Enter your password" id="password" className="form_style" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
              { errors.password && touched.password ? (<p style={{color:"red" ,fontSize:'15px'}}>{errors.password}</p> ): null}
            </div>

            <div className="form_group">
              <label className="sub_title" htmlFor="Cpassword">Confirm Password</label>
              <input name='Cpassword' placeholder="Enter your password" id="Cpassword" className="form_style" type="password" value={values.Cpassword} onChange={handleChange} onBlur={handleBlur}/>
              { errors.Cpassword && touched.Cpassword ? (<p style={{color:"red",fontSize:'15px'}}>{errors.Cpassword}</p> ): null}
            </div>

            <div>
              <button type='submit' className="btn">SIGN UP</button>
              <p>Have an Account? <a className="link" href="">Login Here!</a></p><a className="link" href="">
              </a></div><a className="link" href="">

            </a></form></div><a className="link" href="">
        </a></div>
    </>
  )
}

export default App
