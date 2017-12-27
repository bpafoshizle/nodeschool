//console.log("HELLO WORLD");
//console.log(process.argv)

// var total = 0;
// for(i = 2; i < process.argv.length; i++){
//     total += Number(process.argv[i])
// } 
// console.log(total);

// EXERCISE 3
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString();
// console.log(str.split("\n").length - 1);

// EXERCISE 4
// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log(data.split("\n").length -1);
// });

// Exercise 5
// var fs = require('fs');
// var p = require('path');
// var dir = process.argv[2];
// var ext = process.argv[3];

// fs.readdir(dir,(err, files) => {
//     if(err) {
//         return console.log(err);
//     }
//     filteredFiles = files.filter((path) => {
//         return path.endsWith("."+ext);
//     });
//     console.log(filteredFiles.join("\n"));
// });

//Exercise 6
var mymodule = require("./mymodule");
mymodule(process.argv[2], process.argv[3], (err, data) => {
    if(err){
        return console.error("There was an error:", err)
    }
    console.log(data.join("\n"))
})