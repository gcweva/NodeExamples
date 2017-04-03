var express = require('express');
var app = express();
var path = require('path');
app.use('/', express.static(path.join(__dirname, 'public')));

//routes
app.get("/", function(req, res) {
	console.log("Default route rendered");
	res.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Server can be accessed at http://localhost:"+port);
});

