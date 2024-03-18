const express = require('express');
const { signUpController, loginController, courses,particularCourse, purchasedCourses } = require('../controllers/user.controller.js')
const userRouter = express.Router()


router.route('/signup').post(signUpController)
router.route('/login').post(loginController)
router.route('/courses').post(authenticateJwt, courses)
router.route('/courses/:courseId').post(authenticateJwt, particularCourse)
router.route('/purchasedCourses').post(authenticateJwt, purchasedCourses)

module.exports = userRouter;