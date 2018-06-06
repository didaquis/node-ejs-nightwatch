'use strict';

const config = require('../nightwatch.conf.js');

// text target
const textOfTitle = 'About';
const textOfModal = 'This is an example modal';


// selectors
const buttonForOpenModal 	= '#buttonForOpenModal';
const primaryButton			= 'btn-primary';
const modal 				= '#exampleModal';
const modalBody 			= 'div.modal-body';
const modalCloseButton		= 'div.modal-header > button.close';


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

	'Main title of About page should be correct': function (browser) {
		browser.expect.element('h1').text.to.equal(textOfTitle);
	},

	'Button for open modal should be visible': function (browser) {
		browser.expect.element(buttonForOpenModal).to.be.present;
		browser.assert.cssClassPresent(buttonForOpenModal, 'btn');
		browser.assert.cssClassPresent(buttonForOpenModal, primaryButton);
	},

	'Modal should be visible': function (browser) {
		browser.expect.element(modal).to.not.be.visible;
		browser.waitForElementVisible(buttonForOpenModal);
		browser.click(buttonForOpenModal);
		browser.waitForElementVisible(modal, 2000, 'element %s present in %d ms');
		browser.expect.element(modalBody).text.to.equal(textOfModal);
	},

	'Modal should be closed': function (browser){
		browser.expect.element(modal).to.be.visible;
		browser.assert.elementPresent(modalCloseButton);
		browser.click(modalCloseButton);
		browser.waitForElementNotVisible(modal, 2000);
	}
};
