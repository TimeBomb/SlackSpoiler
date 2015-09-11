import SlashCommandModel from './models/SlashCommandModel.js'

// Array of objects wherein each object contains: method, path, callback that lines up with restify
var routes = [
	{
		method: 'post',
		path: '/spoiler',
		callback: function(request, response, next) {
			var slashCommandData = new SlashCommandModel(request.body);
			response.send(slashCommandData);
			return next();
		}
	},
	{
		method: 'get',
		path: '/',
		callback: function(request, response, next) {
			response.send('I am alive.');
			return next();
		}
	}
];
export default routes;