const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({

name: {
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase: true,
}, 
    
    fullName: {
        type:String,
        required:true,
        trim :true
    },

       

 logoLink: {

     type:String,
     required:true,
  
    }, 
    isDeleted: {
        type:Boolean, 
        default: false
    } 
},{timestamps:true})



module.exports = mongoose.model('college', collegeSchema);


//   https://functionup.s3.ap-south-1.amazonaws.com/colleges/svnit.jpg