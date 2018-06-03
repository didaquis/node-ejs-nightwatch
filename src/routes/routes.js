'use strict';

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('home', { data: 'This is dummy content from server', loremData: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro quisquam est qui dolorem ipsum.' } );
	});

	app.get('/about', (req, res) => {
		res.render('about' );
	});
};
