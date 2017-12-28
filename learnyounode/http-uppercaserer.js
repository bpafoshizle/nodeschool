const http = require('http');
const map = require('through2-map')
const port = process.argv[2];

const server = http.createServer((req, res) => {
    //logic
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }
    res.writeHead(200, { 'content-type': 'text/plain' })
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);

});
server.on("error", (err) => {
    console.error(err);
});
server.listen(port, () => {
    console.log("server listening on port " + port);
});
