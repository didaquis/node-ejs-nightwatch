const chromedriver = require('chromedriver');

module.exports = {
	'src_folders': [
		'./e2e-tests/tests/'// Where you are storing your Nightwatch e2e tests
	],
	'custom_commands_path': './e2e-tests/custom-commands/',
	'output_folder': './e2e-tests/reports/', // reports (test outcome) output by nightwatch
	'webdriver' : {
		'start_process': true, // tells nightwatch to start/stop the process by itself
		'server_path': chromedriver.path,
		'host': '127.0.0.1',
		'port': 9515,
		'log_path' : './e2e-tests/logs-e2e/'
	},
	'test_workers': {
		'enabled': true,
		'workers': 'auto'
	},
	'test_settings': {
		'default': {
			'webdriver': {
				'server_path': chromedriver.path,
				'cli_args': [
					'--log', 'debug'
				]
			},
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
				'javascriptEnabled': true, // turn off to test progressive enhancement
				'acceptInsecureCerts' : true
			}
		}
	}
};
