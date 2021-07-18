const express = require('express')
const router = express.Router()
const UserController = require('../controller/authentication')
//sign up post request
router.post('/signup',UserController.PostuserInfoSignUp)
//router.post('/login',UserController.PostUserInfoLogin)
/*router.post('/',(req,res,next)=>{
    const name = req.body.username
    const email = req.body.email
    const pass = req.body.password
    res.status(201).json({
        message: 'hello,',
        name,
        pass
    })
})*/
module.exports = router