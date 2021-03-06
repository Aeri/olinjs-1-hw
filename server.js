var http = require("http");
var url = require("url");
var fs = require("fs");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);

  }

  http.createServer(onRequest).listen(process.env.PORT || 8888);
  console.log("Server has started.");
  console.log("");
}

exports.start = start;
