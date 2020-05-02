const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Create Schema
const MessagesSchema = new Schema({
    content:{
        type: String,
        required: "you must include text"
    },
    bulletId: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
  

})
// we store collection structure into a var so we can use it
var Convo = mongoose.model("Messages", MessagesSchema);

module.exports = Convo;

