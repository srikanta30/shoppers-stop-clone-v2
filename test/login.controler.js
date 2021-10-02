const express=require('express');
const mongoose=require('mongoose')
//const { findOne } = require('../models/user.model');
const router=express.Router();
const User=require("../models/user.model")


router.post("",async (req,res)=>{
    // console.log(req.body);
   // const user=await findOne({email:useremail});
    const email=req.body.signupEmail;
    const user=await User.findOne({useremail:email});
    //console.log(user);
    if(user.userpassword==req.body.signupPassword){
      return  res.redirect('/home')
    }
    else{
      return  res.render('/signin')
    }
})


module.exports=router