const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
   writer: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   title: {
       type: String,
       maxLength: 50
   }, 
   description: {
       type: String,
   }, 
   price: {
       type: Number,
       default: 0
   },
   images: {
       type: Array,
       default: []
   },
   categories: {
       type: Number,
       default: 1
   },
   sold: {
       type: Number,
       maxlength: 100,
       default: 0
   },
   views: {
       type: Number,
       default: 0
   }
}, { timestamps: true })

const User = mongoose.model('Product', userSchema);

module.exports = { User }