//express has become the standard server framework for node. js
const express = require('express')
const router = express.Router()
const contact = require('../controller/contact')

//when user go to contact to the admin
router.post('/email',contact.PostContactInfo)

module.exports = router
