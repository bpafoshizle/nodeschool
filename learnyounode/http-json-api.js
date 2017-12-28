const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)

    if(!parsedUrl.query.iso) {
        return res.end("No iso query parameter supplied.\n");
    }

    const date = new Date(parsedUrl.query.iso)
    res.writeHead(200, { 'content-type': 'application/json' })
    if(parsedUrl.pathname === "/api/parsetime") {
        // {
        //     "hour": 14,
        //     "minute": 23,
        //     "second": 15
        // }
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }));
    }
    else if(parsedUrl.pathname === "/api/unixtime") {
        //     { "unixtime": 1376136615474 }
        res.end(JSON.stringify({"unixtime": date.getTime()}));
    }
    else {
        res.end(JSON.stringify({
            "Error": "Not a valid path",
            "Path": parsedUrl.pathname
        }));
    }

});
server.on("error", (err) => {
    console.error(err);
});
server.listen(port, () => {
    console.log("server listening on port " + port);
});
