// Dependencies
var express = require('express')
var http = require('http')
var socketIO = require('socket.io')

var app = express()
var server = http.Server(app)
var io = socketIO(server)

app.use('/client', express.static(__dirname + '/client'))
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html')
})

server.listen(2000)
console.log("Server started on port 2000.")

io.on('connection', function(socket) {
	console.log('socket connection')
})