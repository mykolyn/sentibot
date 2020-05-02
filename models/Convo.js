const mongoose = require("mongoose")

const Schema = mongoose.Schema

//we make a new collection
const ConvoSchema = new Schema({
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
  
  //  response: 

})
// we store collection structure into a var so we can use it
var Convo = mongoose.model("Convo", ConvoSchema);

module.exports = Convo;

