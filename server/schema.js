const mongoose = require('mongoose');

const schm = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true

    },
    Email :{
        type : String,
        required : true
    },
    Phone : {
        type : Number,
        required : true
    }
});


module.exports = mongoose.model('persons',schm);