const fs = require('fs');

let file = process.argv[2];
fs.readFile(file, 'utf-8' , (err, data) =>{

    if (err){
        console.log(err);
    }

    console.log(data);
    fs.writeFile('index3.html', '<!DOCTYPE html><html><body><p> '+ data +'</p> </body></html>', (err) =>{
        if (err){
            console.log(err);
        }
    })



})