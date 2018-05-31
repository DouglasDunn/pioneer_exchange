const mongoose = require('mongoose');
// const fs = require('fs');
// const multer = require('multer');
const Schema = mongoose.Schema;

//Create electronic schema
const ElectronicSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type:String,
        required: true
    },

    details:{
        type:String,
        required:true
    },
    
    brand:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    // img:{
    //     data: Buffer,
    //     contentType: String,
    // },
    additional:{
        type:String
    }
});
module.exports = Electronic = mongoose.model('electronics', ElectronicSchema);
