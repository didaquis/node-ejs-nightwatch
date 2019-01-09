// This is an example of custom command
// how to use: 
// browser.removeAllCookies( [optional callback function] );

'use strict';

// timmings
const smallTime = 1000;

exports.command = function(callback) {
	this.deleteCookies();
	this.pause(smallTime);

	if (typeof callback === 'function') {
		callback.call(this);
	}

	return this;
};
