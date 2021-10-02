const express=require('express');
const User=require("../models/user.model")

const router=express.Router();

router.post("",async (req,res)=>{
    const user=await User.create(req.body);
    //console.log(user);
    res.redirect("/signin")
})

module.exports=router