// import React from 'react'
import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    // kisko validate karna hai ?
    name:Yup.string().min(3).max(20).required("Please enter correct username"),
    email:Yup.string().email().required("Please enter correct email"),
    password:Yup.string().min(6).required("Please enter correct password"),
    Cpassword:Yup.string().required().oneOf([Yup.ref("password"),null], "Password do not match")
})
