const config = require('../nightwatch.conf.js');

module.exports = {
	'Main title of Home page should be: Home': function(browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body')
			.expect.element('h1').text.to.equal('Home');
	},

	'Secondary title of Home page should be data from server': function(browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body')
			.assert.containsText('h2', 'This is dummy content from server');
	},

	'Main text of Home page should be lorem text': function(browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body')
			.assert.containsText('p.lead', 'Lorem ipsum dolor sit amet')
			.end();
	}
};