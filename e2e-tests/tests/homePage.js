'use strict';

const config = require('../nightwatch.conf.js');

module.exports = {

	before: function (browser) {
		console.log('\nSetting up browser...'); // eslint-disable-line no-console
		browser.maximizeWindow();
		browser.url('http://localhost:8080/');
		browser.waitForElementVisible('body');
		browser.pause(1000);
	},

	after: function (browser) {
		console.log('\nClosing down browser...'); // eslint-disable-line no-console
		browser.end();
	},

	'Main title of Home page should be: Home': function (browser) {
		browser.expect.element('h1').text.to.equal('Home');
	},

	'Secondary title of Home page should be data from server': function (browser) {
		browser.assert.containsText('h2', 'This is dummy content from server');
	},

	'Main text of Home page should be lorem text': function (browser) {
		browser.assert.containsText('p.lead', 'Lorem ipsum dolor sit amet');
	}
};