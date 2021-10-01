//User Model:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {type:String,required:true},
    useremail : {type:String,required:true},
    usermobile : {type:Number,required:true},
    userpassword : {type:String,required:true},
    usergender : {type:String,required:true},
    useraddress : {type:String,required:false},
    cart: [{type:mongoose.Schema.Types.ObjectId, ref:"product", required:false}],
    orders : [{type:mongoose.Schema.Types.ObjectId,ref:"product",required:false}],
    wishlist : [{type:mongoose.Schema.Types.ObjectId,ref:"product",required:false}]
},
{
    versionKey:false,
    timestamps: true
})

const User = mongoose.model("user",userSchema);

module.exports = User;

