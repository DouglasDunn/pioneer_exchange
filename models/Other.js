const mongoose = require('mongoose');
// const fs = require('fs');
// const multer = require('multer');
const Schema = mongoose.Schema;

//Create Other schema
const OtherSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    // img:{
    //     data: Buffer,
    //     contentType: String,
    // },
    additional:{
        type: String
    }
});
module.exports = Other = mongoose.model('others', OtherSchema);
