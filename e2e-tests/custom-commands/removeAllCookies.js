// this is an example of custom command
// how to use: 
// browser.removeAllCookies( [optional callback function] );

'use strict';

const config = require('../nightwatch.conf.js');


exports.command = function (callback) {
	this.deleteCookies();
	this.pause(1000);

	if (typeof callback === 'function') {
		callback.call(this);
	}

	return this;
};
