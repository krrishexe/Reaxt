const { register, login, SetAvatar, getAllUsers } = require('../controllers/usersController');

const router = require('express').Router();

router.post('/register',register)
router.post('/login',login)
router.post('/SetAvatar/:id',SetAvatar)
router.get('/allUsers/:id',getAllUsers)

module.exports = router;