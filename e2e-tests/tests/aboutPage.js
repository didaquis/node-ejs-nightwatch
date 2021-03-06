'use strict';

// text target
const textOfTitle = 'About';
const textOfModal = 'This is an example modal!';

// selectors
const buttonForOpenModal 	= '#buttonForOpenModal';
const primaryButton			= 'btn-primary';
const modal 				= '#exampleModal';
const modalBodyText 		= 'div.modal-body p';
const modalCloseButton		= '#exampleModal > div > div > div.modal-footer > button';
const listOfUsers			= 'div.list-group';

// timmings
const smallTime = 1000;
const mediumTime = 2000;

module.exports = {

	'@disabled': false, // If value is true, this prevent this test module from running.

	before: function (browser) {
		browser.maximizeWindow();
		browser.url('http://localhost:8080/about');
		browser.waitForElementVisible('body');
		browser.removeAllCookies(); // custom command!
		browser.pause(smallTime);
	},

	after: function (browser) {
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
		browser.waitForElementVisible(modal, mediumTime, 'element %s present in %d ms');
		browser.expect.element(modalBodyText).text.to.equal(textOfModal);
	},

	'Modal should be closed': function (browser) {
		browser.expect.element(modal).to.be.visible;
		browser.expect.element(modalCloseButton).to.be.visible.before(smallTime);
		browser.pause(smallTime);
		browser.click(modalCloseButton);
		browser.pause(smallTime);
		browser.waitForElementNotVisible(modal, mediumTime);
	},

	'List of users will be available': function (browser) {
		browser.expect.element(listOfUsers).to.be.visible;
		browser.assert.elementPresent(listOfUsers);
	}
};
