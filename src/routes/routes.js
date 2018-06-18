'use strict';

const dataPackageJSON = require('../utils/dataFromPackageJSON.js');

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('home', { data: 'This is dummy content from server', loremData: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro quisquam est qui dolorem ipsum.', npm_package_version: dataPackageJSON.version } );
	});

	app.get('/about', (req, res) => {
		res.render('about' );
	});
};
