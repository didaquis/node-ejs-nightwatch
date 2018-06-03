'use strict';

// setup express application
const express = require('express');
//const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


// load routes
const routes = require('./routes/routes.js');
routes(app);

// managing wrong routes
app.use(function(req, res){
	res.status(404);
	res.render('404');
});


// managing server start
const port = 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`) );

// managing stop shutdown
process.on('SIGINT', () =>{
	console.log('\nStopping server...');
	process.exit();
});
