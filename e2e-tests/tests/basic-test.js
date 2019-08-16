'use strict';

// text target
const textOfTitle = 'Home';

// timmings
const smallTime = 1000;

module.exports = {

	'@disabled': false, // If value is true, this prevent this test module from running.

	'@tags': ['basic-test'], // This is an example of add "tags" to test

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

	'Main title of Home page should be correct': function (browser) {
		browser.expect.element('h1').text.to.equal(textOfTitle);
	},

	'Custom Command should log text message on console': function (browser) {
		browser.logToConsole('This is custom text logged from a custom command!');
	}
};
