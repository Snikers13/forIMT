var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('note').findOne(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send(item);
			}
		});
	});
 	
	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('note').remove(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send('Note ' + id + ' deleted!');
			} 
		});
	});

	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		const note = { text: req.body.body, title: req.body.title };
		db.collection('note').update(details, note, (err, result) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send(note);
			} 
		});
	});

	app.post('/notes', (req, res) => {
		const note = { text: req.body.body, title: req.body.title };
		db.collection('note').insert(note, (err, result) => {
			if (err) { 
				res.send({ 'error': 'An error has occurred' }); 
			} else {
				res.send(result.ops[0]);
      		}
		});
	});
};