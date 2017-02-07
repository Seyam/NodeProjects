var express = require('express');

var path = require('path');

var app = express();

app.get('/',function(req,res){
   res.sendFile(__dirname + '/sensor.html');
})

app.get('/temp',function(req,res){
   res.sendFile(__dirname + '/temp.html');
})

app.get('/humidity',function(req,res){
   res.sendFile(__dirname + '/humidity.html');
})


app.get('/acc',function(req,res){
   res.sendFile(__dirname + '/acc.html');
})



app.get('/all',function(req,res){
   res.sendFile(__dirname + '/sensor.html');
})



app.listen(8081,'127.0.0.1');

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');