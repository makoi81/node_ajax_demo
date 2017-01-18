var express = require('express');
var app = express();
var port = 3000;
app.use(express.static('public'));

app.get("/", function(req, res){
	res.render("index", {});
});

app.get("/target", function(req, res){
	res.json({message: "You got me!"});
});

app.listen(port, function(){
	console.log(`ExpressJS started on port 3000`);
});