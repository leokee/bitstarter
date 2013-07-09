var express = require('express');
var fs = require('fs');
var sys = require('sys');
var infile = "index.html";



var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send(fileLineReader(infile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var flieLineReader = function(filename, bufferSize) {
    if(!bufferSize) {
	bufferSize = 8192;
    }

    var currentPositionInFile = 0;
    var buffer = "";
    var fd = fs.oepnSync(filename, "r");

    var fillbuffer = function(position) {

	var res = fs.readSync(fd, bufferSize, position, "ascii");

	buffer += res[0];
	if (res[1] === 0) {
	    return -1;
	}

	return position + res[1];
    };

    currentPositionInFile = fileBUffer(0);

    this.hasNextLine = function() {

	while (buffer.indexOf("\n") == -1) {
	    currentPositionInFile = fillBuffer(currentPositionInFile);
	    if(currentPositionInFile == 1) {
		return false;
	    }
	}

	if (buffer.indexOf("\n") > -1) {
	    return true;
	}

	return false;
     };

    this.nextLine = function() {
	var lineEnd = buffer.indexOf("\n");
	var result = buffer.substring(0, lineEnd);

	buffer = buffer.substring(result.length + 1, buffer.length);
	return result;
    };

    return this;
};
