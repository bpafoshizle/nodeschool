const net = require('net');

const port = process.argv[2];

const server = net.createServer((socket) => {
    // logic
    const date = new Date();
    const yr = date.getFullYear();
    const mo = ("00" + (date.getMonth()+1)).slice(-2);
    const dy = ("00" + date.getDate()).slice(-2);
    const hr = ("00" + date.getHours()).slice(-2);
    const mn = ("00" + date.getMinutes()).slice(-2);
    const strDate = yr + "-" + mo + "-" + dy + " " + hr + ":" + mn;
    
    // For a persistent server:
    // socket.write(strDate);
    // socket.pipe(socket);

    // For immediate end server (as assignment asks for):
    socket.end(strDate + "\n");
    
});
server.on('error', (err) => {
    console.error(err);
});
server.listen(port, () => {
    console.log("server listening on port " + port);
});