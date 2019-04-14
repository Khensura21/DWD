var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello World!")

});


app.listen(3500, function(){
    console.log("app started on port 3500")
})