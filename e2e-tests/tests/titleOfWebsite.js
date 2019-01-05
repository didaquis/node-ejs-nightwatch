'use strict';

const time = new Date().getTime();

// text target
const textOfTitle = 'node-ejs-nightwatch';

// timmings
const smallTime = 1000;

module.exports = {

	'@disabled': false, // If value is true, this prevent this test module from running.

	'Title should be correct': function(browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body')
			.assert.title(textOfTitle)
			.pause(smallTime)
			.saveScreenshot(`./e2e-tests/screenshots/screenshot_${time}.png`)
			.end();
	}
};
