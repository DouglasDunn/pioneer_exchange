const mongoose = require('mongoose');
// const fs = require('fs');
// const multer = require('multer');
const Schema = mongoose.Schema;

//Create House schema
const HousingSchema = new Schema({
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
    date:{
        type: Date,
        default: Date.now
    },
    // img:{
    //     data: Buffer,
    //     contentType: String,
    // },
    additional:{
        type:String
    }
});

module.exports = Housing = mongoose.model('housings', HousingSchema);
