var express = require("express");
var app = express();


app.use(express.static('public'));

app.listen(8000,()=>{
    console.log("app listening on port 8000" );
})