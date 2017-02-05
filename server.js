var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('Connection established dude');
    socket.on("new-comment", function(comment) {
        console.log(comment);
        io.emit("receive-comment", comment);
    });
});

http.listen('3000', function(){
  console.log("Successfuly connected dude");
});
