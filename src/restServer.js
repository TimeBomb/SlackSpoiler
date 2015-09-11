import restify from 'restify';

export default class RestServer {
	constructor() {
		var me = this;
		this.server = restify.createServer();
		this.server.use(restify.bodyParser()); // For parsing POST request data

		this.routes = require('./routes.js');
		this.routes.forEach(function(route) {
			var errorSafeCallback = function(request, response) {
				try {
					route.callback.apply(this, arguments);
				} catch(exception) {
					console.error('There was a problem accessing the route:', route.path);
					console.error(exception);
					response.send(500);
				}
			}
			me.server[route.method](route.path, errorSafeCallback);
		});
	}

	start(port) {
		this.server.listen(port, function() {
			console.log('Rest Server listening on port ', port);
		})
	}
}