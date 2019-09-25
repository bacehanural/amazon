const baseConfig = require('./nightwatch.conf.js');

const config = {
    ...baseConfig,
    src_folders: ['vrt-tests'],
};

module.exports = config;