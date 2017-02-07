var http=require('http');

var server=http.createServer(function(req,res){
    console.log('Request made for'+req.url);
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("I responded");
});



server.listen(3000);
console.log('listening');