const express = require('express');
const { signUpController, loginController, courses, particularCourse, purchasedCourses } = require('../controllers/user.controller')
const {authenticateJwt} = require('../middlewares/auth.js')
const userRouter = express.Router()


userRouter.route('/signup').post(signUpController)
userRouter.route('/login').post(loginController)
userRouter.route('/courses').get(authenticateJwt, courses)
userRouter.route('/courses/:courseId').post(authenticateJwt, particularCourse)
userRouter.route('/purchasedCourses').get(authenticateJwt, purchasedCourses)

module.exports = userRouter;