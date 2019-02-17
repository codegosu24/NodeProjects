var express = require('express');
var app=express();
var server = require('http').Server(app);
var io=require("socket.io")(server);


// Set Port
app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.render('index');
})

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});

//socket:
io.on('connection', function(socket){
      console.log("New User connected")
      });