// const mongoose = require('mongoose');
// const express = require('express');
// const fs = require('fs');
// const multer = require('multer');
//
// const Schema = mongoose.Schema;
//
// //Textbook schema
// const BookSchema = new Schema({
//     item_id:{
//         type:String,
//         required: true
//     },
//     textbook:{
//         type:String,
//         require:true,
//         max:60,
//     },
//     author:{
//         type:String,
//         required:true,
//         max:60,
//     },
//     edition:{
//         type:Number,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true
//     },
//     img:{
//         data: Buffer,
//         contentType: String,
//     },
//
//     additional:{
//         type:String,
//         required:true
//     }
// });
//
// mongoose.model('textbook', BookSchema);
