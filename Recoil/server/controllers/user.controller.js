const mongoose = require('mongoose')
const User = require('../db/index.js')
const jwt = require('jsonwebtoken')


const signUpController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            res.status(403).json({ message: 'User already exists' });
        } else {
            const newUser = new User({ username, password });
            await newUser.save();
            const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
            res.json({ message: 'User created successfully', token });
        }
    } catch (error) {
        console.log("Error signing up : " + error)
    }
}

const loginController = async (req, res) => {
    try {
        const { username, password } = req.headers;
        const user = await User.findOne({ username, password });
        if (user) {
            const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
            res.json({ message: 'Logged in successfully', token });
        } else {
            res.status(403).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.log("Error signing in : " + error)
    }
}

const courses = async (req, res) => {
    try {
        const courses = await Course.find({ published: true });
        res.json({ courses });
    } catch (error) {
        console.log("Error in courses : " + error)
    }
}

const particularCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        console.log(course);
        if (course) {
            const user = await User.findOne({ username: req.user.username });
            if (user) {
                user.purchasedCourses.push(course);
                await user.save();
                res.json({ message: 'Course purchased successfully' });
            } else {
                res.status(403).json({ message: 'User not found' });
            }
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        console.log("Error in particular courses : " + error)
    }
}


module.exports = { signUpController, loginController, courses, particularCourse }