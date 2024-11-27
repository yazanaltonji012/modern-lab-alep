const mongoose = require('mongoose');
const Schema = mongoose.Schema
const likeSchema = new Schema({
    name: { type: String, required: true },
    likes: { type: Number, default: 0 } ,
    description : {type : String},
    price : {type : Number},
    name: { type: String, required: true },
    likes: { type: Number, default: 0 },
    description: String,
    price: Number,
    ps1: String,
    ps2: String,
    ps3: String,
    ps4: String,
    ps5: String,
    video: String,
    count: String,
    storage: Boolean
}); 
const prod = mongoose.model("Product", likeSchema)
module.exports = prod;