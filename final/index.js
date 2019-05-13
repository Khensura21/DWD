/// Example of user authentication
// Based on https://itp.nyu.edu/~sve204/dwd_spring2018/cookies_sessions_logins_https.html


var express = require('express');
var mustacheExpress = require('mustache-express');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var bcrypt = require('bcrypt-nodejs');
// var crypto = require("crypto");
var { Client } = require('pg');

var PORT = process.env.PORT || 8000;


var app = express();
app.use(express.static('public'))
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', function (req, res) {
	res.redirect('/login');
});

var client = new Client({ database:'Kalekeys'});
client.connect();


const getUserByUsernameQuery = "SELECT * FROM users WHERE username = 'kalekeys'";

function comparePasswords(websitePC, dbPC) {
	return websitePC.localeCompare(dbPC);
}


app.post('/signin', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log("signed in as: ", username);

    client.query(getUserByUsernameQuery, function(err, userResult) {
        if (err){
            console.log("Database Login Error: ", err);
            res.redirect('/login')
            return; //question: why do we return here?
        }
        //question is this '!userResult.rows.length' testing?
        if (!userResult.rows.length){
            console.log("Unknown username!");
            res.redirect('/login')
            return;
        }

        //store the user object in the user variable  
        var user = userResult.rows[0];

        if (comparePasswords(req.body.password, user.password) != 0 ) {
            console.log("Wrong password");    
			res.redirect('/login.html');
			return;
        }
        

        res.render('index');

		// // If both Username + password are valid then do this!
		// var sessionid = generateSessionID();
		// client.query(createSessionQuery, [sessionid, user.id], function (err, sessionResult) {
		// 	if (err) {
		// 		console.log("Error creating sessions:", err);
		// 		res.redirect('/');
		// 		return;
		// 	}
		// 	console.log("Session created! Setting user cookie...");
		// 	res.cookie('sessionid', sessionid);
		// 	res.redirect('/');
		// 	return;
		// });


    })
})




app.listen(PORT, function () {
    console.log('App listening on port: ' + PORT )

})