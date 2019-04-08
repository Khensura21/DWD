var request = require('request');
var url = process.argv[2];

// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
//   });
// for (let j = 0; j < process.argv.length; j++) {  
// //     console.log(j + ' -> ' + (process.argv[j]));
// }
request(url, function (err, response, body){
    console.log('error: ', err); //prints error if one occurs
    console.log('statusCode:', response && response.statusCode); //prints response and status code
    console.log('body:', body); //Prints HTML for ESPN page;


})

