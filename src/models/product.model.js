//Product Model:

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    name : {type: String, required: true},
    description : {type: String , required : true},
    price : {type:String,required:true},
    discount : {type:String,required:true},
    brand : {type:String,required:true},
    rating : {type:String,required:true},
    sizes : [{type:String,required:true}],
    color: {type: String, required:true},
    images : [{type:String,required:true}]
}, {
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;