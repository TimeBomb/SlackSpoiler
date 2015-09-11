import restify from 'restify';

export default class RestServer {
	constructor() {
		var me = this;
		this.server = restify.createServer();
		this.server.use(restify.bodyParser());

		this.routes = require('./routes.js');
		this.routes.forEach(function(route) {
			me.server[route.method](route.path, route.callback);
		});
	}

	start(port) {
		this.server.listen(port, function() {
			console.log('Rest Server listening on port ', port);
		})
	}
}