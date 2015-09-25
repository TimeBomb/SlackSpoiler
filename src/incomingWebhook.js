import restify from 'restify';
import config from './config.js';

const INCOMING_WEBHOOK_PROP = config.incomingWebhookUrl;

export default class IncomingWebhook {
	constructor() {
		this.client = restify.createJsonClient({
			url: INCOMING_WEBHOOK_PROP,
			version: '*', // TODO: Is this necessary?
		});
	}

	sendMessage(channel, text) {
		this.client.post('/', {
			channel: '#' + channel,
			text: text,
		}, function(error, request, response, data) {

		});
	}
}