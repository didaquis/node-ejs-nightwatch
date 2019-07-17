'use strict';

// selectors
const linksOfNavbar		= 'nav > a';

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

	'All navbar links should contain some text and be visible': function (browser) {
		// example of iteration through DOM elements
		browser.elements('css selector', linksOfNavbar, function (result) {
			let dinamicSelector;
			result.value.forEach((res) => {
				const firstKey = 0;
				const keyOfElement = Object.keys(res)[firstKey];
				browser.elementIdAttribute(res[keyOfElement], 'id', function (idValue) {
					dinamicSelector = `#${idValue.value}`; // creating a dinamic selector of element through 'id' attribute value.
					browser.expect.element(dinamicSelector).to.be.an('a', 'Testing if element is HTML tag: \'a\' (link)');
					browser.expect.element(dinamicSelector).text.to.match(/.{1,}/); // contain some text
					browser.expect.element(dinamicSelector).to.be.visible;
				});
			});
		});
	}
};
