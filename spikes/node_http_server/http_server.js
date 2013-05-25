"use strict";

var http = require("http");

var server = http.createServer();

server.on("request", function(request, response) {
    console.log("Received request");

    var body = "<html><head><title>Node HTTP Spike</title></head></html>" +
        "<body><p>This is a spike of Node's HTTP server.</p></body>";

    // The following two approaches are equivalent:
    // The verbose way...
    // response.statusCode = 200;
    // response.write(body);
    // response.end();

    // The concise way...
    response.end(body);
});

server.listen("8080");

console.log("Server started.");