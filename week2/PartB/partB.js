var express = require("express");
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data

app.use(urlencodedParser); 

app.use(express.static('public'));

app.post('/processit', function(req, res) {
    var textvalue = req.body.textfield;

    let insults = ["ugly", "dumb", "lame"];
    var insult = insults[Math.floor(Math.random()*insults.length)];

    res.send(`The ${textvalue} are ${insult}!`);

});

app.listen(3550, function(){
    console.log("App listening on port 3550!")
})



