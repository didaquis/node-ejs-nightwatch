'use strict';

// text target
const textOfTitle = 'Home';
const textOfSecondaryTitle = 'This is dummy content from server';
const textOfLorem = 'Lorem ipsum dolor sit amet';
const reg = /^\bVersion\b[\s]{1}(\d+\.)(\d+\.)(\d+)$/; // valid pattern => Version 2.02.678

// selectors
const paragraphVersionSelector = 'p.lead + p'; // This selector means: next sibling of <p class="lead"></p>

// timmings
const smallTime = 1000;

module.exports = {

	'@disabled': false, // If value is true, this prevent this test module from running.

	before: function(browser) {
		browser.maximizeWindow();
		browser.url('http://localhost:8080/');
		browser.waitForElementVisible('body');
		browser.removeAllCookies(); // custom command!
		browser.pause(smallTime);
	},

	after: function(browser) {
		browser.end();
	},

	'Main title of Home page should be correct': function(browser) {
		browser.expect.element('h1').text.to.equal(textOfTitle);
	},

	'Secondary title of Home page should be data from server': function(browser) {
		browser.assert.containsText('h2', textOfSecondaryTitle);
	},

	'Main text of Home page should have css class named lead': function(browser) {
		browser.assert.cssClassPresent('p', 'lead', 'Assert if p element have a css class named lead');
	},

	'Main text of Home page should contain lorem text': function(browser) {
		browser.assert.containsText('p.lead', textOfLorem);
	},

	'Paragraph should contain value of software version': function(browser) {
		browser.expect.element(paragraphVersionSelector).text.to.match(reg);
	}
};
