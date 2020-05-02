
const express = require("express")
const mongoose= require("mongoose")

const app = express();

//DB config
const mongodb = require('./config/keys').mongoURI
// npm dotenv
// const mLabLink= require("dotenv").config()

app.use(express.urlencoded({extended:true}))
app.use(express.json());

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"));
}

// console.log(process.env.mLabLink)

require("./routes/api-routes")(app);

// Connect the Mongo
mongoose.connect(process.env.MONGODB_URI ||  mongodb, {useNewUrlParser: true})
.then(()=>console.log("mongodb connected..."))
.catch(()=> console.log(err));





const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})