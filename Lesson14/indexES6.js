//number 1
const http = require('http');
const port = 3000;
const fs = require('fs');

//number 3
let parsedJSON = require('./file.json');
console.log(parsedJSON);


const reqHandler = (req, res) => {
	if (req.url === '/') {
		res.write('Hello World!');
		res.end();

	} else if (req.url === '/about') {
		console.log(req);
		res.end();

	} else if (req.url === '/file') {
		fs.readFile('./sound.mp3', (err, data) => {
			res.write(data);
			res.end();
		});

	} else if (req.url === '/stop') {
		server.close();
	}
};

const server = http.createServer(reqHandler);

server.listen(port, () => {
	console.log('Go to localhost: 3000');
});

fs.readFile('./file.json', 'utf8', (err, data) => {
   			if (err) throw err; 
    			let obj = JSON.parse(data);
    			console.log(obj);
});