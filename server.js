const express = require('express');
const app = express();
const port = 8080;

var http = require('http');
var url = require('url');
var fs = require('fs');
var site = "/site"


app.get('*', function (req, res) {

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
      fs.readFile(filename, function(err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
        res.sendFile(filename, { root: __dirname + site } );
        res.write(data);
      return res.end();
    });
  })
  
  var server = app.listen(port, function () {
      console.log('Running on port ' + port);
  })
