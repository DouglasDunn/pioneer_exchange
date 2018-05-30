const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const Schema = mongoose.Schema;
//Create Event Postschema 
const EventPosSchema = new Schema({
    name:{
        type:String,
        required: true,
        max:60,
    },
    details:{
        type:String,
        required:true,
        max:70,
    },
    Eventdate:{
        type: Date,
        default: Date.now
    },
    img:{
        data: Buffer,
        contentType: String,
    },
    additional:{
        type:String,
        required:true
    }
});
mongoose.model('BuynSell', EventPosSchema);