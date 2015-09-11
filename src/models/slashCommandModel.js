// TODO: Any (helper) methods for handling data
export default class SlashCommandModel {
	constructor(data) {
		this.token = data.token;
		this.teamId = data.team_id;
		this.channelId = data.channel_id;
		this.channelName = data.channel_name;
		this.userId = data.user_id;
		this.userName = data.user_name;
		this.command = data.command;
		this.text = data.text;
	}
}