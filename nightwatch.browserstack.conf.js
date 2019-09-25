const baseConfig = require('./nightwatch.conf.js');

const config = {
    ...baseConfig,
    webdriver: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },
};

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
config.test_settings.default.desiredCapabilities.chromeOptions.args = [];

config.test_settings.windowsFirefox = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browserName: 'Firefox',
        browser_version: '69.0',
        ['browserstack.local']: false
    }       
};

config.test_settings.windowsEdge = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browserName: 'Edge',
        browser_version: '17.0',
        ['browserstack.local']: false
    }       
};

config.test_settings.osxSafari = {
    desiredCapabilities: {
        os: 'OS X',
        os_version: 'Mojave',
        browserName: 'Safari',
        browser_version: '12.0',
        ['browserstack.local']: false
    }       
};

config.test_settings.osxChrome = {
    desiredCapabilities: {
        os: 'OS X',
        os_version: 'Mojave',
        browserName: 'Chrome',
        browser_version: '76.0',
        ['browserstack.local']: false
    }       
};

config.test_settings.iphoneX = {
    desiredCapabilities: {
        os_version: '11',
        device : 'iPhone X',
        real_mobile: true,
        ['browserstack.local']: false
    }       
};

config.test_settings.samsungGalaxy = {
    desiredCapabilities: {
        os_version: '7.0',
        device : 'Samsung Galaxy S8',
        real_mobile: true,
        ['browserstack.local']: false
    }       
};

// Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;