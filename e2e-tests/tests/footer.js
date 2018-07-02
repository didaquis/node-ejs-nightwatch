'use strict';

const config = require('../nightwatch.conf.js');

// content
const linkText = '@didaquis';
const linkURL = 'https://github.com/didaquis';

// selectors
const linkOnFooterSelector		= 'footer > .row > .col-12.col-md > a';

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

	'Footer should contain link to GitHub': function (browser) {
		browser.expect.element(linkOnFooterSelector).to.be.visible;
		browser.expect.element(linkOnFooterSelector).text.to.equal(linkText);
		browser.assert.attributeEquals(linkOnFooterSelector, 'href', linkURL);
	}
};
