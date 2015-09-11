import SlashCommandModel from './models/SlashCommandModel.js';
import SpoilerStore from './spoilerStore.js';
import Moniker from 'moniker';

var spoilerStore = new SpoilerStore();

// Array of objects wherein each object contains: method, path, callback that lines up with restify
var routes = [
	{
		method: 'post',
		path: '/spoiler',
		callback: function(request, response, next) {
			var slashCommandData = new SlashCommandModel(request.body);
			var name;
			while (!name || spoilerStore.get(name)) {
				name = Moniker.generator([Moniker.adjective, Moniker.noun]).choose();
			}

			spoilerStore.set(name, slashCommandData.text);
			response.send(name);
			return next();
		}
	},
	{
		method: 'post',
		path: '/spoil',
		callback: function(request, response, next) {
			var slashCommandData = new SlashCommandModel(request.body);
			var spoiler = spoilerStore.get(slashCommandData.text);
			response.send(spoiler);
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