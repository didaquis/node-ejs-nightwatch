'use strict';

const config = require('../nightwatch.conf.js');

const time = new Date().getTime();

// text target
const textOfTitle = 'node-ejs-nightwatch';

module.exports = {
	'Title should be correct': function (browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body')
			.assert.title(textOfTitle)
			.pause(1000)
			.saveScreenshot(`./e2e-tests/screenshots/screenshot_${time}.png`)
			.end();
	}
};
