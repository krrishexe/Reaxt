const express = require('express');
const {loginController,registerController} = require('../controllers/userCtrl')

// router

const router = express.Router();


//routes 
//Login || POST
router.post('/', loginController
);

// Register || post
router.post('/register', registerController)


module.exports = router;