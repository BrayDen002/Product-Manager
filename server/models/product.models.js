const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    title: {
        type : String,
        required: [true, "Title must be provided"]
    },
    price : {
        type : Number,
        required: [true, "Price is required"],
        min : [0, "Price cannot be negative"]
    },
    description : {
        type : String,
        required : [true, "Description must be provided"]
    }
}, {timestamps:true})
module.exports.Product = mongoose.model('Product', ProductSchema);