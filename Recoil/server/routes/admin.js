const mongoose = require("mongoose");
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin.model')
const User = require('../models/User.model')
const Course = require('../models/Course.model')
const { SECRET } = require("../middlewares/auth")
const { authenticateJwt } = require("../middlewares/auth");

const adminRouter = express.Router();

adminRouter.get("/me", authenticateJwt, async (req, res) => {
  const admin = await Admin.findOne({ username: req.user.username });
  if (!admin) {
    res.status(403).json({ msg: "Admin doesnt exist" })
    return
  }
  res.json({
    username: admin.username
  })
});

adminRouter.post('/signup', (req, res) => {
  const { username, password } = req.body;
  function callback(admin) {
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();

      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }

  }
  Admin.findOne({ username }).then(callback);
});

adminRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username)
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});

adminRouter.post('/courses', authenticateJwt, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: 'Course created successfully', courseId: course.id });
});

adminRouter.put('/courses/:courseId', authenticateJwt, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

adminRouter.get('/courses', authenticateJwt, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

adminRouter.get('/course/:courseId', authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({ course });
});

module.exports = adminRouter