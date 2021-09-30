//User Model:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {type:String,required:true},
    useremail : {type:String,required:true},
    usermobile : {type:Number,required:true},
    userpassword : {type:String,required:true},
    usergender : {type:String,required:true},
    useraddress : {type:String,required:true},
    cart: [{type:mongoose.Schema.Types.ObjectId, ref:"product", required:true}],
    orders : [{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}],
    wishlist : [{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}]
},
{
    versionKey:false,
    timestamps: true
})

const User = mongoose.model("user",userSchema);

module.exports = User;

