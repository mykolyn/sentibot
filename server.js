const express = require("express")

const mongoose= require("mongoose")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"));
}

require("./routes/api-routes")(app);
// sentiBot is the database we create
mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:sentitalk20@ds027509.mlab.com:27509/heroku_0k9gvtnf", {useNewUrlParser: true})
//"mongodb://localhost/sentiBot"
app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})