var http=require("http");
var fs=require("fs");

http.createServer(function (request, response) {
    response.writeHead(200,{
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
    });
    var data=fs.readFileSync("data.json");

    response.end(data.toString());
}).listen(8888);

console.log("Server running at http://192.168.1.24:8888/");