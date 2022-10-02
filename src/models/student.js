const mongoose = require('mongoose');
const validator = require('validator');


 const schema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        minlength : 3
    },
    email : {
        type : String,
        require : true,
        unique : true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error ('your email is invalid')
            }
        }
    },
    phone : {
        type : Number,
        unique : true,
        require : true,
    },
    address:{
        type : String,
        require : true
    }
 })


 const student = new mongoose.model('student',schema);
 module.exports = student;


