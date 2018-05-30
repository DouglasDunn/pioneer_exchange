const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const Schema = mongoose.Schema;

//Create Event schema 
const EventSchema = new Schema({
    _id2:{
        type:String,
        required:true
    },
    eventname:{
        type:String,
        required: true,
        max:70,
    },
    price:{
        type:Number,
        required:true
    },
    date:{
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

mongoose.model('BuynSell', EventSchema);