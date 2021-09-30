//Product Model:

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {type: String, required: true},
    description : {type: String , required : true},
    price : {type:Number,required:true},
    discount : {type:Number,required:true},
    brand : {type:String,required:true},
    rating : {type:Number,required:true},
    sizes : [{type:Number,required:true}],
    color: {type: String, required:true},
    images : [{type:String,required:true}]
}, {
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;