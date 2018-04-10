const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
let db = require('./app/config/config');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err);
                      
	db = database.db("node_api");
	require('./app/routes')(app, db);
});
app.listen(port, () => {
	console.log('We are live on ' + port);
});