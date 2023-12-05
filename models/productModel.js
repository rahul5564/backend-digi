const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    body:{
        type:String,
    }
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;

