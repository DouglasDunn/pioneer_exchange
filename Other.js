const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const Schema = mongoose.Schema;

//Create Other schema 
const OtherSchema = new Schema({
    itemname:{
        type:String,
        required: true,
        max:60,
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        data: Buffer,
        contentType: String,
    },
    additional:{
        type: String,
        required:true
    }
});
mongoose.model('BuynSell', OtherSchema);