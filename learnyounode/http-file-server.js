const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {
    //logic
    res.writeHead(200, { 'content-type': 'text/plain' })
    fileReadStream = fs.createReadStream(file);
    fileReadStream.pipe(res);
});
server.on("error", (err) => {
    console.error(err);
});
server.listen(port, () => {
    console.log("server listening on port " + port);
});
