'use strict';

const config = require('../nightwatch.conf.js');


// text target
const textOfTitle = 'Home';
const textOfSecondaryTitle = 'This is dummy content from server';
const textOfLorem = 'Lorem ipsum dolor sit amet';


module.exports = {

	before: function (browser) {
		console.log('\nSetting up browser...'); // eslint-disable-line no-console
		browser.maximizeWindow();
		browser.url('http://localhost:8080/');
		browser.waitForElementVisible('body');
		browser.removeAllCookies(); // custom command!
		browser.pause(1000);
	},

	after: function (browser) {
		console.log('\nClosing down browser...'); // eslint-disable-line no-console
		browser.end();
	},

	'Main title of Home page should be correct': function (browser) {
		browser.expect.element('h1').text.to.equal(textOfTitle);
	},

	'Secondary title of Home page should be data from server': function (browser) {
		browser.assert.containsText('h2', textOfSecondaryTitle);
	},

	'Main text of Home page should contain lorem text': function (browser) {
		browser.assert.containsText('p.lead', textOfLorem);
	}
};
