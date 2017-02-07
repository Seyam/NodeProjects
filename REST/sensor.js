var express = require('express');
var app = express();
var fs = require("fs");

app.get('/1/all', function (req, res) {
   fs.readFile( __dirname + "/" + "sensorData.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


app.get('/1/:name', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "sensorData.json", 'utf8', function (err, data) {
       sensordata = JSON.parse( data );
       var dataRequested = sensordata[req.params.name] 
       console.log( dataRequested );
       res.end( JSON.stringify(dataRequested));
   });
})


app.delete('/1/:name', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "sensorData.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data[req.params.name];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})


//var server = app.listen(8081, function () {

  //var host = server.address().address
  //var port = server.address().port

  //console.log("Example app listening at http://%s:%s", host, port)

//})


app.listen(8081,'127.0.0.1');
console.log("Server Running!")