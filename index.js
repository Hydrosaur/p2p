const express = require('express');

const app = express();

const path = require('path');

const http = require('http').Server(app);

const PORT =  3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

http.listen(PORT, function(){
	console.log('listening on *:' + PORT);
});
