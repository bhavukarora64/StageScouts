const express = require('express');
const {userSignup, userLogin, userVerification} = require('../controllers/authController.js')

const router = express.Router();

router.get('/login', userLogin)

router.post('/signup', userSignup)

router.get('/', userVerification)



module.exports = router;