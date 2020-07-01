var http = require("http");

http.createServer(function(req, res) {
    res.end("Status: Server Online")
}).listen(3500);

console.log("Servidor rodando...");