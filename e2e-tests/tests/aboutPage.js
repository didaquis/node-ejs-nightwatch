'use strict';

const config = require('../nightwatch.conf.js');

module.exports = {

	before: function (browser) {
		console.log('\nSetting up browser...'); // eslint-disable-line no-console
		browser.maximizeWindow();
		browser.url('http://localhost:8080/about');
		browser.waitForElementVisible('body');
		browser.removeAllCookies(); // custom command!
		browser.pause(1000);
	},

	after: function (browser) {
		console.log('\nClosing down browser...'); // eslint-disable-line no-console
		browser.end();
	},

	'Main title of About page should be: About': function (browser) {
		browser.expect.element('h1').text.to.equal('About');
	},

	'Button for open modal should be visible': function (browser) {
		browser.expect.element('#buttonForOpenModal').to.be.present;
		browser.assert.cssClassPresent('#buttonForOpenModal', 'btn');
		browser.assert.cssClassPresent('#buttonForOpenModal', 'btn-primary');
	},

	'Modal should be visible': function (browser) {
		browser.expect.element('#exampleModal').to.not.be.visible;
		browser.waitForElementVisible('#buttonForOpenModal');
		browser.click('#buttonForOpenModal');
		browser.waitForElementVisible('#exampleModal', 2000, 'element %s present in %d ms');
		browser.expect.element('div.modal-body').text.to.equal('This is an example modal');
	},

	'Modal should be closed': function (browser){
		browser.expect.element('#exampleModal').to.be.visible;
		browser.assert.elementPresent('div.modal-header > button.close');
		browser.click('div.modal-header > button.close');
		browser.waitForElementNotVisible('#exampleModal', 2000);
	}
};
