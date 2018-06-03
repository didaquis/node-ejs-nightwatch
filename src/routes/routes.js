'use strict';

const dataOfExample = 'This is dummy content';

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('index', { sendingDataToFrontend:dataOfExample } );
	});
};