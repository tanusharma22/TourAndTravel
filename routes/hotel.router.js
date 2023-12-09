const express= require('express')
const router= express.Router();
const Hotelhandler=require('../controllers/hotelCrontoller')
router.route("/")
.get(Hotelhandler)
module.exports=router;