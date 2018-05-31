const mongoose = require('mongoose');
// const fs = require('fs');
// const multer = require('multer');
const Schema = mongoose.Schema;

//Create Event schema
const EventTicketSchema = new Schema({
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

module.exports = EventTicket = mongoose.model('eventTickets', EventTicketSchema);
