'use strict';

module.exports = function(app) {
	app.get('/', (req, res) => {

		/**
		 * Store version number defined in package.json file
		 * @type {string}
		 */
		const npm_package_version = process.env.npm_package_version || '';

		res.render('home', { data: 'This is dummy content from server', loremData: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro quisquam est qui dolorem ipsum.', npm_package_version: npm_package_version } );
	});

	app.get('/about', (req, res) => {
		res.render('about' );
	});
};
