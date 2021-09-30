//User Model:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name : {type:String,required:true},
    email : {type:String,required:true},
    mobile : {type:Number,required:true},
    password : {type:String,required:true},
    gender : {type:String,required:true},
    address : {type:String,required:true},
    cart: [{ product : {type:mongoose.Schema.Types.ObjectId, ref:"product", required:true}, quantity: {Number,required:true}}],
    orders : [{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}],
    wishlist : [{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}]
},
{
    versionKey:false,
    timestamps: true
})

const User = mongoose.model("user",userSchema);

module.exports = User;

