const http = require("http");

http.createServer((req, res) => {
        console.log(`Req url: ${req.url}\tReq method: ${req.method}`);

        res.writeHead(200, {'Content-Type': 'text/html'})

        res.end("<h1>Message from the server!</h1>")
}).listen(8000, () => console.log("server running on port 8000"));
