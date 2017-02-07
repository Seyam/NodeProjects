buf = new Buffer(256);
len = buf.write("AB");

console.log("Octets written : "+  len);
console.log("Octets written : "+  buf[0]);



