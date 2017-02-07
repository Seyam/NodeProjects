var fs = require("fs");
var data = '';
//buf = new Buffer(256);

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');



readerStream.on('data', function (chunk) {
	console.log("Following is the data in its original form! ");
	console.log(chunk);
	console.log("Data are being encrypted by added by 1 ");

    var buf = new Buffer(chunk);
    for (var i = 0; i < buf.length;i++)
    {
        buf[i] += 1;
    }
    data += buf.toString();

});


readerStream.on('end',function(){
   console.log(data);
   writerStream.write(data,'UTF8');

});

readerStream.on('error', function(err){
   console.log(err.stack);
});
