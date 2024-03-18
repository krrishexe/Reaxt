const express = require('express');
const { signUpController, loginController, courses,particularCourse } = require('../controllers/user.controller.js')
const router = express.Router()


router.route('/signup').post(signUpController)
router.route('/login').post(loginController)
router.route('/courses').post(authenticateJwt, courses)
router.route('/courses/:courseId').post(authenticateJwt, particularCourse)