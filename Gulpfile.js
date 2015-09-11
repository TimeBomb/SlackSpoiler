/*jslint node: true */
'use strict';

var SERVER_PORT = 8080;

require('babel/register');
var gulp = require('gulp');
var RestServer = require('./src/restServer.js');

var tasks = {};

tasks.start = function() {
	var restServer = new RestServer();
	restServer.start(SERVER_PORT);
};

tasks.default = tasks.start;

// Register tasks with gulp
Object.keys(tasks).forEach(function(taskName) {
	var taskFunction = tasks[taskName];
	gulp.task(taskName, taskFunction);
});

module.exports = tasks;