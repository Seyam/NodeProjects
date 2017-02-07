var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname + '/sensor.html');
})

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
})

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
})




app.listen(3000,'127.0.0.1');