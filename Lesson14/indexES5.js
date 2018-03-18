//number 1
var http = require('http');
var request = require('request');
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
	}
	else if (req.url === '/json') { //number 3
		var options = {
 		 method: 'post',
  		 json: true, // Use,If you are sending JSON data
   		 url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',
	}

		request(options, function (err, res, body) {
  		if (err) {
    		console.log('Error :', err)
    			return;
  		}
  	console.log(body);

});
	
	} else if (req.url === '/stop') {
		server.close();
	}
}).listen(port, function () {
	console.log('Go to localhost: 3000');
});

//number two, i use npm install nodemon -g & nodemon app.js;






// number 4 в index.html
