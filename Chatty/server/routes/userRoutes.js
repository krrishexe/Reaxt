const { register, login, SetAvatar } = require('../controllers/usersController');

const router = require('express').Router();

router.post('/register',register)
router.post('/login',login)
router.post('/SetAvatar/:id',SetAvatar)

module.exports = router;