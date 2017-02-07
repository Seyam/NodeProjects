var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded





app.get('/api/all', function (req, res) {
   fs.readFile( __dirname + "/" + "sensor_database.json", 'utf8', function (err, data) {
       var read_data=JSON.parse(data);
       console.log(read_data);

       res.json(read_data);
       //res.end( data );
   });
})


app.get('/api/:name', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "sensor_database.json", 'utf8', function (err, data) {
       sensordata = JSON.parse( data );
       var dataRequested = sensordata[req.params.name] 
       console.log( dataRequested );
       res.json(dataRequested);
       //res.end( JSON.stringify(dataRequested));
   });
})


app.delete('/api/:name', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "sensor_database.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data[req.params.name];
       
       console.log( data );
       res.json(data);
       //res.end( JSON.stringify(data));
   });
})


app.put('/api/:name', function (req, res, next) {
  //console.log(req.body);
  
  fs.readFile(__dirname+'/sensor_database.json','utf8',function(err,data){
    data=JSON.parse(data);

    data[req.params.name]=req.body;
    
    //data[req.params.name]=bodydata;

    console.log(data);
    res.json(data);
    //var dataSerialized = JSON.stringify(data);
    //res.json(dataSerialized);
    //fs.writeFile('/sensor_database.json',dataSerialized);
  });

});


//var server = app.listen(8081, function () {

  //var host = server.address().address
  //var port = server.address().port

  //console.log("Example app listening at http://%s:%s", host, port)

//})


app.listen(8081,'127.0.0.1');
console.log("Server Running!")