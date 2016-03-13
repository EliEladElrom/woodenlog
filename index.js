/**
 * WoodenLog
 * Copyright 2016 Eli Elrom, All Rights Reserved.
 * Code licensed under the MIT License:
 * @author Eli Elrom
 */

const style = require('ansi-styles');

var logFunction = console.log,
	logColor = 'green',
	warnColor = 'yellow',
	errorColor = 'red';

module.exports = {

	/**
	 * log message
	 *
	 * @param {Object} object
	 */
	log: function(object) {
		logFunction(style[logColor].open + object + style[logColor].close);
		return true;
	},

	/**
	 * warn message
	 *
	 * @param {Object} object
	 */
	warn: function(object) {
		logFunction(style[warnColor].open + object + style[warnColor].close);
		return true;
	},

	/**
	 *
	 * error message
	 *
	 * @param {Object} object
	 */
	error: function(object) {
		logFunction(style[errorColor].open + object + style[errorColor].close);
		return true;
	},

	/**
	 * configurate
	 *
	 * @param {Object} logOutFunction
	 * @param {String} logColorName
	 * @param {String} warnColorName
	 * @param {String} errorColorName
	 *
	 */
	configurate: function(logOutFunction, logColorName, warnColorName, errorColorName) {
		if (logOutFunction) logFunction = logOutFunction;
		logColor = logColorName;
		warnColor = warnColorName;
		errorColor = errorColorName;
		return true;
	}
};