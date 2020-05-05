const mLabLink = require("dotenv").config();
exports.mLab = {
    MONGODB_URI: process.env.mLabLink
};
exports.watson = {
    key: process.env.watsonKey,
    url: process.env.watsonURL
};