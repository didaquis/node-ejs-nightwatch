'use strict';

// setup express application
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


// load routes
const routes = require('./routes/routes.js');
routes(app);

// managing wrong routes
app.use(function(req, res){
	res.status(404); // eslint-disable-line no-magic-numbers
	res.render('404');
});


// managing server start
const port = 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`) ); // eslint-disable-line no-console

// managing stop shutdown
process.on('SIGINT', () => {
	console.log('\nStopping server...'); // eslint-disable-line no-console
	process.exit();
});
