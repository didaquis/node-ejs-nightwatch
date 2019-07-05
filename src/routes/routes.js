'use strict';

const uuidv4 = require('uuid/v4');

const dataPackageJSON = require('../utils/dataFromPackageJSON.js');

module.exports = function (app) {

	app.get('/', (req, res) => {

		const data = {
			titleOfPage: 'Welcome',
			templateName: 'pages/home',
			content: {
				dataForTitle: 'Home', 
				dataForSubTitle: 'This is dummy content from server', 
				loremData: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro quisquam est qui dolorem ipsum.', 
				npm_package_version: dataPackageJSON.version
			}
		};

		res.render('mainLayout', data);
	});

	app.get('/about', (req, res) => {

		const data = {
			titleOfPage: 'About',
			templateName: 'pages/about',
			content: {
				dataForTitle: 'About',
				users : [
					{
						name: 'Leanne Graham',
						email: 'leanne@april.biz',
						id: uuidv4(),
						address: {
							city: 'Gwenborough',
							zipcode: '92998-3874'
						}
					}, {
						name: 'Ervin Howell',
						email: 'ervin@melissa.tv',
						id: uuidv4(),
						address: {
							city: 'Wisokyburgh',
							zipcode: '90566-7771'
						}
					}, {
						name: 'Clementine Bauch',
						email: 'clementine@yesenia.net',
						id: uuidv4()
					}
				]
			}
		};

		res.render('mainLayout', data);
	});
};
