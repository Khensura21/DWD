var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/band', function(req, res) {
    var textvalue = req.query.textfield;

    let insults = ["ugly", "dumb", "lame"];
    var insult = insults[Math.floor(Math.random()*insults.length)];

    res.send(`The ${textvalue} are ${insult}!`);

});

app.listen(3550, function(){
    console.log("App listening on port 3550!")
})

