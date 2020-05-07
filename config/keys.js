const mLabLink = require("dotenv").config();
exports.mLab = {
    MONGODB_URI: process.env.mLabLink
};
exports.watson = {
    key: process.env.watsonKey,
    url: process.env.watsonURL
};

exports.googleKey = {

    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    cookiekey: process.env.cookieKey
}