var socket = io.connect("http://localhost:7777");
socket.on("connect", function(data) {
  socket.emit("join", "Hello server from client");
});

// listener for 'thread' event, which updates messages
socket.on("thread", function(data) {
    $("#thread").append("<li>" + data.handle + ": " + data.message + "</li>");
});
  
// sends message to server, resets & prevents default form action
$("form").submit(function() {
var message = $("#message").val();
var handle = $("#handle").val();
socket.emit("messages", {message, handle});
this.reset();
return false;
});

