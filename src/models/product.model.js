//Product Model:

const mongoose = require('mongoose');

const productSchema = new mongoose.model({
    product_name : {type:String,required:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    discount : {type:Number,required:true},
    brand_name : {type:String,required:true},
    rating : {type:Number,required:true},
    size_1 : {type:Number,required:true},
    size_2 : {type:Number,required:true},
    size_3 : {type:Number,required:true},
    size_4 : {type:Number,required:true},
    color : {type:String,required:true},
    image_1 : {type:String,required:true},
    image_2 : {type:String,required:true},
    image_3 : {type:String,required:true},
    image_4 : {type:String,required:true},
},
{
    versionKey:false,
    timestamps: true
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;