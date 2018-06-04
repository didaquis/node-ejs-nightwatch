const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

module.exports = {
	'src_folders': [
		'./e2e-tests/tests/'// Where you are storing your Nightwatch e2e tests
	],
	'output_folder': './e2e-tests/reports/', // reports (test outcome) output by nightwatch
	'selenium': {
		'start_process': true, // tells nightwatch to start/stop the selenium process
		'server_path': seleniumServer.path,
		'host': '127.0.0.1',
		'port': 4444, // standard selenium port
		'cli_args': {
			'webdriver.chrome.driver' : chromedriver.path
		},
		'log_path' : './e2e-tests/logs/'
	},
	'test_settings': {
		'default': {
			'screenshots': {
				'enabled': true, // if you want to keep screenshots
				'path': './e2e-tests/screenshots/' // save screenshots here, but you can define it when you do the screenshot
			},
			'globals': {
				'waitForConditionTimeout': 5000 // sometimes internet is slow so wait.
			},
			'desiredCapabilities': { // use Chrome as the default browser for tests
				'browserName': 'chrome'
			}
		},
		'chrome': {
			'desiredCapabilities': {
				'browserName': 'chrome',
				'javascriptEnabled': true // turn off to test progressive enhancement
			}
		}
	}
};
