'use strict';

/* Module doc */
/**
 * Log a message on console
 * @module logToConsole
 */
exports.command = function (message = '') {
	return this.perform(function (browser, done) {
		console.log('\n \x1b[36m INFO: \x1b[0m ' + message + '\n'); // eslint-disable-line no-console
		done();
	});
};
