const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String,
    password:String,
    email:String,
    type: String
});


const User = mongoose.model('user', userSchema);

module.exports = User;