const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    userMsg: String,
    botMsg: Object,
    //data: Date.now,
});


const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;