
const express = require("express")
const mongoose= require("mongoose")
const bodyParser = require('body-parser')

const messages = require('./routes/api/messages')

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

// npm dotenv
// const mLabLink= require("dotenv").config()

app.use(express.urlencoded({extended:true}))
app.use(express.json());

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"));
}

// console.log(process.env.mLabLink)
//require("./routes/api/api-routes")(app);


//DB config
const mongodb = require('./config/keys').mLab.MONGODB_URI;

// Connect the Mongo
mongoose.connect(process.env.MONGODB_URI ||  mongodb, {useNewUrlParser: true})
.then(()=>console.log("mongodb connected..."))
.catch((err)=> console.log(err));

//use Routes
app.use('/api/messages', messages)




const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})