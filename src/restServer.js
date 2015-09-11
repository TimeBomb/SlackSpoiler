import restify from 'restify';


export default class RestServer {
	constructor() {
		this.server = restify.createServer();
	}

	start(port) {
		this.server.listen(port, function() {
			console.log('Rest Server listening on port ', port);
		})
	}
}