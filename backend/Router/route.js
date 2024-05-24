const express = require('express')
const router = new express.Router()
const userController = require("../Controllers/userController")
router.post('/register',userController.register)
module.exports = router

//login API routes-localhos:4000/register
router.post('/login',userController.login)