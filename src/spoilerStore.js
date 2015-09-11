import Store from 'jfs';

export default class SpoilerStore {
	constructor() {
		var me = this;
		this.db = new Store('spoilers', {
			type: 'single',
		});
		this.db.all(function(error, data) {
			if (error) {
				throw error;
			}
			me.cache = data;
		})
	}

	get(key) {
		return this.cache[key];
	}

	set(key, value) {
		this.cache[key] = value;
		return this.db.save(key, value);
	}
}