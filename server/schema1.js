const mongoose = require('mongoose');


const admin = mongoose.Schema({
        Email : {
            type : String,
            required : true
        },
        Password : {
            type : String,
            required : true
        }
    });
    
    
module.exports = mongoose.model('Admin',admin)