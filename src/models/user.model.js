//User Model:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {type:String,required:true},
    useremail : {type:String,required:true, unique: true},
    usermobile : {type:Number,required:true, unique: true},
    userpassword : {type:String,required:true},
    usergender : {type:String,required:true},
    useraddress : {type:String,required:false},
    cart: [{type:String, ref:"product", required:false}],
    orders : [{type:String,ref:"product",required:false}],
    wishlist : [{type:String,ref:"product",required:false}]
},
{
    versionKey:false,
    timestamps: true
})

const User = mongoose.model("user",userSchema);

module.exports = User;

