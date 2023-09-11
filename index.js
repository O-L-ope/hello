var http = require('http');

console.log("Startuje serwer...");

http.createServer(function (request, response){
    //tu jest funkcja createServer
    //request = żądanie wysłane z przeglądarki
    //response = to co wysyłamy do przeglądarki w odpowiedzi
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("Hello World!");
    response.end();

}).listen(8080);