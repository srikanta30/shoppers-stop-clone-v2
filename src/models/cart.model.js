//Cart Model:


const mongoose = require('mongoose');

const cartSchema = new mongoose.model({
    user : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    product : {type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    quantity : {type:Number,required:true}
},{
    timestamps: true,
    versionKey:false
})

const Cart = mongoose.model("cart",cartSchema);

module.exports = Cart;