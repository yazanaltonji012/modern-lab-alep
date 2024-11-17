const mongoose = require('mongoose');
const Schema = mongoose.Schema
const likeSchema = new Schema({
    name: { type: String, required: true },
    likes: { type: Number, default: 0 } ,
    description : {type : String},
    price : {type : Number},
    storage:Boolean
}); 
const prod = mongoose.model("Product", likeSchema)
module.exports = prod;