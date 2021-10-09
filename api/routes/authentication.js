const express = require('express')
const router = express.Router()
const UserController = require('../controller/authentication')
//sign up post request
router.post('/signup',UserController.PostuserInfoSignUp);
module.exports = router