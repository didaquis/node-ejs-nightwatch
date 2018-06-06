'use strict';

const config = require('../nightwatch.conf.js');

module.exports = {
	'Title should be: node-ejs-nightwatch': function (browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body')
			.assert.title('node-ejs-nightwatch')
			.pause(1000)
			.saveScreenshot('./e2e-tests/screenshots/title.png')
			.end();
	}
};