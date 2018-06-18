/**
 * Return data form package.json file
 * @type {object}
 */
const pkginfo = require('pkginfo')(module, ['name', 'version', 'description', 'author']);

exports = module.exports;
