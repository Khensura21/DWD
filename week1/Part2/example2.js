const fs = require('fs');

let data = [];
for (let i = 2; i<process.argv.length; i++){
    data.push(process.argv[i]);
};

let html = data.join(" ");

fs.writeFile("index2.html", html, (err)=>{
    if (err){
        console.log(err);
    }
})