//number 1
var http = require('http');
var port = 3000;
var fs = require('fs');

//number 3
var parsedJSON = require('./file.json');
console.log(parsedJSON);


http.createServer(function (req, res) {
	if (req.url === '/') {
		res.write('Hello World!');
		res.end();

	} else if (req.url === '/about') {
		console.log(req);
		res.end();

	} else if (req.url === '/file') {
		fs.readFile('./sound.mp3', function (err, data) {
			res.write(data);
			res.end();
		});

	} else if (req.url === '/stop') {
		server.close();
	}
}).listen(port, function () {
	console.log('Go to localhost: 3000');
});
//пробовал еще с es6 делать, как-то в es5 (как по мне) 

//number two, i use npm install nodemon -g & nodemon app.js;

//Асинхронная версия number-a 3
fs.readFile('./file.json', 'utf8', function (err, data) {
   			if (err) throw err; 
    			var obj = JSON.parse(data);
    			console.log(obj);
});

// number 4 в index.html
