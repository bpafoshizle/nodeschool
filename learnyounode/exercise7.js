const http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8')
    .on("error", (err) => {
        return console.log(err);
    })
    .on("data", (data) => {
        console.log(data);
    })
    .on("end", () => {/*console.log("end")*/});
})