const http = require('http');
const event = require('events').EventEmitter;
const moment = require('moment'); //add for emit correct date
const read = require('read'); //cool library, i used this for output the date without server, only git
const port = 3000;
let dat = moment().format('MMMM Do YYYY, h:mm:ss a');


//Здесь вводится пароль и имя и появляется дата входа, только без спобытий.

// read({ prompt : '\nUsername: ' }, function (err, user) {
// let d = read({ prompt : '\nPassword: ', silent : true }, function (err, pass) {
//     		console.log(user, pass);
//     		console.log(moment(d).format('MMMM Do YYYY, h:mm:ss a'));
//     		process.stdin.destroy();
//   });
// })

let emt = new event();

const server = http.createServer( (req, res) => {

	res.write('hi')
	if (req.url === '/') {
		emt.once('login', (a) => {
			console.log('User Anton Tretyak come in ' + a);
			emt.once('someAction', (a) => {
				console.log('Glad to see you');
			});
		});
	} else if (req.url === '/bye'){
		res.write(' and bye'); 
		server.close();
		emt.once('logout', (a) => {
			console.log('User Anton Tretyak just left ' + a);
			emt.once('someAction', (a) => {
				console.log('Bye');
			});
		});
		
	}
	res.end();

	emt.emit('someAction');
	emt.emit('someAction');  
	emt.emit('login', dat);
	emt.emit('logout', moment().format('MMMM Do YYYY, h:mm:ss a'));
}).listen(port, () => {
	console.log('serv')
})


