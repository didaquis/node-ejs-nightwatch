'use strict';

// content
const linkText = '@didaquis';
const linkURL = 'https://github.com/didaquis';

// selectors
const linkOnFooterSelector		= 'footer > .row > .col-12.col-md > a';

// timmings
const smallTime = 1000;

module.exports = {

	'@disabled': false, // If value is true, this prevent this test module from running.

	before: function (browser) {
		browser.maximizeWindow();
		browser.url('http://localhost:8080/');
		browser.waitForElementVisible('body');
		browser.removeAllCookies(); // custom command!
		browser.pause(smallTime);
	},

	after: function (browser) {
		browser.end();
	},

	'Footer should contain link to GitHub': function (browser) {
		browser.expect.element(linkOnFooterSelector).to.be.visible;
		browser.expect.element(linkOnFooterSelector).text.to.equal(linkText);
		browser.assert.attributeEquals(linkOnFooterSelector, 'href', linkURL);
	}
};
