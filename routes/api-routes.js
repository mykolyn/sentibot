const db = require("../models");

module.exports = function(app) {
    app.get("/api/convo", function(req,res){
        db.Convo.find()
            .sort({date:-1})
        .then((data) => {
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
    });

    app.post("/api/convo", function(req,res){
        db.Convo.create(req.body)
        .then(function(data){
            res.json(data)
        })
        .catch(function(err) {
            res.json(err)
        })
    })
}