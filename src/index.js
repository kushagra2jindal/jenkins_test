var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Jenkins Test!");
});

app.listen(3000);