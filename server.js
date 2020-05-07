
const express = require("express")
const mongoose= require("mongoose")
const bodyParser = require('body-parser')

const messages = require('./routes/api/messages')

const cookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./routes/api/auth-routes');
require("dotenv").config();
// const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./passport-setup')
const keys = require('./config/keys');
const cors = require('cors')
const app = express();

///setup CORS
app.use(
    cors({
      origin: "http://localhost:3001", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );



//setup cookie

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.googleKey.cookiekey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

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
.catch(()=> console.log(err));

// mongoose.connect("mongodb://localhost/watsonDB", { useNewUrlParser: true });

//use Routes
app.use('/api/messages', messages)
app.use(routes);




const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})