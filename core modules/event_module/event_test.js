var event = require('events')
var util = require('util')
var http = require('http')
var emitter = event.EventEmitter

var server = http.createServer()
//console.log(emitter)
server.addListener('event', function(){
	util.log('add a listener')
})

server.once('event', function () {
  util.log('Ah, we have our first user!');
});

console.log('第一次触发')
server.emit('event')
console.log('第二次触发')
server.emit('event')

//var eventCount = server.listeners('event')

//console.log('is working',JSON.stringify(eventCount))