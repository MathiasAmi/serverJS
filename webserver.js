
var http = require('http');
var dato = require('./dato');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var  studerende = {};
  studerende.navn = "Mathias";
  studerende.humor = true;
  studerende.dato = dato.minDato();
  res.end(JSON.stringify(studerende));
}).listen(999);