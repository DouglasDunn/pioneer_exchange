const mongoose = require('mongoose');
// const express = require('express');
// const fs = require('fs');
// const multer = require('multer');

const Schema = mongoose.Schema;

//Textbook schema
const TextbookSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    edition:{
        type:Number,
        required:true
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
        type:String
    }
});

module.exports = Textbook = mongoose.model('textbooks', TextbookSchema);
