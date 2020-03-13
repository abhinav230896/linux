# demo1
var http=require("http");
var fs=require("fs");
var onCreatServer= function(req,res)
{fs.readFile("index.html",function(err,data)
{
res.writeHead(200,{"context-type":"text/html"});
res.write(data);
res.end()
});
};
var server=http.createserver(onCreateServer);
server.listen(8080);
console.log("server is listening on port 8080");
