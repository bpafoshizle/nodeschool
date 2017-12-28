http = require('http');
bl = require('bl');

http.get(process.argv[2], (res) => {
    res.pipe(bl((err, data) => {
        if(err){
            return console.error(err)
        }
        console.log(data.toString().length)
        console.log(data.toString());
    }));
}).on("error", (err) => {
    console.log(err)
});
