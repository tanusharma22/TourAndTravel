const express= require('express')
const router= express.Router();
const loginHandler =require('../controllers/loginController')
const signupHandler=require('../controllers/signupController')

 router.route("/register")
    .post(signupHandler)
 router.route("/login")
    .post(loginHandler)
    module.exports=router;